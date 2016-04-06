using System.Collections.Generic;
using PersonalProjectVersion1.Models;

namespace PersonalProjectVersion1.Services
{
    public interface IDiscussionService
    {
        Discussion GetDiscussion(int Id);
        List<Discussion> GetDiscussions();
    }
}