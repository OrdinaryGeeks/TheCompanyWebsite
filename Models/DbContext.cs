using Microsoft.EntityFrameworkCore;
using TheCompanyWebsite.Models;

namespace OrdinaryGeeksLegends.Models
{
    public class DBContext :DbContext
    {
        public DBContext(DbContextOptions<DBContext> options) : base(options)
        { }

        public DbSet<OrdinaryGeeksLegends.Models.User> Users { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.Role> Role { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.UserRole> UserRole { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.Blurb> Blurb { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.Trainer> Trainer { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.Training> Training { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.TrainingVideo> TrainingVideo { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.TWLUser> TWLUser { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.TWLCrossword> TWLCrossword { get; set; } = default!;

        public DbSet<TheCompanyWebsite.Models.TWLClue> TWLClue { get; set; } = default!;
    }
}
