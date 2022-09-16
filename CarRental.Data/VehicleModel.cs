using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data
{
    public class VehicleModel
    {
        public int Id { get; set; }
        public string? Manufacturer { get; set; }
        public string? Type { get; set; }
        public int Seats { get; set; }
        public int HPs { get; set; }
        public int Axes { get; set; }
    }
}
