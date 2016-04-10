using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using PersonalProjectVersion1.Models;
using PersonalProjectVersion1.Services;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonalProjectVersion1.API
{
    [Route("api/[controller]")]
    public class PostsController : Controller
    {
        IPostService _repo;

        public PostsController(IPostService repo)
        {
            this._repo = repo;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repo.GetPosts());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_repo.getPost(id));
        }

        // POST api/values
        [HttpPost("{id}")]
        public IActionResult Post(int id, [FromBody]Post post)
        {
            if(post.Id == 0)
            {
                _repo.AddPost(id, post);
            }
            else
            {
                _repo.UpdatePost(post);
            }
            return Ok(post);
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
            //TESTING FOR SOURCE

            
        }
    }
}
