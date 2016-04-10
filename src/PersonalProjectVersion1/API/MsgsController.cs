using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using PersonalProjectVersion1.Services;
using PersonalProjectVersion1.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonalProjectVersion1.API
{
    [Route("api/[controller]")]
    public class MsgsController : Controller
    {
        IMsgService _repo;

        public MsgsController(IMsgService repo)
        {
            this._repo = repo;
        }
        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repo.GetMsgs());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_repo.GetMsg(id));
        }

        // POST api/values
        [HttpPost("{id}")]
        public IActionResult Post(int id, [FromBody]Message msg)
        {
            if(msg.Id == 0)
            {
                _repo.addMsg(id, msg);
            }else
            {
                _repo.UpdateMsg(msg);
            }
            return Ok(msg);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
