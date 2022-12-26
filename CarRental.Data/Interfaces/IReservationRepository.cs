using CarRental.Data.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data.Interfaces
{
    public interface IReservationRepository
    {
        Task<Reservation> InsertReservationAsync(Reservation model);
        Task<List<Reservation>> GetAllReservationsAsync();
        Task<Reservation> GetReservationByIdAsync(int id);
        Task<IQueryable<Vehicle>> GetVehiclesReserverdBetweenAsync(DateTime start, DateTime end);
        Task<List<Reservation>> GetVehiclesReservedByUserAsync(string userid);
        Task<bool> DeleteReservationAsync(int id);
        Task SaveAsync();
    }
}
