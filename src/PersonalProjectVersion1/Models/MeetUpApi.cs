using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProjectVersion1.Models
{
    public class MeetUpApi
    {
        public class Venue
        {
            public int Id { get; set; }
            public string Country { get; set; }
            public string Localized_country_name { get; set; }
            public string City { get; set; }
            public string Address_1 { get; set; }
            public string Name { get; set; }
            public double Lon { get; set; }
            public double Lat { get; set; }
            public bool Repinned { get; set; }
        }

        public class Group
        {
            public int Id { get; set; }
            public string Join_mode { get; set; }
            public long Created { get; set; }
            public string Name { get; set; }
            public double Group_lon { get; set; }
            public string Urlname { get; set; }
            public double Group_lat { get; set; }
            public string Who { get; set; }
        }

        public class Result
        {
            public string Id { get; set; }
            public int Utc_offset { get; set; }
            public Venue Venue { get; set; }
            public int Headcount { get; set; }
            public string Visibility { get; set; }
            public int Waitlist_count { get; set; }
            public long Created { get; set; }
            public int Maybe_rsvp_count { get; set; }
            public string Description { get; set; }
            public string Event_url { get; set; }
            public int Yes_rsvp_count { get; set; }
            public string Name { get; set; }
            public long Time { get; set; }
            public long Updated { get; set; }
            public Group Group { get; set; }
            public string Status { get; set; }
        }

        public class Meta
        {
            public string Id { get; set; }
            public string Next { get; set; }
            public string Method { get; set; }
            public int Total_count { get; set; }
            public string Link { get; set; }
            public int Count { get; set; }
            public string Description { get; set; }
            public string Lon { get; set; }
            public string Title { get; set; }
            public string Url { get; set; }
            public string Signed_url { get; set; }
            public long Updated { get; set; }
            public string Lat { get; set; }
        }

        public class RootObject
        {
            public List<Result> Results { get; set; }
            public Meta Meta { get; set; }
        }

    }
}
