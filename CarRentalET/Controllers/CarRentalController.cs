using CarRental.Data;
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
            var cars = _dbContext.Vehicles.ToList();
            return Ok(cars);
        }

        [HttpPost("AddCar")]
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

    }
}
