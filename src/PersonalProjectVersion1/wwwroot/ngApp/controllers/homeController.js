var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController() {
            }
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var TestModalController = (function () {
            function TestModalController($uibModal, $stateParams, $state) {
                this.$uibModal = $uibModal;
                this.$stateParams = $stateParams;
                this.$state = $state;
            }
            TestModalController.prototype.showSignInModal = function (x) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/modalViews/loginPage.html',
                    controller: 'SignInModalController',
                    controllerAs: 'controller',
                    resolve: {
                        x: function () { return x; },
                    },
                    size: 'lg'
                });
            };
            TestModalController.prototype.showSignUpModal = function (x) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/modalViews/signUp.html',
                    controller: 'SignUpModalController',
                    controllerAs: 'controller',
                    resolve: {
                        x: function () { return x; },
                    },
                    size: 'lg'
                });
            };
            TestModalController.prototype.cancel = function () {
                this.$state.go('/');
            };
            return TestModalController;
        }());
        Controllers.TestModalController = TestModalController;
        angular.module("MyApp").controller("TestModalController", TestModalController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=homeController.js.map