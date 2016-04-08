namespace MyApp.Controllers {

    export class SignInModalController {
        public test;

        public ok() {

              this.$uibModalInstance.close();

        }


        constructor(public $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private x, private $stateParams: ng.ui.IStateParamsService) {

            
        }
    }

    export class SignUpModalController {
        public ok() {

            this.$uibModalInstance.close();

        }


        constructor(public $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private x, private $stateParams: ng.ui.IStateParamsService) {


        }
    }

    export class MessageModalController {
        public test;

        public ok() {

            this.$uibModalInstance.close();

        }


        constructor(public $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private x, private $stateParams: ng.ui.IStateParamsService) {


        }
    }

    export class PostModalController {
        public postToCreate;

        public ok() {

            this.$uibModalInstance.close();

        }


        constructor(public $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private x, private $stateParams: ng.ui.IStateParamsService,
            private postsService: MyApp.Services.PostsService,
            private $state: ng.ui.IStateService) {
        }

        savePost() {
            this.postsService.savePost(this.postToCreate).then(() => {
                this.$state.go('/discussion/:id');
            });
        }
    }

    angular.module("MyApp").controller("SignInModalController", SignInModalController);
    angular.module("MyApp").controller("SignUpModalController", SignUpModalController);
    angular.module("MyApp").controller("postModalController", PostModalController);
    angular.module("MyApp").controller("messageModalController", MessageModalController);

}