using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CarRental.Data
{
    public class Vehicle
    {
        public int Id { get; set; }
        public string? Brand { get; set; }
        public string? Model { get; set; }

        [DataType(DataType.Date)]
        public DateTime ProductionDate { get; set; }
        public VehicleStates State { get; set; }
    }
}
