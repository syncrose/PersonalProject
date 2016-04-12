using System.Collections.Generic;
using PersonalProjectVersion1.Models;

namespace PersonalProjectVersion1.Services
{
    public interface IDiscussionService
    {
 

        Discussion GetDiscussion(int Id);
        List<Discussion> GetDiscussions();
        void AddDisc(Discussion discussion);
        void DeleteDisc(int id);
        void UpDisc(Discussion discussion);
    }
}