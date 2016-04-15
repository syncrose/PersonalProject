namespace MyApp.Controllers {

    export class HomeController {
     

        




    }


    export class TestModalController {


        public showSignInModal(x) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/modalViews/loginPage.html',
                controller: MyApp.Controllers.LoginController,
                controllerAs: 'controller',
                resolve: {
                    x: () => x,

                },
                size: 'lg'
            });

        }
        public showSignUpModal(x) {

            this.$uibModal.open({
                templateUrl: '/ngApp/views/modalViews/signUp.html',
                controller: MyApp.Controllers.RegisterController,
                controllerAs: 'controller',
                resolve: {
                    x: () => x,

                },
                size: 'lg'
            });

        }

      

        constructor(private $uibModal: ng.ui.bootstrap.IModalService, private $stateParams: ng.ui.IStateParamsService, private $state: ng.ui.IStateService) {
        }
        cancel() {

            this.$state.go('/');
        }



    }

    angular.module("MyApp").controller("TestModalController", TestModalController);




}
