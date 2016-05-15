namespace MyApp.Controllers {

    export class DiscussionController {
        public discussion;
        public post;

        constructor(
            private discussionService: MyApp.Services.DiscussionService,
            private $stateParams: ng.ui.IStateParamsService,
            private $uibModal: ng.ui.bootstrap.IModalService) {
            this.getDiscussion();
        }

        getDiscussion() {
            let discId = this.$stateParams['id'];
            this.discussion = this.discussionService.getDiscussion(discId);
        }

        public addPostModal(id) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/createPost.html',
                controller: MyApp.Controllers.CreatePostController,
                controllerAs: 'controller',
                resolve: {
                    id: () => id,

                },
                size: 'md'
            });

        }

        public deletePostModal(id) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/deletePost.html',
                controller: MyApp.Controllers.DeletePostController,
                controllerAs: 'controller',
                resolve: {
                    id: () => id,

                },
                size: 'md'
            });

        }

        public editPostModal(id) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/editPost.html',
                controller: MyApp.Controllers.EditPostController,
                controllerAs: 'controller',
                resolve: {
                    id: () => id,

                },
                size: 'md'
            });

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