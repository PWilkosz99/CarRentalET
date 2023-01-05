using CarRental.Data.Dal;
using CarRental.Data.Interfaces;
using CarRental.Data.Migrations;
using CarRental.Data.Models;
using CarRentalET.Controllers;
using CarRentalET.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR;
using Microsoft.EntityFrameworkCore;
using MockQueryable.Moq;
using Moq;
using Moq.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Xunit;

namespace CarRental.Tests
{
    public class ReservationTests
    {
        [Fact]
        public async void GetAvaliableCars_WhenFilledList_ShouldOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();

            var userContextMock = new Mock<CarRentalDbContext>();
            IList<Vehicle> vehicles = new List<Vehicle>{
                    new Vehicle { Id = 1, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 2, Model = new VehicleModel { Manufacturer = "Test 3", Model = "Test 4" } }
            };
            var mock = vehicles.AsQueryable().BuildMock();
            mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsAsync(mock);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };

            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void GetAvaliableCars_OneItemList_ShouldOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();

            var userContextMock = new Mock<CarRentalDbContext>();
            IList<Vehicle> vehicles = new List<Vehicle>{
                    new Vehicle { Id = 1, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 2, Model = new VehicleModel { Manufacturer = "Test 3", Model = "Test 4" } }
            };
            var mock = vehicles.AsQueryable().BuildMock();
            mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsAsync(mock);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };

            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void GetAvaliableCars_WhenEmptyList_ShouldOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            var userContextMock = new Mock<CarRentalDbContext>();
            IList<Vehicle> vehicles = new List<Vehicle>{
            };
            var mock = vehicles.AsQueryable().BuildMock();
            mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsAsync(mock);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };


            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void GetAvaliableCars_WhenEmptyData_ShouldReturnOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };

            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
        }

        [Fact]
        public async void GetAvaliableCars_EmptyList_ShouldReturnList()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();

            List<Vehicle> vehicles = new List<Vehicle>();

            var mock = vehicles.AsQueryable().BuildMock();
            mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsAsync(mock);
            mockVehicleRepo.Setup(repo => repo.GetAllVehiclesAsync()).ReturnsAsync(vehicles);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };

            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
            Assert.IsType<List<Vehicle>>(viewResult.Value);
        }

        [Fact]
        public async void GetAvaliableCars_FilledList_ShouldReturnList()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();

            List<Vehicle> vehicles = new List<Vehicle>{
                    new Vehicle { Id = 1, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 2, Model = new VehicleModel { Manufacturer = "Test 3", Model = "Test 4" } }
            };

            var mock = vehicles.AsQueryable().BuildMock();
            mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsAsync(mock);
            mockVehicleRepo.Setup(repo => repo.GetNotIncludedAsync(It.IsAny<IQueryable<Vehicle>>())).ReturnsAsync(vehicles);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };

            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
            Assert.IsType<List<Vehicle>>(viewResult.Value);
        }


        [Fact]
        public async void GetAvaliableCars_FilledList_ShouldReturnEmptyList()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();

            List<Vehicle> vehicles = new List<Vehicle>{
                    new Vehicle { Id = 1, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 2, Model = new VehicleModel { Manufacturer = "Test 3", Model = "Test 4" } }
            };

            List<Vehicle> vehicles2 = new List<Vehicle>();

            var mock = vehicles.AsQueryable().BuildMock();
            mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsAsync(mock);
            mockVehicleRepo.Setup(repo => repo.GetNotIncludedAsync(It.IsAny<IQueryable<Vehicle>>())).ReturnsAsync(vehicles2);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };

            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(0, ((List<Vehicle>)viewResult.Value).Count);
        }

        [Fact]
        public async void GetAvaliableCars_FilledList_ShouldReturn5Items()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();

            List<Vehicle> vehicles = new List<Vehicle>{
                    new Vehicle { Id = 1, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 2, Model = new VehicleModel { Manufacturer = "Test 3", Model = "Test 4" } }
            };

            List<Vehicle> vehicles5 = new List<Vehicle>{
                    new Vehicle { Id = 1, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 2, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 3, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 4, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
                    new Vehicle { Id = 5, Model = new VehicleModel { Manufacturer = "Test 1", Model = "Test 2" } },
            };

            var mock = vehicles.AsQueryable().BuildMock();
            mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsAsync(mock);
            mockVehicleRepo.Setup(repo => repo.GetNotIncludedAsync(It.IsAny<IQueryable<Vehicle>>())).ReturnsAsync(vehicles5);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            DatesDto dto = new DatesDto()
            {
                StartDate = new DateTime(2022, 10, 10),
                EndDate = new DateTime(2022, 10, 15)
            };

            var result = await controller.GetAvaliableCars(dto);

            var viewResult = Assert.IsType<OkObjectResult>(result);
            Assert.Equal(5, ((List<Vehicle>)viewResult.Value).Count);
        }


        [Fact]
        public async void GetReservedCar_WhenWrongData_ShouldReturnBadRequest()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            var result = await controller.GetReservedCars();

            var viewResult = Assert.IsType<BadRequestResult>(result);
        }


        [Fact]
        public async void DeleteReservation_WhenCorrectData_ShouldReturnOk()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            mockReservationRepo.Setup(repo => repo.DeleteReservationAsync(It.IsAny<int>())).ReturnsAsync(true);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            var result = await controller.DeleteReservation(1);

            var viewResult = Assert.IsType<OkResult>(result);
        }
        
        [Fact]
        public async void DeleteReservation_WhenWrongData_ShouldReturnBadRequest()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            mockReservationRepo.Setup(repo => repo.DeleteReservationAsync(It.IsAny<int>())).ReturnsAsync(false);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            var result = await controller.DeleteReservation(1);

            var viewResult = Assert.IsType<BadRequestResult>(result);
        }

        [Fact]
        public async void DeleteReservation_WhenNull_ShouldReturnThrowError()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            mockReservationRepo.Setup(repo => repo.DeleteReservationAsync(It.IsAny<int>())).ReturnsAsync(null);
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            var ex = await Assert.ThrowsAsync<NullReferenceException>(() => controller.DeleteReservation(1));
        }

        [Fact]
        public async void ReserveCar_WhenWrongData_ShouldReturnNotFound()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            var result = await controller.ReserveCar(new ReservationDto());

            var viewResult = Assert.IsType<NotFoundObjectResult>(result);
        }

        [Fact]
        public async void ReserveCar_WhenWrongData_ShouldReturnNotFoundString()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            var result = await controller.ReserveCar(new ReservationDto());

            var viewResult = Assert.IsType<NotFoundObjectResult>(result);
            Assert.Equal("User not found!", viewResult.Value);
        }
    }
}
