using CarRental.Data.Interfaces;
using CarRental.Data.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data.Dal.Repositories
{
    public class VehicleRepository : IVehicleRepository
    {
        private readonly CarRentalDbContext _ctx;

        public VehicleRepository(CarRentalDbContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<Vehicle> InsertVehicleAsync(Vehicle vehicle)
        {
            _ctx.Vehicles.Add(vehicle);
            await _ctx.SaveChangesAsync();
            return vehicle;
        }

        public async Task<List<Vehicle>> GetAllVehiclesAsync()
        {
            return await _ctx.Vehicles.Include(x => x.Model).ToListAsync(); //Eager loading
        }

        public async Task<Vehicle> GetVehicleByIdAsync(int id)
        {
            return await _ctx.Vehicles.FirstOrDefaultAsync(model => model.Id == id);
        }

        public async Task<bool> DeleteVehicleAsync(int id)
        {
            var vehicle = await _ctx.Vehicles.FindAsync(id);
            if (vehicle != null)
            {
                _ctx.Remove(vehicle);
                await _ctx.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<List<Vehicle>> GetNotIncludedAsync(IQueryable<Vehicle> vehicles)
        {
            return _ctx.Vehicles.Where(x => vehicles.Any(y => y.Id != x.Id)).Include(x => x.Model).ToList();
        }

        public async Task SaveAsync()
        {
            await _ctx.SaveChangesAsync();
        }
    }
}
