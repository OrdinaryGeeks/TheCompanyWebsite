namespace TheCompanyWebsite.Models
{
    public class Blurb
    {

        public int Id { get; set; }
        public string? MediaPosition { get; set; }
        
        public string? MediaType { get; set; }

        public string? Text { get; set; }

        public string? Title { get; set; }

        public DateTime PostedDate { get; set; }
    }
}
