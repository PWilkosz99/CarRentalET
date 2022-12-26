//using CarRental.Data.Dal;
//using CarRental.Data.Models;
//using CarRentalET.Dtos;
//using CarRentalET.Models;
//using Microsoft.AspNetCore.Authorization;
//using Microsoft.AspNetCore.Mvc;
//using Microsoft.EntityFrameworkCore;

//namespace CarRentalET.Controllers
//{
//    [ApiController
//    [Route("api")]
//    public class CarRentalController : ControllerBase
//    {
//        CarRentalContext _dbContext;

//        public CarRentalController(CarRentalContext dbContext)
//        {
//            _dbContext = dbContext;
//        }

//        //[HttpGet("GetCarModels")]
//        //public IActionResult GetCarModels()
//        //{

//        //    var models = _dbContext.VehicleModels.ToList();
//        //    return Ok(models);
//        //}

//        //[Authorize]
//        //[HttpPost("AddCarModel")]
//        //public async Task<IActionResult> AddCarModel(VehicleModelDto model)
//        //{
//        //    var vehicleModel = new VehicleModel()
//        //    {
//        //        Manufacturer = model.Manufacturer,
//        //        Model = model.Model,
//        //        Type = model.Type,
//        //        Fuel = model.Fuel,
//        //        Seats = model.Seats,
//        //        HPs = model.HPs,
//        //        Axes = model.Axes,
//        //        Gearbox = model.Gearbox,
//        //        AirConditioning = model.AirConditioning
//        //    };

//        //    await _dbContext.VehicleModels.AddAsync(vehicleModel);
//        //    await _dbContext.SaveChangesAsync();
//        //    return Ok(vehicleModel.Id);
//        //}

//        //[Authorize]
//        //[HttpPost("EditCarModel/{id}")]
//        //public async Task<IActionResult> EditCarModel(int id, VehicleModelDto dto)
//        //{
//        //    var model = _dbContext.VehicleModels.FirstOrDefault(x => x.Id == id);
//        //    if (model == null)
//        //    {
//        //        return NotFound();
//        //    }
//        //    else
//        //    {
//        //        model.Manufacturer = dto.Manufacturer;
//        //        model.Model = dto.Model;
//        //        model.Type = dto.Type;
//        //        model.Fuel = dto.Fuel;
//        //        model.Seats = dto.Seats;
//        //        model.HPs = dto.HPs;
//        //        model.Axes = dto.Axes;

//        //        await _dbContext.SaveChangesAsync();
//        //    }
//        //    return Ok();
//        //}

//        //[Authorize]
//        //[HttpDelete("DeleteCarModel/{id}")]
//        //public async Task<IActionResult> DeleteCarModel(int id)
//        //{
//        //    var model = await _dbContext.VehicleModels.FindAsync(id);
//        //    if (model != null)
//        //    {
//        //        _dbContext.Remove(model);
//        //        await _dbContext.SaveChangesAsync();
//        //        return Ok();
//        //    }
//        //    return BadRequest();
//        //}


//        /////Car
//        //[HttpGet("GetCars")]
//        //public IActionResult GetCars()
//        //{
//        //    var cars = _dbContext.Vehicles.Include(x => x.Model).ToList(); //Eager loading
//        //    return Ok(cars);
//        //}

//        //[Authorize]
//        //[HttpPost("AddCar")]
//        //public async Task<IActionResult> AddCar(VehicleDto car)
//        //{
//        //    var model = _dbContext.VehicleModels.FirstOrDefault(x => x.Id == car.ModelId);

//        //    if (model == null)
//        //    {
//        //        return NotFound("Wrong model id");
//        //    }

//        //    var vehicle = new Vehicle()
//        //    {
//        //        Model = model,
//        //        Mileage = car.Mileage,
//        //        ProductionDate = car.ProductionDate,
//        //        CostPerDay = car.CostPerDay,
//        //        Color = car.Color,
//        //        Notes = car.Notes,
//        //        State = VehicleStates.Good
//        //    };

//        //    await _dbContext.Vehicles.AddAsync(vehicle);
//        //    await _dbContext.SaveChangesAsync();
//        //    return Ok();
//        //}

//        //[Authorize]
//        //[HttpPost("EditCar/{id}")]
//        //public async Task<IActionResult> EditCar(int id, VehicleDto dto)
//        //{
//        //    var model = _dbContext.Vehicles.FirstOrDefault(x => x.Id == id);
//        //    if (model == null)
//        //    {
//        //        return NotFound();
//        //    }
//        //    else
//        //    {
//        //        model.Mileage = dto.Mileage;
//        //        model.ProductionDate = dto.ProductionDate;
//        //        model.CostPerDay = dto.CostPerDay;
//        //        model.Color = dto.Color;
//        //        model.Notes = dto.Notes;
//        //        model.State = VehicleStates.Good;

//        //        await _dbContext.SaveChangesAsync();
//        //    }
//        //    return Ok();
//        //}

//        //[Authorize]
//        //[HttpDelete("DeleteCar/{id}")]
//        //public async Task<IActionResult> DeleteCar(int id)
//        //{
//        //    var model = await _dbContext.Vehicles.FindAsync(id);
//        //    if (model != null)
//        //    {
//        //        _dbContext.Remove(model);
//        //        await _dbContext.SaveChangesAsync();
//        //        return Ok();
//        //    }
//        //    return BadRequest();
//        //}

//        //[Authorize]
//        //[HttpPost("SaveImage")]
//        //public async Task<IActionResult> SaveImage([FromForm] ImageDto dto)
//        //{
//        //    var id = dto.Id;
//        //    var file = dto.Image;
//        //    var fileName = id + Path.GetExtension(file.FileName);
//        //    var dir = "..//CarRental.Frontend//public//Images//";

//        //    try
//        //    {
//        //        if (!(Directory.Exists(dir)))
//        //        {
//        //            Directory.CreateDirectory(dir);
//        //        }

//        //        using (Stream fileStream = new FileStream(dir + fileName, FileMode.Create))
//        //        {
//        //            await file.CopyToAsync(fileStream);
//        //        }
//        //    }
//        //    catch (Exception ex)
//        //    {
//        //        return BadRequest(ex.Message); 
//        //    }
//        //    return Ok(dir);
//        //}

//        [HttpPost("GetAvaliableCars")]
//        public async Task<IActionResult> GetAvaliableCars(DatesDto dto)
//        {
//            var startDateUTC = DateTime.SpecifyKind(dto.StartDate, DateTimeKind.Utc);
//            var endDateUTC = DateTime.SpecifyKind(dto.EndDate, DateTimeKind.Utc);

//            var cars = _dbContext.Reservations.Where(x => ((startDateUTC > x.StartDate && startDateUTC < x.EndDate) ||
//                (endDateUTC > x.StartDate && endDateUTC < x.EndDate) || (startDateUTC < x.StartDate && endDateUTC > x.EndDate))).Select(x => x.Vehicle);

//            List<Vehicle> availableCars = new();
//            if (cars.Count() != 0)
//            {
//                availableCars = _dbContext.Vehicles.Where(x => cars.Any(y => y.Id != x.Id)).Include(x => x.Model).ToList();
//            }
//            else
//            {
//                availableCars = _dbContext.Vehicles.Include(x => x.Model).ToList();
//            }

//            return Ok(availableCars);
//        }

//        [Authorize]
//        [HttpGet("GetReservedCars")]
//        public async Task<IActionResult> GetReservedCars()
//        {
//            List<Reservation> reservations = new();
//            try
//            {
//                var user = HttpContext.User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
//                if (user != null)
//                {
//                    reservations = _dbContext.Reservations.Where(x => x.Client.FirebaseID == user).Include(x => x.Vehicle.Model).ToList();
//                    if (reservations.Count() != 0)
//                    {
//                        return Ok(reservations);
//                    }
//                    else
//                    {
//                        return NotFound("Reservartions not found");
//                    }

//                }
//                return BadRequest();
//            }
//            catch (Exception e)
//            {
//                return BadRequest();
//            }
//        }

//        [Authorize]
//        [HttpDelete("DeleteReservation/{id}")]
//        public async Task<IActionResult> DeleteReservation(int id)
//        {
//            //TODO: Add auth
//            var res = await _dbContext.Reservations.FindAsync(id);
//            if (res != null)
//            {
//                _dbContext.Remove(res);
//                await _dbContext.SaveChangesAsync();
//                return Ok();
//            }
//            return BadRequest();
//        }

//        [Authorize]
//        [HttpPost("ReserveCar")]
//        public async Task<IActionResult> ReserveCar(ReservationDto dto)
//        {
//            var user = HttpContext.User.Claims.FirstOrDefault(x => x.Type == "user_id")?.Value;
//            if (user == null)
//            {
//                return NotFound("User not found!");
//            }
//            else
//            {
//                var vehicle = await _dbContext.Vehicles.FindAsync(dto.VehicleId);
//                if (vehicle == null)
//                {
//                    return NotFound("Car not found!");
//                }

//                Client client = new()
//                {
//                    FirebaseID = user,
//                    Firstname = dto.Firstname,
//                    Lastname = dto.Lastname,
//                    Phone = dto.Phone,
//                    Address = dto.Address,
//                    City = dto.City,
//                    Country = dto.Country,
//                    PostalCode = dto.PostalCode,
//                    DrivingLicense = dto.DrivingLicense
//                };

//                Payment payment = new()
//                {
//                    Type = "Credit card",
//                    CardNumber = dto.CardNumber,
//                    CardDate = DateOnly.Parse(dto.CardDate),
//                    CVV = dto.CVV,
//                    CardOwnerName = dto.CardOwnerName
//                };

//                Reservation reservation = new()
//                {
//                    StartDate = DateTime.SpecifyKind(dto.StartDate, DateTimeKind.Utc),
//                    EndDate = DateTime.SpecifyKind(dto.EndDate, DateTimeKind.Utc),
//                    Client = client,
//                    Payment = payment,
//                    Vehicle = vehicle,
//                    Cost = dto.Cost
//                };

//                await _dbContext.Reservations.AddAsync(reservation);
//                await _dbContext.SaveChangesAsync();

//            }

//            return Created("aaa", "aaa");
//        }
//    }
//}
