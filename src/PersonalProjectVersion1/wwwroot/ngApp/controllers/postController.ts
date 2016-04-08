namespace MyApp.Controllers {

    export class PostController {
        public post;

        constructor(
            private postsService: MyApp.Services.PostsService,
            private $stateParams: ng.ui.IStateParamsService) {
            this.getPost();
        }

        getPost() {
            let postId = this.$stateParams['id'];
            this.post = this.postsService.getPost(postId);
        }
    }
    
}