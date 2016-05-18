using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using PersonalProjectVersion1.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonalProjectVersion1.API
{
    [Route("api/[controller]")]
    public class MeetupApiController : Controller
    {
        IMeetupApiService _repo;

        public MeetupApiController(IMeetupApiService repo)
        {
            this._repo = repo;
        }

        // GET: api/values
        //[HttpGet]
        //[Route("MeetupSearch")]
        //public IActionResult Get(int zipCode)
        //{
        //    return Ok(_repo.getListMeetups());
        //}

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_repo.getListMeetups(id));
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody]string value)
        {
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
