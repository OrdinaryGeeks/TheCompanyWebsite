using Microsoft.EntityFrameworkCore;
using OrdinaryGeeksLegends.Models;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<DBContext>(options => { options.UseSqlServer(builder.Configuration.GetConnectionString("OGLegends")); });
builder.Services.AddCors(options => options.AddPolicy(name: "Allow All Origins", policy =>
{
    policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();


}));

var app = builder.Build();


// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();
app.UseCors("Allow All Origins");

app.MapControllerRoute(
    name: "default",
    pattern: "{controller}/{action=Index}/{id?}");

app.MapFallbackToFile("index.html");

app.Run();
