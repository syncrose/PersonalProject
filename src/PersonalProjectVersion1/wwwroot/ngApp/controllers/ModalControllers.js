var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var SignInModalController = (function () {
            function SignInModalController($uibModalInstance, x, $stateParams) {
                this.$uibModalInstance = $uibModalInstance;
                this.x = x;
                this.$stateParams = $stateParams;
            }
            SignInModalController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return SignInModalController;
        }());
        Controllers.SignInModalController = SignInModalController;
        var SignUpModalController = (function () {
            function SignUpModalController($uibModalInstance, x, $stateParams) {
                this.$uibModalInstance = $uibModalInstance;
                this.x = x;
                this.$stateParams = $stateParams;
            }
            SignUpModalController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return SignUpModalController;
        }());
        Controllers.SignUpModalController = SignUpModalController;
        angular.module("MyApp").controller("SignInModalController", SignInModalController);
        angular.module("MyApp").controller("SignUpModalController", SignUpModalController);
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=ModalControllers.js.map