namespace TheCompanyWebsite.Models
{
    public class TWLCrossword
    {

        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;

        public virtual ICollection<TWLClue> Clues { get; set; } = new List<TWLClue>();


    }
}
