using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PersonalProjectVersion1.Models
{
    public class Message
    {
        public int Id { get; set; }
        public string Content { get; set; }

        public DateTime TimeCreated { get; set; }
        public bool IsViewable { get; set; }
        
        //FUTURE PROPERTIES MAYBE
        // ----USER LINKED TO THIS MESSAGE
      
    }
}
