using CarRental.Data;
using CarRentalET.Dtos;
using CarRentalET.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalET.Controllers
{
    [ApiController]
    [Route("api")]
    public class CarRentalController : ControllerBase
    {
        CarRentalContext _dbContext;

        public CarRentalController(CarRentalContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetCarModels")]
        public IActionResult GetCarModels()
        {
            var models = _dbContext.VehicleModels.ToList();
            return Ok(models);
        }

        [HttpPost("AddCarModel")]
        public async Task<IActionResult> AddCarModel(VehicleModelDto model)
        {
            var vehicleModel = new VehicleModel()
            {
                Manufacturer = model.Manufacturer,
                Type = model.Type,
                Fuel = model.Fuel,
                Seats = model.Seats,
                HPs = model.HPs,
                Axes = model.Axes
            };

            await _dbContext.VehicleModels.AddAsync(vehicleModel);
            await _dbContext.SaveChangesAsync();
            return Ok(vehicleModel);
        }

        [HttpPost("EditCarModel/{id}")]
        public async Task<IActionResult> EditCarModel(int id, VehicleModelDto dto)
        {
            var model = _dbContext.VehicleModels.FirstOrDefault(x => x.Id == id);
            if (model == null)
            {
                return NotFound();
            }
            else
            {
                model.Manufacturer = dto.Manufacturer;
                model.Type = dto.Type;
                model.Fuel = dto.Fuel;
                model.Seats = dto.Seats;
                model.HPs = dto.HPs;
                model.Axes = dto.Axes;

                await _dbContext.SaveChangesAsync();
            }
            return Ok();
        }

        [HttpDelete("DeleteCarModel/{id}")]
        public async Task<IActionResult> DeleteCarModel(int id)
        {
            var model = await _dbContext.VehicleModels.FindAsync(id);
            if (model != null)
            {
                _dbContext.Remove(model);
                await _dbContext.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }


        ///Car
        [HttpGet("GetCars")]
        public IActionResult GetCars()
        {
            var cars = _dbContext.Vehicles.ToList();
            return Ok(cars);
        }

        [HttpPost("AddCar")]
        public async Task<IActionResult> AddCar(VehicleDto car)
        {
            var model = _dbContext.VehicleModels.FirstOrDefault(x => x.Id == car.ModelId);

            if (model == null)
            {
                return NotFound("Wrong model id");
            }

            var vehicle = new Vehicle()
            {
                Model = model,
                Mileage = car.Mileage,
                ProductionDate =car.ProductionDate,
                CostPerDay = car.CostPerDay,
                Color = car.Color,
                Notes = car.Notes,
                State = VehicleStates.Good
        };

            await _dbContext.Vehicles.AddAsync(vehicle);
            await _dbContext.SaveChangesAsync();
            return Ok();
        }

        [HttpDelete("DeleteCar/{id}")]

        public async Task<IActionResult> DeleteCar(int id)
        {
            var model = await _dbContext.Vehicles.FindAsync(id);
            if (model != null)
            {
                _dbContext.Remove(model);
                await _dbContext.SaveChangesAsync();
                return Ok();
            }
            return BadRequest();
        }


    }
}
