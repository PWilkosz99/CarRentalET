using CarRental.Data;
using System.ComponentModel.DataAnnotations;

namespace CarRentalET.Models
{
    public class VehicleDto
    {
        public int? ModelId { get; set; }
        public int? Mileage { get; set; }
        //[DataType(DataType.Date)]
        public DateTime ProductionDate { get; set; }
        public int CostPerDay { get; set; }
        public string Color { get; set; }
        public string Notes { get; set; }
        public string State { get; set; }
        //public VehicleStates? State { get; set; }
    }
}