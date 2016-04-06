namespace MyApp.Controllers {

    export class DiscussionController {
        public discussion;
        public post;

        constructor(
            private discussionService: MyApp.Services.DiscussionService,
            private $stateParams: ng.ui.IStateParamsService) {
            this.getDiscussion();
        }

        getDiscussion() {
            let discId = this.$stateParams['id'];
            this.discussion = this.discussionService.getDiscussion(discId);
        }

    }
}