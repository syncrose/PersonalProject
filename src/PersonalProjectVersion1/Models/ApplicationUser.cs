using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Identity.EntityFramework;

namespace PersonalProjectVersion1.Models
{
    // Add profile data for application users by adding properties to the ApplicationUser class
    public class ApplicationUser : IdentityUser
    {
        public ICollection<Post> UserPosts { get; set; }
        public ICollection<Message> UserMessages { get; set; }
        public string First { get; set; }
        public string Last { get; set; }
        public string Image { get; set; }


    }
}
