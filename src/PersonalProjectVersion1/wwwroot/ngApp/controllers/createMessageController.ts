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
}