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

    export class DeleteDiscussionController {
        public discToDelete;

        constructor(
            private discussionService: MyApp.Services.DiscussionService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
        }

        deleteDisc() {
            
            this.discussionService.deleteDiscussion(this.$stateParams['id']).then(() => {
                this.$state.go('discussion');
            });
        }
        cancel() {
            this.$state.go("discussion");
        }
    }
}