using CarRental.Data;
using CarRentalET.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalET.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
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
        public async Task<IActionResult> AddCarModel(VehicleModel model)
        {
            var vehicleModel = new VehicleModel()
            {
                Id = model.Id,
                Manufacturer = model.Manufacturer,
                Type = model.Type,
                Seats = model.Seats,
                HPs = model.HPs,
                Axes = model.Axes
            };

            await _dbContext.VehicleModels.AddAsync(vehicleModel);
            await _dbContext.SaveChangesAsync();
            return Ok(vehicleModel);
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
        public async Task<IActionResult> AddCar(VehiclePOST car)
        {
            var vehicle = new Vehicle()
            {
                Id = car.Id,
                Model = await _dbContext.VehicleModels.FindAsync(car.Model),
                Mileage = car.Mileage,
                ProductionDate = car.ProductionDate,
                State = car.State
            };

            await _dbContext.Vehicles.AddAsync(vehicle);
            await _dbContext.SaveChangesAsync();
            return Ok(vehicle);
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
