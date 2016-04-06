namespace MyApp.Controllers {

    export class MainDiscussionPageController {
        public interests;

        constructor(private discussionService: MyApp.Services.DiscussionService) {
            this.interests = this.discussionService.getDiscussions();
        }
        
    }

}