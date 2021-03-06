﻿namespace MyApp.Controllers {

    export class PostController {
        public post;

        constructor(
            private postsService: MyApp.Services.PostsService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModal: ng.ui.bootstrap.IModalService) {
            this.getPost();
        }

        public addMsgModal(id) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/createMessage.html',
                controller: MyApp.Controllers.CreateMessageController,
                controllerAs: 'controller',
                resolve: {
                    id: () => id,

                },
                size: 'md'
            });

        }

        public deleteMsgModal(id) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/deleteMsg.html',
                controller: MyApp.Controllers.DeleteMsgController,
                controllerAs: 'controller',
                resolve: {
                    id: () => id,

                },
                size: 'md'
            });

        }

        public editMsgModal(id) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/editMsg.html',
                controller: MyApp.Controllers.EditMsgController,
                controllerAs: 'controller',
                resolve: {
                    id: () => id,

                },
                size: 'md'
            });

        }

        getPost() {
            let postId = this.$stateParams['id'];
            this.post = this.postsService.getPost(postId);
        }

      
    }

    export class DeletePostController {
        public postToDelete;
        public discId;

        

        constructor(
            private postsService: MyApp.Services.PostsService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private id        ) {
            this.discId = this.$stateParams['id'];
        }

        public ok() {
            this.$uibModalInstance.close();
        }

        deletePost() {
            this.postsService.deletePost(this.$stateParams['id']).then(() => {
                this.ok();
                this.$state.reload();
            });
        }

        cancel() {
            this.$state.go('discussions');
        }

    }

    }
