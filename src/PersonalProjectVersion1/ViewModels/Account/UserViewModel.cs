using PersonalProjectVersion1.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProjectVersion1.ViewModels.Account
{
    public class UserViewModel
    {
        public string UserId { get; set; }
        public string UserName { get; set; }
       

        public Dictionary<string, string> Claims { get; set; }
    }
}
