using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;
using PersonalProjectVersion1.Services;
using PersonalProjectVersion1.ViewModels;
using PersonalProjectVersion1.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace PersonalProjectVersion1.API
{
    [Route("api/[controller]")]
    public class UsersController : Controller
    {
        IUserService _repo;
        public UsersController(IUserService repo)
        {
            this._repo = repo;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repo.getUsers());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(string id)
        {
            return Ok(_repo.getUser(id));
        }

        [HttpGet]
        [Route("userPosts")]
        public IActionResult getUserPosts(string userPage)
        {
            if (userPage != null)
            {
                var data = userPage.Split(' ');
                var userName = data[0];
                var page = int.Parse(data[1]);
                var userPosts = _repo.getUserPosts(userName, page);
                return Ok(userPosts);
            }
            else
            {
                 return HttpBadRequest();
            }
        }

        [HttpGet]
        [Route("userMsgs")]
        public IActionResult getUserMsgs(string userPage)
        {
            if(userPage != null) { 
            var data = userPage.Split(' ');
            var userName = data[0];
            var page = int.Parse(data[1]);
            var userMsgs = _repo.getUserMessages(userName, page);
            return Ok(userMsgs);
            }
            else
            {
                return HttpBadRequest();
            }
        }

        [HttpGet]
        [Route("totalPosts")]
        public IActionResult getAllPosts(string userName)
        {
            return Ok(_repo.getUserPostsCount(userName));
        }

        [HttpGet]
        [Route("totalMsgs")]
        public IActionResult getAllMsgs(string userName)
        {
            return Ok(_repo.getUserMessagesCount(userName));
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]UserVM user)
        {
            _repo.UpdateUser(user);
            return Ok();
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
