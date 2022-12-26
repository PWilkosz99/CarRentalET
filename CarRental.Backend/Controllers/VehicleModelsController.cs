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
    public class VehicleModelsController : ControllerBase
    {

        private readonly IVehicleModelRepostiory _models;

        public VehicleModelsController(IVehicleModelRepostiory models)
        {
            _models = models;
        }

        [HttpGet("GetCarModels")]
        public async Task<IActionResult> GetCarModels()
        {
            return Ok(await _models.GetAllVehicleModelsAsync());
        }

        [Authorize]
        [HttpPost("AddCarModel")]
        public async Task<IActionResult> AddCarModel(VehicleModelDto model)
        {
            var vehicleModel = new VehicleModel()
            {
                Manufacturer = model.Manufacturer,
                Model = model.Model,
                Type = model.Type,
                Fuel = model.Fuel,
                Seats = model.Seats,
                HPs = model.HPs,
                Axes = model.Axes,
                Gearbox = model.Gearbox,
                AirConditioning = model.AirConditioning
            };

            await _models.InsertVehicleModelAsync(vehicleModel);
            return Ok(vehicleModel.Id);
        }

        [Authorize]
        [HttpPost("EditCarModel/{id}")]
        public async Task<IActionResult> EditCarModel(int id, VehicleModelDto dto)
        {
            var model = await _models.GetVehicleModelByIdAsync(id);
            if (model == null)
            {
                return NotFound();
            }
            else
            {
                model.Manufacturer = dto.Manufacturer;
                model.Model = dto.Model;
                model.Type = dto.Type;
                model.Fuel = dto.Fuel;
                model.Seats = dto.Seats;
                model.HPs = dto.HPs;
                model.Axes = dto.Axes;

                await _models.SaveAsync();
            }
            return Ok();
        }

        [Authorize]
        [HttpDelete("DeleteCarModel/{id}")]
        public async Task<IActionResult> DeleteCarModel(int id)
        {
            if (await _models.DeleteVehicleModelAsync(id))
            {
                return Ok();
            }
            return BadRequest();
        }
    }
}
