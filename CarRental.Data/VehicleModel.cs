namespace CarRental.Data
{
    public class VehicleModel
    {
        public int Id { get; set; }
        public string? Manufacturer { get; set; }
        public string? Model { get; set; }
        public string? Type { get; set; }
        public string? Fuel { get; set; }
        public int? Seats { get; set; }
        public int? HPs { get; set; }
        public string? Axes { get; set; }
    }
}
