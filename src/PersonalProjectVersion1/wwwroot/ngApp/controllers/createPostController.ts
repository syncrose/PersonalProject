namespace MyApp.Controllers {

    export class CreatePostController {
        public postToCreate;
        public discussionId;
        public userId;
        public post;
        public discIdUserId;

        constructor(private postsService: MyApp.Services.PostsService,
            private accountService: MyApp.Services.AccountService,
            private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService
        ) {
            debugger;
            this.discussionId = this.$stateParams['id'];
            this.userId = accountService.getUserId();
            this.discIdUserId = this.discussionId + " " + this.userId;
        }

        savePost() {
            debugger;

            this.postsService.savePost(this.discIdUserId, this.postToCreate).then(() => {

                this.$state.go('discussion');

               
            });
        }
    }

    export class EditPostController {
        public postToEdit;
        public discussionId;
        public userId;

        constructor(private postsService: MyApp.Services.PostsService,
            private accountService: MyApp.Services.AccountService,
            private $state: ng.ui.IStateService, private $stateParams: ng.ui.IStateParamsService
        ) {
            this.discussionId = this.$stateParams['id'];
            this.postToEdit = this.postsService.getPost(this.$stateParams['id']);
            this.userId = this.accountService.getUserName();
        }

        //editPost() {

        //    this.postsService.savePost(this.discussionId, this.userId, this.postToEdit).then((data) => {
        //        console.log(this.discussionId);
        //        this.$state.go('discussions', { id: 8004 });
        //    });
        //}

    }

}