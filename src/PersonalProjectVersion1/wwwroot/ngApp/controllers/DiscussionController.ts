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

    export class EditDiscussionController {
        public discToEdit;

        constructor(
            private discussionService: MyApp.Services.DiscussionService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService
        ) {
            this.discToEdit = this.discussionService.getDiscussion(this.$stateParams['id']);
        }

        editDisc() {
            debugger;
            this.discussionService.saveDiscussion(this.discToEdit).then(() => {
                this.$state.go("discussion");
            });
        }
    }
}