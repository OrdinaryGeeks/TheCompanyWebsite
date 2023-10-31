namespace TheCompanyWebsite.Models
{
    public class Training
    {
        public int Id { get; set; }
        public string? MediaPosition { get; set; }

        public string? MediaType { get; set; }

        public string? Text { get; set; }

        public DateTime PostedDate { get; set; }
        public string? Title { get; set; }

        public virtual ICollection<TrainingVideo>? TrainingVideos { get; set; }
        
        public virtual ICollection<TWLUser>? TWLUsers { get; set; }

        public int TrainerId { get; set; }
    }
}
