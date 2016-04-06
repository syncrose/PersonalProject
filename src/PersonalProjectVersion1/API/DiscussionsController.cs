﻿using System;
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
    public class DiscussionsController : Controller
    {
        IDiscussionService _repo;

        public DiscussionsController(IDiscussionService repo)
        {
            this._repo = repo;
        }

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
            return Ok(_repo.GetDiscussions());
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            return Ok(_repo.GetDiscussion(id));
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Discussion discussion)
        {
            if(discussion.Id == 0)
            {
                _repo.AddDisc(discussion);
            } else
            {
                _repo.UpDisc(discussion);
            }
            return Ok(discussion);
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