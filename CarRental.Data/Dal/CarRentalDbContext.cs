using CarRental.Data.Models;
using Microsoft.EntityFrameworkCore;

namespace CarRental.Data.Dal
{
    public class CarRentalDbContext : DbContext
    {
        public CarRentalDbContext(DbContextOptions<CarRentalDbContext> options) : base(options)
        {

        }

        public DbSet<Vehicle> Vehicles { get; set; }
        public DbSet<VehicleModel> VehicleModels { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
    }
}
