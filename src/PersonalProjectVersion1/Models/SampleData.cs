using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Security.Claims;
using Microsoft.Data.Entity;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.AspNet.Identity;

namespace PersonalProjectVersion1.Models
{
    public class SampleData
    {
        public async static void Initialize(IServiceProvider sp)
        {
            var db = sp.GetService<ApplicationDbContext>();

            if (!db.Posts.Any())
            {
                var Discussions = new Discussion[]
                {
                    new Discussion {InterestName = "Hiking", Description = "This is the hiking forum, all welcome!", Headline = "Hiking buddies apply here!", ImageHeader = "http://www.godansville.com/picts/contact.jpg", LinkedPosts = new List<Post>
                    {
                        new Post {
                            Title = "Fave Hiking Spots!",
                            Content = "Here is a list of 10 of my fave hiking spots",
                            IsViewable = true, TimeCreated = new DateTime(2016, 3, 12),
                            LinkedMessages = new List<Message> {
                        new Message { Content = "I love that hiking spot!", IsViewable = true, TimeCreated = new DateTime(2011, 3, 12) },
                        new Message { Content = "Did you see the resident bear up there?!", IsViewable = true, TimeCreated = new DateTime(2016, 3, 13)},
                        new Message { Content = "I did! It was so cool! He was scratching his back!", IsViewable = true, TimeCreated = new DateTime(2016, 3, 13) }





                    } },

                        new Post {Title = "Best Hiking Gear?", Content = "Can you all give me some tips on good hiking gear?", IsViewable = true, TimeCreated = new DateTime (2016, 3, 20), LinkedMessages = new List<Message> {
                          new Message {Content = "Get some good mountaineers boots!", IsViewable = true, TimeCreated = new DateTime(1989, 3, 20) },
                          new Message {Content = "A good north face backback!", IsViewable = true, TimeCreated = new DateTime(2013, 3, 21) },
                          new Message {Content = "A nice manly beard!", IsViewable = true, TimeCreated = new DateTime(1933, 3, 21) }
                        } },


                         new Post {Title = "Biggest mistakes when hiking.", Content = "Here are some common mistakes made when hiking............................................fnsdfsdfjsdjf;sldjfjfl;ksdfjdslkfjsd;lfjsdlf", IsViewable = true, TimeCreated = new DateTime(2016, 3, 29), LinkedMessages = new List<Message>
                         {
                             new Message {Content = "I have made blahblah mistake all the time!", IsViewable = true, TimeCreated = new DateTime(1943, 3, 29) },
                             new Message {Content = "Oh dang sfjsdjfsdlfjsd sounds so scary!", IsViewable =true, TimeCreated = new DateTime(2015, 3, 30) },
                             new Message {Content = "I never make mistakes!", IsViewable = true, TimeCreated = new DateTime(2003, 3, 31) }
                         }

                } }
            },
                     new Discussion {InterestName = "Team Sports", Description = "Dudes and Dudettes welcome!", Headline = "Create teams, meet new people, have fun!", ImageHeader = "https://www.imgacademy.com/sites/default/files/About_OurPartners_GatoradeHeader2_0.jpg", LinkedPosts = new List<Post>
                    {
                        new Post { Title = "Best team sport?",  Content = "What do you all believe is the best team sport?", IsViewable = true, TimeCreated = new DateTime(1900, 2, 11), LinkedMessages = new List<Message> {
                        new Message { Content = "FOOTBALL AND ALL VARATIONS! MERICA!", IsViewable = true, TimeCreated = new DateTime(2004, 2, 12) },
                        new Message { Content = "I like soccer because it is active, fun, and easy to have a pickup game.", IsViewable = true, TimeCreated = new DateTime(1939, 2, 13)},
                        new Message { Content = "I like softball because beer.", IsViewable = true, TimeCreated = new DateTime(2016, 2, 13) }





                    } },

                        new Post {Title = "Best Hiking Gear?", Content = "Can you all give me some tips on good hiking gear?", IsViewable = true, TimeCreated = new DateTime (2016, 3, 20), LinkedMessages = new List<Message> {
                          new Message {Content = "Get some good mountaineers boots!", IsViewable = true, TimeCreated = new DateTime(2015, 3, 20) },
                          new Message {Content = "A good north face backback!", IsViewable = true, TimeCreated = new DateTime(1940, 3, 21) },
                          new Message {Content = "A nice manly beard!", IsViewable = true, TimeCreated = new DateTime(1900, 3, 21) }
                        } },


                         new Post {Title = "Biggest mistakes when hiking.", Content = "Here are some common mistakes made when hiking............................................fnsdfsdfjsdjf;sldjfjfl;ksdfjdslkfjsd;lfjsdlf", IsViewable = true, TimeCreated = new DateTime(2016, 3, 29), LinkedMessages = new List<Message>
                         {
                             new Message {Content = "I have made blahblah mistake all the time!", IsViewable = true, TimeCreated = new DateTime(1930, 3, 29) },
                             new Message {Content = "Oh dang sfjsdjfsdlfjsd sounds so scary!", IsViewable =true, TimeCreated = new DateTime(1940, 3, 30) },
                             new Message {Content = "I never make mistakes!", IsViewable = true, TimeCreated = new DateTime(2001, 3, 31) }
                         }

                } }
            },


                    new Discussion {InterestName = "Star Gazing", Description = "Where you can wonder with others.", Headline ="Where you can wonder with others!", ImageHeader = "https://upload.wikimedia.org/wikipedia/commons/0/0a/Milkyway_pan1.jpg", LinkedPosts = new List<Post>
                    {
                        new Post { Title = "Favorite Telescope",  Content = "Post your current rig, dream rig, or anything related!", IsViewable = true, TimeCreated = new DateTime(2014, 2, 12), LinkedMessages = new List<Message> {
                        new Message { Content = "I have an 8inch! I love it.", IsViewable = true, TimeCreated = new DateTime(1911, 2, 12) },
                        new Message { Content = "I want the orion master rig!", IsViewable = true, TimeCreated = new DateTime(1943, 3, 13)},
                        new Message { Content = "I just like layin on the grass and staring up.", IsViewable = true, TimeCreated = new DateTime(2016, 2, 15) }





                    } },

                        new Post {Title = "Favorite Constallation", Content = "Share your favorite, and tell us a bit why!", IsViewable = true, TimeCreated = new DateTime (2013, 3, 01), LinkedMessages = new List<Message> {
                          new Message {Content = "Orion because its easy to spot.", IsViewable = true, TimeCreated = new DateTime(1989, 3, 02) },
                          new Message {Content = "Perseides because it is related to the meteor shower.", IsViewable = true, TimeCreated = new DateTime(1920, 3, 02) },
                          new Message {Content = "The little dipper because its tricky to find", IsViewable = true, TimeCreated = new DateTime(1967, 3, 04) }
                        } },


                         new Post {Title = "Best places in the USA to view stars. ", Content = "What are some of the top US viewing spots.", IsViewable = true, TimeCreated = new DateTime(1987, 3, 29), LinkedMessages = new List<Message>
                         {
                             new Message {Content = "Hawaii dude", IsViewable = true, TimeCreated = new DateTime(2014, 3, 29) },
                             new Message {Content = "The pacific northwest on some lone mountain!", IsViewable =true, TimeCreated = new DateTime(1932, 3, 30) },
                             new Message {Content = "The dessert because you are alone with no lights.", IsViewable = true, TimeCreated = new DateTime(1965, 3, 31) }
                         }




                } },





            }










    };

                db.Discussions.AddRange(Discussions);
                db.SaveChanges();
            }

            var context = sp.GetService<ApplicationDbContext>();
            var userManager = sp.GetService<UserManager<ApplicationUser>>();
            context.Database.Migrate();

            var syncrose = await userManager.FindByEmailAsync("syncrose@gmail.com");
            if(syncrose == null)
            {
                syncrose = new ApplicationUser
                {
                    First = "Cory",
                    Last = "Couty",
                    Image = "http://www.funny-animalpictures.com/media/content/items/images/funnymonkeys0123_O.jpg",
                    UserName = "syncrose@gmail.com",
                    Email = "syncrose@gmail.com"
                };
                await userManager.CreateAsync(syncrose, "Secret123!");

                await userManager.AddClaimAsync(syncrose, new Claim("IsAdmin", "true"));
            }

            var jonDoe = await userManager.FindByNameAsync("syncrose1@yahoo.com");
            if(jonDoe == null)
            {
                jonDoe = new ApplicationUser
                {
                    First = "Chief",
                    Last = "Bananas",
                    Image = "http://funny-pics.co/wp-content/uploads/Funny-Monkey-Portrait-445x445.jpg",
                    UserName = "syncrose1@yahoo.com",
                    Email = "syncrose1@yahoo.com"
                };
                await userManager.CreateAsync(jonDoe, "Secret123!");
            }

        }
    }
}