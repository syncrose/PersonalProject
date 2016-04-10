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



  
   

    angular.module("MyApp").controller("SignInModalController", SignInModalController);
    angular.module("MyApp").controller("SignUpModalController", SignUpModalController);
  

}