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
    public class VehicleModelRepository : IVehicleModelRepostiory
    {
        private readonly CarRentalContext _ctx;

        public VehicleModelRepository(CarRentalContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<VehicleModel> InsertVehicleModelAsync(VehicleModel model)
        {
            _ctx.VehicleModels.Add(model);
            await _ctx.SaveChangesAsync();
            return model;
        }

        public async Task<VehicleModel> GetVehicleModelByIdAsync(int id)
        {
            return await _ctx.VehicleModels.FirstOrDefaultAsync(model => model.Id == id);
        }

        public async Task<List<VehicleModel>> GetAllVehicleModelsAsync()
        {
            return await _ctx.VehicleModels.ToListAsync();
        }

        public async Task<bool> DeleteVehicleModelAsync(int id)
        {
            var model = await _ctx.VehicleModels.FindAsync(id);
            if (model != null)
            {
                _ctx.Remove(model);
                await _ctx.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task SaveAsync()
        {
            await _ctx.SaveChangesAsync();
        }
    }
}
