using CarRental.Data.Interfaces;
using CarRental.Data.Models;
using CarRentalET.Controllers;
using CarRentalET.Dtos;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
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
            mockRepo.Setup(repo => repo.GetAllVehicleModelsAsync()).ReturnsAsync(new List<VehicleModel> { new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true } });

            var controller = new VehicleModelsController(mockRepo.Object);
            var result = await controller.GetCarModels();

            var viewResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsAssignableFrom<IEnumerable<VehicleModel>>(viewResult.Value);
        }

        [Fact]
        public async void GetCarModels_WhenCorrectData_ShouldReturnIenumaerable()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetAllVehicleModelsAsync()).ReturnsAsync(new List<VehicleModel> { new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true } });
            var controller = new VehicleModelsController(mockRepo.Object);
            var result = await controller.GetCarModels();
            var vehicleList = new List<VehicleModel> { new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true } };

            var viewResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsAssignableFrom<IEnumerable<VehicleModel>>(viewResult.Value);
            Assert.NotStrictEqual<IEnumerable<VehicleModel>>(model, vehicleList);
        }

        [Fact]
        public async void GetCarModels_WhenNull_ShouldReturnIenumaerable()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetAllVehicleModelsAsync()).ReturnsAsync(null as List<VehicleModel>);
            var controller = new VehicleModelsController(mockRepo.Object);
            
            var result = await controller.GetCarModels();

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void AddCarModel_WhenCorrectData_ShouldReturnOk()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.InsertVehicleModelAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true }));
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example manufacturer",
                Model = "Example model",
                Type = "Sedan",
                Fuel = "Diesel",
                Seats = 5,
                HPs = 150,
                Axes = "AWD",
                Gearbox = "Automatic",
                AirConditioning = true
            };

            var result = await controller.AddCarModel(model);

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void AddCarModel_WhenCorrectData_ShouldReturnOk2()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.InsertVehicleModelAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true }));
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example manufacturer 555",
                Model = "Example model 111",
                Type = "Hatchback",
                Fuel = "Electric",
                Seats = 3,
                HPs = 125,
                Axes = "RWD",
                Gearbox = "Manual",
                AirConditioning = true
            };

            var result = await controller.AddCarModel(model);

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void AddCarModel_WhenEmptyData_ShouldReturnOk()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.InsertVehicleModelAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true }));
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
            };

            var result = await controller.AddCarModel(model);

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void AddCarModel_WhenCorrectData_ShouldReturnInteger()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.InsertVehicleModelAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true }));
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example manufacturer",
                Model = "Example model",
                Type = "Sedan",
                Fuel = "Diesel",
                Seats = 5,
                HPs = 150,
                Axes = "AWD",
                Gearbox = "Automatic",
                AirConditioning = true
            };

            var result = await controller.AddCarModel(model);

            var viewResult = Assert.IsType<OkObjectResult>(result);
            Assert.IsAssignableFrom<int>(viewResult.Value);
        }

        [Fact]
        public async void AddCarModel_WhenCorrectData_ShouldReturnInteger2()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.InsertVehicleModelAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true }));
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example manufacturer 555",
                Model = "Example model 111",
                Type = "Hatchback",
                Fuel = "Electric",
                Seats = 3,
                HPs = 125,
                Axes = "RWD",
                Gearbox = "Manual",
                AirConditioning = true
            };

            var result = await controller.AddCarModel(model);

            var viewResult = Assert.IsType<OkObjectResult>(result);
            Assert.IsAssignableFrom<int>(viewResult.Value);
        }

        [Fact]
        public async void AddCarModel_WhenCorrectData_ShouldReturnId()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.InsertVehicleModelAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true }));
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example manufacturer",
                Model = "Example model",
                Type = "Sedan",
                Fuel = "Diesel",
                Seats = 5,
                HPs = 150,
                Axes = "AWD",
                Gearbox = "Automatic",
                AirConditioning = true
            };

            var result = await controller.AddCarModel(model);

            var viewResult = Assert.IsType<OkObjectResult>(result);
            int res = Assert.IsAssignableFrom<int>(viewResult.Value);
            Assert.Equal(0, res);
        }
        
        [Fact]
        public async void EditCarModel_WhenCorrectData_ShouldReturnOk()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetVehicleModelByIdAsync(It.IsAny<int>())).ReturnsAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true });
            mockRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example Manufacturer",
                Model = "Example Model",
                Type = "Sedan",
                Fuel = "Diesel",
                Seats = 5,
                HPs = 150,
                Axes = "AWD",
                Gearbox = "Automatic",
                AirConditioning = true
            };
            
            var result = await controller.EditCarModel(1, model);

            var viewResult = Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void EditCarModel_WhenNotInDB_ShouldReturnNotFound()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetVehicleModelByIdAsync(It.IsAny<int>())).ReturnsAsync((VehicleModel)null);
            mockRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example Manufacturer",
                Model = "Example Model",
                Type = "Sedan",
                Fuel = "Diesel",
                Seats = 5,
                HPs = 150,
                Axes = "AWD",
                Gearbox = "Automatic",
                AirConditioning = true
            };
            var result = await controller.EditCarModel(1, model);

            var viewResult = Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async void EditCarModel_WhenNotInDB_ShouldReturnNotFound2()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetVehicleModelByIdAsync(It.IsAny<int>())).ReturnsAsync((VehicleModel)null);
            mockRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = "Example manufacturer 555",
                Model = "Example model 111",
                Type = "Hatchback",
                Fuel = "Electric",
                Seats = 3,
                HPs = 125,
                Axes = "RWD",
                Gearbox = "Manual",
                AirConditioning = true
            };

            var result = await controller.EditCarModel(555, model);

            var viewResult = Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async void EditCarModel_WhenNullableDTO_ShouldReturnNotFound()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetVehicleModelByIdAsync(It.IsAny<int>())).ReturnsAsync((VehicleModel)null);
            mockRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = null,
                Model = null,
                Type = null,
                Fuel = null,
                Seats = 5,
                HPs = 125,
                Axes = null,
                Gearbox = null,
                AirConditioning = true
            };

            var result = await controller.EditCarModel(555, model);

            var viewResult = Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async void EditCarModel_WhenNullableDTO_ShouldOk()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.GetVehicleModelByIdAsync(It.IsAny<int>())).ReturnsAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true });
            mockRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehicleModelsController(mockRepo.Object);

            var model = new VehicleModelDto
            {
                Manufacturer = null,
                Model = null,
                Type = null,
                Fuel = null,
                Seats = 5,
                HPs = 125,
                Axes = null,
                Gearbox = null,
                AirConditioning = true
            };

            var result = await controller.EditCarModel(555, model);

            var viewResult = Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void DeleteCarModel_WhenCorrectData_ShouldReturnOk()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.DeleteVehicleModelAsync(It.IsAny<int>())).ReturnsAsync(true);
            var controller = new VehicleModelsController(mockRepo.Object);


            var result = await controller.DeleteCarModel(1);

            var viewResult = Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void DeleteCarModel_WhenWrongData_ShouldBadRequest()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.DeleteVehicleModelAsync(It.IsAny<int>())).ReturnsAsync(false);
            var controller = new VehicleModelsController(mockRepo.Object);


            var result = await controller.DeleteCarModel(1);

            var viewResult = Assert.IsType<BadRequestResult>(result);
        }

        [Fact]
        public async System.Threading.Tasks.Task DeleteCarModel_WhenReturnNull_ShouldThrowNullReferenceException()
        {
            var mockRepo = new Mock<IVehicleModelRepostiory>();
            mockRepo.Setup(repo => repo.DeleteVehicleModelAsync(It.IsAny<int>())).ReturnsAsync(null);
            var controller = new VehicleModelsController(mockRepo.Object);

            var ex = await Assert.ThrowsAsync<NullReferenceException>(() => controller.DeleteCarModel(1));
        }
    }
}