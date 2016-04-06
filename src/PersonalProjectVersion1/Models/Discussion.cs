using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProjectVersion1.Models
{
    public class Discussion
    {
        public int Id { get; set; }

        public string InterestName { get; set; }
        public string Description { get; set; }
        //FOR THE POSTS ASSOCIATED WITH THIS INTEREST
        public ICollection<Post> LinkedPosts { get; set; }
        public string Headline { get; set; }
        public string ImageHeader { get; set; }





    }
}
