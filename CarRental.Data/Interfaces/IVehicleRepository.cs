using CarRental.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data.Interfaces
{
    public interface IVehicleRepository
    {
        Task<Vehicle> InsertVehicleAsync(Vehicle model);
        Task<List<Vehicle>> GetAllVehiclesAsync();
        Task<Vehicle> GetVehicleByIdAsync(int id);
        Task<bool> DeleteVehicleAsync(int id);
        Task SaveAsync();
        Task<List<Vehicle>> GetNotIncludedAsync(IQueryable<Vehicle> vehicles);
    }
}
