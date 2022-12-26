using CarRental.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data.Interfaces
{
    public interface IVehicleModelRepostiory
    {
        Task<VehicleModel> InsertVehicleModelAsync(VehicleModel model);
        Task<List<VehicleModel>> GetAllVehicleModelsAsync();
        Task<VehicleModel> GetVehicleModelByIdAsync(int id);
        Task<bool> DeleteVehicleModelAsync(int id);
        Task SaveAsync();
    }
}
