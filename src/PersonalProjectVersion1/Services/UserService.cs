﻿using PersonalProjectVersion1.Models;
using PersonalProjectVersion1.Repository;
using PersonalProjectVersion1.ViewModels;
using PersonalProjectVersion1.ViewModels.Account;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Data.Entity;

namespace PersonalProjectVersion1.Services
{
    public class UserService : IUserService
    {
        IGenericRepository _repo;
        public UserService(IGenericRepository repo)
        {
            this._repo = repo;
        }

        public List<ApplicationUser> getUsers()
        {
            var users = _repo.Query<ApplicationUser>().Include(u => u.UserPosts).Include(u => u.UserMessages).ToList();
       
            return users;
            
        }

        public UserVM getUser(string id)
        {
            var user = _repo.Query<ApplicationUser>().Include(u => u.UserMessages).Include(u => u.UserPosts).Where(u => u.Id == id).FirstOrDefault();
            var vm = new UserVM
            {
                Id = user.Id,
                Email = user.Email,
                UserMessages = user.UserMessages,
                UserPosts = user.UserPosts,
                First = user.First,
                Last = user.Last,
                UserName = user.UserName,
                Image = user.Image
            };
            return vm;
        }

        public List<Post> getUserPosts(string userName, int page)
        {
            var posts = _repo.Query<Post>().Where(u => u.PostUserName == userName).Skip(10 * (page - 1)).Take(10).ToList();
            return posts;
        }

        public List<Message> getUserMessages(string userName, int page)
        {
            var messages = _repo.Query<Message>().Where(u => u.MsgUserName == userName).Skip(10 * (page - 1)).Take(10).ToList();
            return messages;
        }

        public void UpdateUser(UserVM user)
        {
            var originUser = _repo.Query<ApplicationUser>().Where(u => u.Id == user.Id).FirstOrDefault();
            originUser.First = user.First;
            originUser.Last = user.Last;
            originUser.Email = user.Email;
            originUser.Image = user.Image;
            originUser.UserName = user.UserName;
            _repo.SaveChanges();
        }

        public List<Post> getUserPostsCount(string userName)
        {
            var posts = _repo.Query<Post>().Where(u => u.PostUserName == userName).ToList();
            return posts;
        }

        public List<Message> getUserMessagesCount(string userName)
        {
            var messages = _repo.Query<Message>().Where(u => u.MsgUserName == userName).ToList();
            return messages;
        }

    }
}
