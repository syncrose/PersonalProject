namespace MyApp.Controllers {

    export class CreatePostController {
        public postToCreate;
        public discussionId;

        constructor(private postsService: MyApp.Services.PostsService,
            private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService
        ) {
            this.discussionId = this.$stateParams['id'];
        }

        savePost() {
            this.postsService.savePost(this.discussionId, this.postToCreate).then(() => {
                this.$state.go('discussions', { id: this.discussionId });
              

               
            });
        }
    }

    export class DeleteMsgController {
        public msgToDelete;

        constructor(
            private messageService: MyApp.Services.MessageService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
        }

        DeleteMsgController() {
            this.messageService.deleteMsg(this.$stateParams['id']).then(() => {
                this.$state.go('messages');
            });
        }

        cancel() {
            this.$state.go('messages');
        }
    }

}