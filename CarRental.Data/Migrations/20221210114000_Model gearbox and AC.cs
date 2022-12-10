using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CarRental.Data.Migrations
{
    public partial class ModelgearboxandAC : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "AirConditioning",
                table: "VehicleModels",
                type: "boolean",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "Gearbox",
                table: "VehicleModels",
                type: "text",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AirConditioning",
                table: "VehicleModels");

            migrationBuilder.DropColumn(
                name: "Gearbox",
                table: "VehicleModels");
        }
    }
}
