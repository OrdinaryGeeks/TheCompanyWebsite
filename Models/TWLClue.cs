namespace TheCompanyWebsite.Models
{
    public class TWLClue
    {

        public int Id { get; set; }
        public string Answer { get; set; } = string.Empty;
        public string Clue { get; set; } = string.Empty;
        public string Direction { get; set; } = string.Empty;
        public int Index { get; set; }
        public int X { get; set; }
        public int Y { get; set; }

        public int TWLCrosswordId { get; set; }
    }
}
