using System;

namespace DowlatGlobal.Core.Entities
{
    public class PortalItem
    {
        public Guid Id { get; set; }
        
        // e.g. "quran", "bd_games", "share_market", "world_news"
        public string PortalKey { get; set; } = string.Empty; 
        
        // e.g. "📖 অনলাইন কুরআন পড়ুন"
        public string Category { get; set; } = string.Empty;
        
        // e.g. "Al-Quran.info"
        public string Name { get; set; } = string.Empty;
        
        // Details or address
        public string Description { get; set; } = string.Empty;
        
        // Link to the Website
        public string Url { get; set; } = string.Empty;
        
        // e.g. "#1a6b3a"
        public string ColorHex { get; set; } = string.Empty;
    }
}
