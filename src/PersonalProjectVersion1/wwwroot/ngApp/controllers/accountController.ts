﻿namespace MyApp.Controllers {

    export class AccountController {
        public externalLogins;

        public getUserId() {
            return this.accountService.getUserId();
        }

        public getUserName() {
            return this.accountService.getUserName();
        }

        public getClaim(type) {
            return this.accountService.getClaim(type);
        }

        public isLoggedIn() {
            return this.accountService.isLoggedIn();
        }

        public logout() {
            this.accountService.logout();
            this.$location.path('/');
        }

        public getExternalLogins() {
            return this.accountService.getExternalLogins();
        }


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

        constructor(private accountService: MyApp.Services.AccountService,
            private $location: ng.ILocationService,
            private $uibModal: ng.ui.bootstrap.IModalService,
            private $stateParams: ng.ui.IStateParamsService) {
            this.getExternalLogins().then((results) => {
                this.externalLogins = results;
            });
        }

     
    }

    angular.module('MyApp').controller('AccountController', AccountController);


    export class LoginController {
        public loginUser;
        public validationMessages;

        public login() {
            this.accountService.login(this.loginUser).then(() => {
                
                this.$location.path('/');
                this.ok();

                
            }).catch((results) => {
                this.validationMessages = results;
            });
        }

        public ok() {

            this.$uibModalInstance.close();

        }

        constructor(private accountService: MyApp.Services.AccountService, private $state: ng.ui.IStateService, private $location: ng.ILocationService, public $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private x, private $stateParams: ng.ui.IStateParamsService) { }
    }


    export class RegisterController {
        public registerUser;
        public validationMessages;

        public register() {
            debugger;
            this.accountService.register(this.registerUser).then(() => {
                this.$location.path('/');
                this.ok();
            }).catch((results) => {
                this.validationMessages = results;
            });
        }

        public ok() {
            this.$uibModalInstance.close();
        }

        constructor(private accountService: MyApp.Services.AccountService, private $location: ng.ILocationService, private $uibModalInstance: ng.ui.bootstrap.IModalServiceInstance, private $state: ng.ui.IStateService) { }
    }





    export class ExternalRegisterController {
        public registerUser;
        public validationMessages;

        public register() {
            this.accountService.registerExternal(this.registerUser.email)
                .then((result) => {
                    this.$location.path('/');
                }).catch((result) => {
                    this.validationMessages = result;
                });
        }

        constructor(private accountService: MyApp.Services.AccountService, private $location: ng.ILocationService) { }

    }

    export class ConfirmEmailController {
        public validationMessages;

        constructor(
            private accountService: MyApp.Services.AccountService,
            private $http: ng.IHttpService,
            private $stateParams: ng.ui.IStateParamsService,
            private $location: ng.ILocationService
        ) {
            let userId = $stateParams['userId'];
            let code = $stateParams['code'];
            accountService.confirmEmail(userId, code)
                .then((result) => {
                    this.$location.path('/');
                }).catch((result) => {
                    this.validationMessages = result;
                });
        }
    }
}