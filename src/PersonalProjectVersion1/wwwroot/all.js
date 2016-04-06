var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
        // Define routes
        $stateProvider
            .state('home', {
            url: '/',
            templateUrl: 'ngApp/views/home.html',
            controller: MyApp.Controllers.HomeController,
            controllerAs: 'controller'
        })
            .state('about', {
            url: '/about',
            templateUrl: 'ngApp/views/about.html',
            controller: MyApp.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('discussion', {
            url: '/discussion',
            templateUrl: 'ngApp/views/discussionMainPage.html',
            controller: MyApp.Controllers.MainDiscussionPageController,
            controllerAs: 'controller'
        })
            .state('discussions', {
            url: '/discussion/:id',
            templateUrl: 'ngApp/views/discussionPage.html',
            controller: MyApp.Controllers.DiscussionController,
            controllerAs: 'controller'
        })
            .state('messages', {
            url: '/discussion/postTitle/:id',
            templateUrl: 'ngApp/views/about.html',
            controller: MyApp.Controllers.ViewMessagesController,
            controllerAs: 'controller'
        })
            .state('profile', {
            url: '/profile',
            abstract: true,
            templateUrl: 'ngApp/views/profilePage.html',
            controller: MyApp.Controllers.ProfileController,
            controllerAs: 'controller'
        })
            .state('profile.details', {
            views: {
                'innerProfile': {
                    templateUrl: '/ngApp/views/InnerProfileContent.html',
                    controller: MyApp.Controllers.InnerProfileController,
                    controllerAs: 'controller'
                },
                'events': {
                    templateUrl: '/ngApp/views/eventsPage.html',
                    controller: MyApp.Controllers.EventsViewController,
                    controllerAs: 'controller'
                }
            },
            url: ''
        })
            .state('notFound', {
            url: '/notFound',
            templateUrl: 'ngApp/views/notFound.html'
        });
        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
/// <reference path="ngapp/app.ts" />
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var AboutController = (function () {
            function AboutController() {
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DiscussionController = (function () {
            function DiscussionController() {
            }
            return DiscussionController;
        }());
        Controllers.DiscussionController = DiscussionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
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
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var InnerProfileController = (function () {
            function InnerProfileController() {
            }
            return InnerProfileController;
        }());
        Controllers.InnerProfileController = InnerProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var MainDiscussionPageController = (function () {
            function MainDiscussionPageController(discussionService) {
                this.discussionService = discussionService;
                this.interests = this.discussionService.getDiscussions();
            }
            return MainDiscussionPageController;
        }());
        Controllers.MainDiscussionPageController = MainDiscussionPageController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
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
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var PostMessagesController = (function () {
            function PostMessagesController() {
            }
            return PostMessagesController;
        }());
        Controllers.PostMessagesController = PostMessagesController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController() {
            }
            return ProfileController;
        }());
        Controllers.ProfileController = ProfileController;
        var EventsViewController = (function () {
            function EventsViewController() {
            }
            return EventsViewController;
        }());
        Controllers.EventsViewController = EventsViewController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ViewMessagesController = (function () {
            function ViewMessagesController() {
            }
            return ViewMessagesController;
        }());
        Controllers.ViewMessagesController = ViewMessagesController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var DiscussionService = (function () {
            function DiscussionService($resource) {
                this.$resource = $resource;
                this.discussionResource = this.$resource("/api/discussions/:id");
            }
            DiscussionService.prototype.getDiscussions = function () {
                return this.discussionResource.query();
            };
            return DiscussionService;
        }());
        Services.DiscussionService = DiscussionService;
        angular.module("MyApp").service("discussionService", DiscussionService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var HikingPostsService = (function () {
            function HikingPostsService() {
            }
            return HikingPostsService;
        }());
        Services.HikingPostsService = HikingPostsService;
        angular.module("MyApp").service("hikingPostsService", HikingPostsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var PostsService = (function () {
            function PostsService($resource) {
                this.$resource = $resource;
                this.postsResource = $resource;
            }
            return PostsService;
        }());
        Services.PostsService = PostsService;
        angular.module("MyApp").service("postsService", PostsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var SportsService = (function () {
            function SportsService() {
            }
            return SportsService;
        }());
        Services.SportsService = SportsService;
        angular.module("MyApp").service("sportsService", SportsService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var StargazingService = (function () {
            function StargazingService() {
            }
            return StargazingService;
        }());
        Services.StargazingService = StargazingService;
        angular.module("MyApp").service("stargazingService", StargazingService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=all.js.map