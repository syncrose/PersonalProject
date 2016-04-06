using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using PersonalProjectVersion1.Models;
using Microsoft.Data.Entity;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

//namespace PersonalProjectVersion1.API
//{
    //[Route("api/discussions")]
    //public class DiscussionTopicsController : Controller
    //{
    //    ApplicationDbContext _db;

    //    public DiscussionTopicsController(ApplicationDbContext db)
    //    {
    //        this._db = db;
    //    }

    //    // GET: api/values
    //    [HttpGet]
    //    public IEnumerable<Discussion> Get()
    //    {
    //        var disctopics = _db.Discussions.ToList();
    //        return disctopics;
        //}

        // GET api/values/5
//        [HttpGet("{id}")]
//        public Discussion Get(int id)
//        {
//            var discussion = _db.Discussions.Where(d => d.Id == id).Include(d => d.LinkedPosts).FirstOrDefault();
//            return discussion;
//        }

//        // POST api/values
//        [HttpPost]
//        public IActionResult Post([FromBody]Discussion value)
//        {
//            _db.Discussions.Add(value);
//            _db.SaveChanges();
//            return Ok();
//        }

//        // PUT api/values/5
//        [HttpPut("{id}")]
//        public void Put(int id, [FromBody]string value)
//        {
//        }

//        // DELETE api/values/5
//        [HttpDelete("{id}")]
//        public void Delete(int id)
//        {
//        }
//    }
//}
