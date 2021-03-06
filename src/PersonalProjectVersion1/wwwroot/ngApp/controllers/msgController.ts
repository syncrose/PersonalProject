﻿namespace MyApp.Controllers {

    export class CreateMessageController {
        public msgToCreate;
        public postId;
        public userId;
        public postIdUserId;

        constructor(private messageService: MyApp.Services.MessageService,
            private accountService: MyApp.Services.AccountService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private id) {
            this.postId = this.$stateParams['id'];
            this.userId = accountService.getUserId();
            this.postIdUserId = this.postId + " " + this.userId;
        }

        public ok() {
            this.$uibModalInstance.close();
        }

        saveMsg() {
            this.messageService.saveMsg(this.postIdUserId, this.msgToCreate).then(() => {
                this.ok();
                this.$state.reload();
            });
        }
    }

    export class EditMsgController {
        public msgToEdit;
        public postId;

        constructor(private messageService: MyApp.Services.MessageService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private id        ) {
            this.postId = this.$stateParams['id'];
            this.msgToEdit = this.messageService.getMessage(this.$stateParams['id']);
        }

        public ok() {
            this.$uibModalInstance.close();
        }

        editMsg() {
            this.messageService.saveMsg(this.postId, this.msgToEdit).then(() => {
                this.ok();
                this.$state.reload();
            });
        }
    }


    export class DeleteMsgController {
        public msgToDelete;
        public postId;

        constructor(
            private messageService: MyApp.Services.MessageService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService,
            private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance,
            private id          ) {
            this.postId = this.$stateParams['id'];
        }

        public ok() {
            this.$uibModalInstance.close();
        }

        deleteMsg() {
            this.messageService.deleteMsg(this.$stateParams['id']).then(() => {
                this.ok();
                this.$state.reload();
            });

        }

        cancel() {
            this.$state.go("messages", { id: this.postId });
            }
        
    }
}