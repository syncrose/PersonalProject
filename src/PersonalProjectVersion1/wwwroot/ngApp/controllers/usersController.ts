namespace MyApp.Controllers {

    export class UsersController {
        public users;

        constructor(private userService: MyApp.Services.UserService) {
            this.users = this.userService.getUsers();
        }
    }

    export class UserController {
        public user;
        public msgs;
        public posts;
        public file;
        public image;
        public discId;
        public postId;
        public userId;
        public userName;
        public currentPostPage = 1;
        public currentMsgPage = 1;
        public totalPosts;
        public totalMsgs;
        public itemsPerPage = 10;
        public UserPostPage;
        public userMsgPage;


        constructor(
            private userService: MyApp.Services.UserService,
            private accountService: MyApp.Services.AccountService,
            private messageService: MyApp.Services.MessageService,
            private postsService: MyApp.Services.PostsService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModal: ng.ui.bootstrap.IModalService,
            private filepickerService: any,
            private $scope: ng.IScope
        ) {
            this.totalMsgs = 0;
            this.totalPosts = 0;

            this.getUser();
            this.getUserPosts();
            this.getUserMsgs();

        }

        getUserPosts() {
            debugger;
            this.userName = this.accountService.getUserName();

            this.userService.getTotalPosts(this.userName).then((posts) => {
                this.totalPosts = posts.length;
            });
            this.UserPostPage = this.userName + " " + this.currentPostPage;
            this.userService.getUserContent(this.UserPostPage).then((posts) => {
                this.posts = posts;
            });
        }

        getUserMsgs() {
            debugger;
            this.userName = this.accountService.getUserName();
            this.userService.getTotalMsgs(this.userName).then((msgs) => {
                this.totalMsgs = msgs.length;
            });
            this.userMsgPage = this.userName + " " + this.currentMsgPage;
            this.userService.getUserMsgs(this.userMsgPage).then((msgs) => {
                this.msgs = msgs;
            });
        }

        public getUser() {
            this.userId = this.$stateParams['id'];
            this.user = this.userService.getUser(this.userId);
            console.log(this.user);
        }

        public pickFile() {
            this.filepickerService.pick({
                mimetype: 'image/*',
            }, this.fileUploaded.bind(this));
        }

        private fileUploaded(file) {
            this.file = file;
            this.$scope.$apply();
            this.image = file.url;
        }

        //saveMsg() {
        //    this.postId = this.$stateParams['id'];
        //    this.msg.applicationUserId = this.user.id;
        //    this.messageService.saveMsg(this.postId, this.user.id, this.msg).then(() => {
        //        this.$state.reload();
        //    });
        //}

        //savePost() {
        //    debugger;
        //    this.discId = this.$stateParams['id'];
        //    this.post.applicationUserId = this.user.id;
        //    this.postsService.savePost(this.discId, this.user.id, this.post).then(() => {
        //        this.$state.reload();
        //    });
        //}

    }

    export class EditUserController {
        public userId;
        public user;

        constructor(
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private userService: MyApp.Services.UserService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private id
        ) {
            this.userId = this.id;
            this.user = this.userService.getUser(this.userId);
        }

        editUser() {
            this.userService.updateUser(this.user);
            this.$state.reload();
        }

    }

}