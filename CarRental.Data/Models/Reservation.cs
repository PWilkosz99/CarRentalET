namespace CarRental.Data.Models
{
    public class Reservation
    {
        public int Id { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public double Cost { get; set; }
        public Client Client { get; set; }
        public Payment Payment { get; set; }
        public Vehicle Vehicle { get; set; }
    }
}
