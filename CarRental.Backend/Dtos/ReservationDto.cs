namespace CarRentalET.Dtos
{
    public class ReservationDto
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int VehicleId { get; set; }

        public string Firstname { get; set; }
        public string Lastname { get; set; }
        public int Phone { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string PostalCode { get; set; }
        public string DrivingLicense { get; set; }

        public string CardNumber { get; set; }
        public string CardDate { get; set; }
        public int CVV { get; set; }
        public string CardOwnerName { get; set; }

        public double Cost { get; set; }
    }
}
