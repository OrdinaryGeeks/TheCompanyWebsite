namespace TheCompanyWebsite.Models
{
    public class Trainer
    {
        public int Id { get; set; }
        public int UserId { get; set; }

        public virtual ICollection<Training> Trainings { get; set; }
    }
}
