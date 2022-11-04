namespace CarRentalET.Dtos
{
    public class ReservationDto
    {
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public int UserId { get; set; }
        public int VehicleId { get; set; }
    }
}
