using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace CarRentalET.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CarRentalController : ControllerBase
    {
        [HttpGet("GetCars")]
        public IActionResult Get()
        {
            return Ok(1);
        }
    }
}
