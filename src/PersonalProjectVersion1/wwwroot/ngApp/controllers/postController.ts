namespace MyApp.Controllers {

    export class PostController {
        public post;

        constructor(
            private postsService: MyApp.Services.PostsService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.getPost();
        }

        getPost() {
            let postId = this.$stateParams['id'];
            this.post = this.postsService.getPost(postId);
        }

      
    }

    export class DeletePostController {
        public postToDelete;

        constructor(
            private postsService: MyApp.Services.PostsService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
        }

        deletePost() {
            this.postsService.deletePost(this.$stateParams['id']).then(() => {
                this.$state.go('discussions');
            });
        }

        cancel() {
            this.$state.go('discussions');
        }

    }

    }
