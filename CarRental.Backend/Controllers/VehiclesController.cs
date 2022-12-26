using CarRental.Data.Interfaces;
using CarRental.Data.Models;
using CarRentalET.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace CarRentalET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VehiclesController : ControllerBase
    {
        private readonly IVehicleRepository _vehicles;
        private readonly IVehicleModelRepostiory _models;

        public VehiclesController(IVehicleRepository vehicles, IVehicleModelRepostiory models)
        {
            _vehicles = vehicles;
            _models = models;
        }
        [HttpGet("GetCars")]
        public async Task<IActionResult> GetCars()
        {
            return Ok(await _vehicles.GetAllVehiclesAsync());
        }

        [Authorize]
        [HttpPost("AddCar")]
        public async Task<IActionResult> AddCar(VehicleDto car)
        {
            var model = await _models.GetVehicleModelByIdAsync(car.ModelId);

            if (model == null)
            {
                return NotFound("Wrong model id");
            }

            var vehicle = new Vehicle()
            {
                Model = model,
                Mileage = car.Mileage,
                ProductionDate = car.ProductionDate,
                CostPerDay = car.CostPerDay,
                Color = car.Color,
                Notes = car.Notes,
                State = VehicleStates.Good
            };

            await _vehicles.InsertVehicleAsync(vehicle);
            return Ok();
        }

        [Authorize]
        [HttpPost("EditCar/{id}")]
        public async Task<IActionResult> EditCar(int id, VehicleDto dto)
        {
            var vehicle = await _vehicles.GetVehicleByIdAsync(id);
            if (vehicle == null)
            {
                return NotFound();
            }
            else
            {
                vehicle.Mileage = dto.Mileage;
                vehicle.ProductionDate = dto.ProductionDate;
                vehicle.CostPerDay = dto.CostPerDay;
                vehicle.Color = dto.Color;
                vehicle.Notes = dto.Notes;
                vehicle.State = VehicleStates.Good;

                await _vehicles.SaveAsync();
            }
            return Ok();
        }

        [Authorize]
        [HttpDelete("DeleteCar/{id}")]
        public async Task<IActionResult> DeleteCar(int id)
        {
            if (await _vehicles.DeleteVehicleAsync(id))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
