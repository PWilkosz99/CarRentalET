using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data
{
    public class UserRepository : IUserRepository
    {
        private readonly CarRentalContext _context;
        public UserRepository(CarRentalContext context)
        {
            _context = context;
        }

        public User Create(User user)
        {
            _context.Users.Add(user);
            user.Id = _context.SaveChanges();

            return user;
        }
    }
}
