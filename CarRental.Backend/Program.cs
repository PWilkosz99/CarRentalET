using CarRental.Data;
using CarRentalET.Helpers;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.EntityFrameworkCore;
using Microsoft.IdentityModel.Tokens;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

builder.Services.AddDbContext<CarRentalContext>(o => o.UseNpgsql(builder.Configuration.GetConnectionString("CarRentalDb")));

builder.Services.AddCors(options =>
    options.AddPolicy(
        "AllowAll",
        p => p.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader()));

builder.Services
    .AddAuthentication(JwtBearerDefaults.AuthenticationScheme)
    .AddJwtBearer(options =>
    {
        options.Authority = "https://securetoken.google.com/auth-carrental";
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidIssuer = "https://securetoken.google.com/auth-carrental",
            ValidateAudience = true,
            ValidAudience = "auth-carrental",
            ValidateLifetime = true
        };
    });

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();


//builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddScoped<JwtService>();

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

//app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.UseStaticFiles();
app.UseRouting();

app.UseAuthentication();
app.UseAuthorization();

app.MapControllers();

app.Run();
