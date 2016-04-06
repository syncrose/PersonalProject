namespace MyApp.Controllers {
    

    export class CreateDiscussionController {
        public discToCreate;

        constructor(private discussionService: MyApp.Services.DiscussionService,
            private $state: ng.ui.IStateService) {
        }

        saveNewDisc() {
            this.discussionService.saveDiscussion(this.discToCreate).then(() => {
                this.$state.go('discussion');
            });
        }

    }

}