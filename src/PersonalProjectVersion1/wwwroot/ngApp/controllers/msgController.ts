namespace MyApp.Controllers {

    export class CreateMessageController {
        public msgToCreate;
        public postId;

        constructor(private messageService: MyApp.Services.MessageService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService) {
            this.postId = this.$stateParams['id'];
        }

        saveMsg() {
            this.messageService.saveMsg(this.postId, this.msgToCreate).then(() => {
                this.$state.go('messages', {
                    id: this.postId
                });
            });
        }
    }

    export class EditMsgController {
        public msgToEdit;
        public postId;

        constructor(private messageService: MyApp.Services.MessageService,
            private $state: ng.ui.IStateService,
            private $stateParams: ng.ui.IStateParamsService) {
            this.postId = this.$stateParams['id'];
            this.msgToEdit = this.messageService.getMessage(this.$stateParams['id']);
        }

        editMsg() {
            this.messageService.saveMsg(this.postId, this.msgToEdit).then(() => {
                this.$state.go("messages", { id: this.postId });
            });
        }
    }


    export class DeleteMsgController {
        public msgToDelete;
        public postId;

        constructor(
            private messageService: MyApp.Services.MessageService,
            private $stateParams: ng.ui.IStateParamsService,
            private $state: ng.ui.IStateService) {
            this.postId = this.$stateParams['id'];
        }

        deleteMsg() {
            this.messageService.deleteMsg(this.$stateParams['id']).then(() => {
                debugger;
                this.$state.go('messages', { id: this.postId });
            });

        }

        cancel() {
            this.$state.go("messages", { id: this.postId });
            }
        
    }
}