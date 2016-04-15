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

    export class EditPostController {
        public postToEdit;
        public discussionId;

        constructor(private postsService: MyApp.Services.PostsService,
            private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService
        ) {
            this.discussionId = this.$stateParams['id'];
            this.postToEdit = this.postsService.getPost(this.$stateParams['id']);
        }

        editPost() {
        
            this.postsService.savePost(this.discussionId, this.postToEdit).then((data) => {
                console.log(this.discussionId);
                this.$state.go('discussions', { id: 8004 });
            });
        }

    }

}