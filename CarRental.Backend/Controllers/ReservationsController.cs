using CarRental.Data.Interfaces;
using CarRental.Data.Models;
using CarRentalET.Dtos;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarRentalET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReservationsController : ControllerBase
    {
        private readonly IReservationRepository _reservations;
        private readonly IVehicleRepository _vehicles;

        public ReservationsController(IReservationRepository reservations, IVehicleRepository vehicles)
        {
            _reservations = reservations;
            _vehicles = vehicles;
        }

        [HttpPost("GetAvaliableCars")]
        public async Task<IActionResult> GetAvaliableCars(DatesDto dto)
        {
            var startDateUTC = DateTime.SpecifyKind(dto.StartDate, DateTimeKind.Utc);
            var endDateUTC = DateTime.SpecifyKind(dto.EndDate, DateTimeKind.Utc);

            var reservedBetweenDate = await _reservations.GetVehiclesReserverdBetweenAsync(startDateUTC, endDateUTC);

            List<Vehicle> availableCars = new();
            if (reservedBetweenDate.Count() != 0)
            {
                availableCars = await _vehicles.GetNotIncludedAsync(reservedBetweenDate);
            }
            else
            {
                availableCars = await _vehicles.GetAllVehiclesAsync();
            }

            return Ok(availableCars);
        }

        [Authorize]
        [HttpGet("GetReservedCars")]
        public async Task<IActionResult> GetReservedCars()
        {
            List<Reservation> reservations = new();
            try
            {
                var user = HttpContext.User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
                if (user != null)
                {
                    reservations = await _reservations.GetVehiclesReservedByUserAsync(user);
                    if (reservations.Count != 0)
                    {
                        return Ok(reservations);
                    }
                    else
                    {
                        return NotFound("Reservartions not found");
                    }

                }
                return BadRequest();
            }
            catch (Exception e)
            {
                return BadRequest();
            }
        }

        [Authorize]
        [HttpDelete("DeleteReservation/{id}")]
        public async Task<IActionResult> DeleteReservation(int id)
        {
            if (await _reservations.DeleteReservationAsync(id))
            {
                return Ok();
            }
            return BadRequest();
        }

        [Authorize]
        [HttpPost("ReserveCar")]
        public async Task<IActionResult> ReserveCar(ReservationDto dto)
        {
            var user = HttpContext?.User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
            if (user == null)
            {
                return NotFound("User not found!");
            }
            else
            {
                var vehicle = await _vehicles.GetVehicleByIdAsync(dto.VehicleId);
                if (vehicle == null)
                {
                    return NotFound("Car not found!");
                }

                Client client = new()
                {
                    FirebaseID = user,
                    Firstname = dto.Firstname,
                    Lastname = dto.Lastname,
                    Phone = dto.Phone,
                    Address = dto.Address,
                    City = dto.City,
                    Country = dto.Country,
                    PostalCode = dto.PostalCode,
                    DrivingLicense = dto.DrivingLicense
                };

                Payment payment = new()
                {
                    Type = "Credit card",
                    CardNumber = dto.CardNumber,
                    CardDate = DateOnly.Parse(dto.CardDate),
                    CVV = dto.CVV,
                    CardOwnerName = dto.CardOwnerName
                };

                Reservation reservation = new()
                {
                    StartDate = DateTime.SpecifyKind(dto.StartDate, DateTimeKind.Utc),
                    EndDate = DateTime.SpecifyKind(dto.EndDate, DateTimeKind.Utc),
                    Client = client,
                    Payment = payment,
                    Vehicle = vehicle,
                    Cost = dto.Cost
                };

                await _reservations.InsertReservationAsync(reservation);

            }

            return Created("Creted", "4");
        }
    }
}
