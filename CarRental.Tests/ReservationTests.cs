using CarRental.Data.Interfaces;
using CarRental.Data.Models;
using CarRentalET.Controllers;
using CarRentalET.Dtos;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        //[Fact]
        //public async void GetAvaliableCars_WhenCorrectData_ShouldReturnOk()
        //{
        //    var vehicle =
        //            new Vehicle
        //            {
        //                Id = 1,
        //                Model = new VehicleModel { Id = 1, Manufacturer = "Example manufacturer", Model = "Example model", Type = "Sedan", Fuel = "Diesel", Seats = 5, HPs = 150, Axes = "AWD", Gearbox = "Automatic", AirConditioning = true },
        //                Mileage = 100000,
        //                ProductionDate = new DateTime(2010, 1, 1),
        //                CostPerDay = 100,
        //                Color = "Black",
        //                Notes = null,
        //                State = VehicleStates.Good,
        //                User = null,

        //            };

        //    var mockVehicleRepo = new Mock<IVehicleRepository>();
        //    var mockReservationRepo = new Mock<IReservationRepository>();
        //    //mockReservationRepo.Setup(repo => repo.GetVehiclesReserverdBetweenAsync(It.IsAny<DateTime>(), It.IsAny<DateTime>())).ReturnsDbSet(new List<Vehicle> { vehicle });
        //    //mockVehicleRepo.Setup(repo => repo.GetNotIncludedAsync(It.IsAny<IQueryable<Vehicle>>()));//.ReturnsAsync(Enumerable.Empty<Vehicle>().AsQueryable());
        //    //mockVehicleRepo.Setup(repo => repo.GetAllVehiclesAsync()).ReturnsAsync(new List<Vehicle> { });

        //    var dto = new DatesDto
        //    {
        //        StartDate = new DateTime(2020, 1, 1),
        //        EndDate = new DateTime(2020, 1, 2)
        //    };

        //    var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);
        //    var result = await controller.GetAvaliableCars(dto);

        //    var viewResult = Assert.IsType<OkObjectResult>(result);
        //}

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
        public async void DeleteReservation_WhenWrongData_ShouldReturnOk()
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
        public async void ReserveCar_WhenWrongData_ShouldReturnNotFound()
        {
            var mockVehicleRepo = new Mock<IVehicleRepository>();
            var mockReservationRepo = new Mock<IReservationRepository>();
            var controller = new ReservationsController(mockReservationRepo.Object, mockVehicleRepo.Object);

            var result = await controller.ReserveCar(new ReservationDto());

            var viewResult = Assert.IsType<NotFoundObjectResult>(result);
        }
    }
}
