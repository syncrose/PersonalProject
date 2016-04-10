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

}