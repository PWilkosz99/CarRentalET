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
    public class ReservationRepository : IReservationRepository
    {
        private readonly CarRentalContext _ctx;

        public ReservationRepository(CarRentalContext ctx)
        {
            _ctx = ctx;
        }

        public async Task<Reservation> InsertReservationAsync(Reservation reservation)
        {
            _ctx.Reservations.Add(reservation);
            await _ctx.SaveChangesAsync();
            return reservation;
        }

        public async Task<List<Reservation>> GetAllReservationsAsync()
        {
            return await _ctx.Reservations.ToListAsync();
        }

        public async Task<Reservation> GetReservationByIdAsync(int id)
        {
            return await _ctx.Reservations.FirstOrDefaultAsync(res => res.Id == id);
        }
        
        public async Task<IQueryable<Vehicle>> GetVehiclesReserverdBetweenAsync(DateTime start, DateTime end)
        {
            return _ctx.Reservations.Where(x => ((start > x.StartDate && start < x.EndDate) ||
                (end > x.StartDate && end < x.EndDate) || (start < x.StartDate && end > x.EndDate))).Select(x => x.Vehicle);
        }

        public async Task<List<Reservation>> GetVehiclesReservedByUserAsync(string userid) {
            return _ctx.Reservations.Where(x => x.Client.FirebaseID == userid).Include(x => x.Vehicle.Model).ToList();
        }
            
        public async Task<bool> DeleteReservationAsync(int id)
        {
            var reservation = await _ctx.Reservations.FindAsync(id);
            if (reservation != null)
            {
                _ctx.Remove(reservation);
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
