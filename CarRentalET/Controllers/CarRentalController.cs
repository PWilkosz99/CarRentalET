using CarRental.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarRentalController : ControllerBase
    {
        CarRentalContext _dbContext;

        public CarRentalController(CarRentalContext dbContext)
        {
            _dbContext = dbContext;
        }

        [HttpGet("GetCars")]
        public IActionResult Get()
        {
            var cars = _dbContext.Cars.ToList();
            return Ok(cars);
        }

    }
}
