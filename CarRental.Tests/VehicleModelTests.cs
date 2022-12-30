using CarRental.Data.Interfaces;
using CarRental.Data.Models;
using CarRentalET.Controllers;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System.Collections.Generic;
using Xunit;


namespace CarRental.Tests
{
    public class VehicleModelTests
    {
        [Fact]
        public async void GetCarModels_WhenCorrectData_ShouldReturnOk()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetAllVehicleModelsAsync()).ReturnsAsync(new List<VehicleModel> { });

            var controller = new VehicleModelsController(mockRepo.Object);
            var result = await controller.GetCarModels();

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void GetCarModels_WhenCorrectData_ShouldReturnAlignableModel()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetAllVehicleModelsAsync()).ReturnsAsync(new List<VehicleModel> { new VehicleModel { Id = 1, Manufacturer = "Audi", Model = "A4", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true } });

            var controller = new VehicleModelsController(mockRepo.Object);
            var result = await controller.GetCarModels();

            var viewResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsAssignableFrom<IEnumerable<VehicleModel>>(viewResult.Value);
        }

        [Fact]
        public async void GetCarModels_WhenCorrectData_ShouldReturnIndjectedValue()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetAllVehicleModelsAsync()).ReturnsAsync(new List<VehicleModel> { new VehicleModel { Id = 1, Manufacturer = "Audi", Model = "A4", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true } });
            var controller = new VehicleModelsController(mockRepo.Object);
            var result = await controller.GetCarModels();
            var vehicleList = new List<VehicleModel> { new VehicleModel { Id = 1, Manufacturer = "Audi", Model = "A4", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true } };

            var viewResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsAssignableFrom<IEnumerable<VehicleModel>>(viewResult.Value);
            Assert.NotStrictEqual<IEnumerable<VehicleModel>>(model, vehicleList);
        }
    }
}