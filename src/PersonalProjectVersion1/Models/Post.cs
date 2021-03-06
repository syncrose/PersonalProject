﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProjectVersion1.Models
{
    public class Post
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Content { get; set; }
        //FOR ASSOCIATED THE MESSAGES ATTACHED TO THIS POST
        public ICollection<Message> LinkedMessages { get; set; }
        public DateTime TimeCreated { get; set; }
        public bool IsViewable { get; set; }
        public string UserId { get; set; }
        public string PostUserName { get; set; }
        public string PostFirst { get; set; }
        public string PostLast { get; set; }
        public string PostImage { get; set; }

    }
}
