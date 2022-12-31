using CarRental.Data.Interfaces;
using CarRental.Data.Models;
using CarRentalET.Controllers;
using CarRentalET.Dtos;
using Microsoft.AspNetCore.Mvc;
using Moq;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace CarRental.Tests
{
    public class VehicleTests
    {
        [Fact]
        public async void GetCar_WhenCorrectData_ShouldReturnOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            mockVehicleRepo.Setup(repo => repo.GetAllVehiclesAsync()).ReturnsAsync(new List<Vehicle> { });

            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);
            var result = await controller.GetCars();

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void GetCar_WhenCorrectData_ShouldReturnAlignableModel()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            mockVehicleRepo.Setup(repo => repo.GetAllVehiclesAsync()).ReturnsAsync(new List<Vehicle> { new Vehicle { } });
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);

            var result = await controller.GetCars();


            var viewResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsAssignableFrom<IEnumerable<Vehicle>>(viewResult.Value);
        }

        [Fact]
        public async void GetCar_WhenCorrectData_ShouldReturnObject()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();

            var vehicleList = new List<Vehicle> {
                {
                    new Vehicle {
                        Id = 1,
                        Model = new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true },
                        Mileage = 100000,
                        ProductionDate = new DateTime(2010, 1, 1),
                        CostPerDay = 100,
                        Color = "Black",
                        Notes = null,
                        State = VehicleStates.Good,
                        User = null,

                    }
                     }
                };

            mockVehicleRepo.Setup(repo => repo.GetAllVehiclesAsync()).ReturnsAsync(vehicleList);
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);
            var result = await controller.GetCars();

            var viewResult = Assert.IsType<OkObjectResult>(result);
            var model = Assert.IsAssignableFrom<IEnumerable<Vehicle>>(viewResult.Value);
            Assert.Equal(model.FirstOrDefault().Id, vehicleList.FirstOrDefault().Id);
            Assert.Equal(model.FirstOrDefault().State, vehicleList.FirstOrDefault().State);
            Assert.Equal(model.FirstOrDefault().CostPerDay, vehicleList.FirstOrDefault().CostPerDay);
            Assert.Equal(model.FirstOrDefault().Color, vehicleList.FirstOrDefault().Color);
            Assert.Equal(model.FirstOrDefault().ProductionDate, vehicleList.FirstOrDefault().ProductionDate);
        }

        [Fact]
        public async void AddCar_WhenWrongData_ShouldReturnNotFoundString()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            mockModelRepo.Setup(repo => repo.GetVehicleModelByIdAsync(It.IsAny<int>())).ReturnsAsync(null as VehicleModel);
            mockModelRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);

            VehicleDto dto = new VehicleDto
            {
                ModelId = 1,
                Mileage = 100000,
                ProductionDate = new DateTime(2010, 1, 1),
                CostPerDay = 100,
                Color = "Black",
                Notes = null,
                State = "great",
            };
            var result = await controller.AddCar(dto);

            var viewResult = Assert.IsType<NotFoundObjectResult>(result);
        }

        [Fact]
        public async void AddCar_WhenCorrectData_ShouldReturnOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            mockModelRepo.Setup(repo => repo.GetVehicleModelByIdAsync(It.IsAny<int>())).ReturnsAsync(new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true });
            mockModelRepo.Setup(repo => repo.SaveAsync());
            mockVehicleRepo.Setup(repo => repo.InsertVehicleAsync(It.IsAny<Vehicle>()));
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);

            VehicleDto dto = new VehicleDto
            {
                ModelId = 1,
                Mileage = 100000,
                ProductionDate = new DateTime(2010, 1, 1),
                CostPerDay = 100,
                Color = "Black",
                Notes = null,
                State = "great",
            };
            var result = await controller.AddCar(dto);

            var viewResult = Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void EditCar_WhenWrongData_ShouldReturnNotFoundString()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            mockVehicleRepo.Setup(repo => repo.GetVehicleByIdAsync(It.IsAny<int>())).ReturnsAsync(null as Vehicle);
            mockModelRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);

            VehicleDto dto = new VehicleDto
            {
                ModelId = 1,
                Mileage = 100000,
                ProductionDate = new DateTime(2010, 1, 1),
                CostPerDay = 100,
                Color = "Black",
                Notes = null,
                State = "great",
            };
            var result = await controller.EditCar(1, dto);

            var viewResult = Assert.IsType<NotFoundResult>(result);
        }

        [Fact]
        public async void EditCar_WhenCorrectData_ShouldReturnOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            var vehicleObj = new Vehicle
            {
                Id = 1,
                Model = new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true },
                Mileage = 100000,
                ProductionDate = new DateTime(2010, 1, 1),
                CostPerDay = 100,
                Color = "Black",
                Notes = null,
                State = VehicleStates.Good,
                User = null,

            };
            mockVehicleRepo.Setup(repo => repo.GetVehicleByIdAsync(It.IsAny<int>())).ReturnsAsync(vehicleObj);
            mockModelRepo.Setup(repo => repo.SaveAsync());
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);

            VehicleDto dto = new VehicleDto
            {
                ModelId = 1,
                Mileage = 100000,
                ProductionDate = new DateTime(2010, 1, 1),
                CostPerDay = 100,
                Color = "Black",
                Notes = null,
                State = "great",
            };
            var result = await controller.EditCar(1, dto);

            var viewResult = Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void DeleteCar_WhenCorrectData_ShouldReturnOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            mockVehicleRepo.Setup(repo => repo.DeleteVehicleAsync(It.IsAny<int>())).ReturnsAsync(true);
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);


            var result = await controller.DeleteCar(1);

            var viewResult = Assert.IsType<OkResult>(result);
        }

        [Fact]
        public async void DeleteCar_WhenWrongData_ShouldReturnBadRequest()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockModelRepo = new Mock<IVehicleModelRepostiory>();
            mockVehicleRepo.Setup(repo => repo.DeleteVehicleAsync(It.IsAny<int>())).ReturnsAsync(false);
            var controller = new VehiclesController(mockVehicleRepo.Object, mockModelRepo.Object);


            var result = await controller.DeleteCar(1);

            var viewResult = Assert.IsType<BadRequestResult>(result);
        }
    }
}
