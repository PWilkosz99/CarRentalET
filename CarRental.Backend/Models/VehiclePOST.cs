using CarRental.Data;
using System.ComponentModel.DataAnnotations;

namespace CarRentalET.Models
{
    public class VehiclePOST
    {
        public int Id { get; set; }
        public int? Model { get; set; }
        public int? Mileage { get; set; }
        [DataType(DataType.Date)]
        public DateTime? ProductionDate { get; set; }
        public VehicleStates? State { get; set; }
    }
}
