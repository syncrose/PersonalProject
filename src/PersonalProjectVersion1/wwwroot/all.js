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
            templateUrl: 'ngApp/views/messageTemplate.html',
            controller: MyApp.Controllers.AboutController,
            controllerAs: 'controller'
        })
            .state('discussion', {
            url: '/discussion',
            templateUrl: 'ngApp/views/discussionMainPage.html',
            controller: MyApp.Controllers.MainDiscussionPageController,
            controllerAs: 'controller'
        })
            .state('newDiscussion', {
            url: '/createDiscussion',
            templateUrl: 'ngApp/views/createDiscussion.html',
            controller: MyApp.Controllers.CreateDiscussionController,
            controllerAs: 'controller'
        })
            .state('discussions', {
            url: '/discussion/:id',
            templateUrl: 'ngApp/views/discussionPage.html',
            controller: MyApp.Controllers.DiscussionController,
            controllerAs: 'controller'
        })
            .state('newPost', {
            url: '/createPost/:id',
            templateUrl: 'ngApp/views/createPost.html',
            controller: MyApp.Controllers.CreatePostController,
            controllerAs: 'controller'
        })
            .state('messages', {
            url: '/discussion/post/:id',
            templateUrl: 'ngApp/views/forumPostMessageBoard.html',
            controller: MyApp.Controllers.PostController,
            controllerAs: 'controller'
        })
            .state('newMsg', {
            url: '/createMsg/:id',
            templateUrl: 'ngApp/views/createMessage.html',
            controller: MyApp.Controllers.CreateMessageController,
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
        });
        //.state('notFound', {
        //    url: '/notFound',
        //    templateUrl: 'ngApp/views/notFound.html'
        //});
        // Handle request for non-existent route
        //$urlRouterProvider.otherwise('/notFound');
        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });
})(MyApp || (MyApp = {}));
/// <reference path="ngapp/app.ts" />
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var AccountService = (function () {
            function AccountService($q, $http, $window) {
                this.$q = $q;
                this.$http = $http;
                this.$window = $window;
                // in case we are redirected from a social provider
                // we need to check if we are authenticated.
                this.checkAuthentication();
            }
            // Store access token and claims in browser session storage
            AccountService.prototype.storeUserInfo = function (userInfo) {
                // store user name
                this.$window.sessionStorage.setItem('userName', userInfo.userName);
                // store claims
                this.$window.sessionStorage.setItem('claims', JSON.stringify(userInfo.claims));
            };
            AccountService.prototype.getUserName = function () {
                return this.$window.sessionStorage.getItem('userName');
            };
            AccountService.prototype.getClaim = function (type) {
                var allClaims = JSON.parse(this.$window.sessionStorage.getItem('claims'));
                return allClaims ? allClaims[type] : null;
            };
            AccountService.prototype.login = function (loginUser) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    _this.$http.post('/api/account/login', loginUser).then(function (result) {
                        _this.storeUserInfo(result.data);
                        resolve();
                    }).catch(function (result) {
                        var messages = _this.flattenValidation(result.data);
                        reject(messages);
                    });
                });
            };
            AccountService.prototype.register = function (userLogin) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    _this.$http.post('/api/account/register', userLogin)
                        .then(function (result) {
                        _this.storeUserInfo(result.data);
                        resolve(result);
                    })
                        .catch(function (result) {
                        var messages = _this.flattenValidation(result.data);
                        reject(messages);
                    });
                });
            };
            AccountService.prototype.logout = function () {
                // clear all of session storage (including claims)
                this.$window.sessionStorage.clear();
                // logout on the server
                return this.$http.post('/api/account/logout', null);
            };
            AccountService.prototype.isLoggedIn = function () {
                return this.$window.sessionStorage.getItem('userName');
            };
            // associate external login (e.g., Twitter) with local user account
            AccountService.prototype.registerExternal = function (email) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    _this.$http.post('/api/account/externalLoginConfirmation', { email: email })
                        .then(function (result) {
                        _this.storeUserInfo(result.data);
                        resolve(result);
                    })
                        .catch(function (result) {
                        // flatten error messages
                        var messages = _this.flattenValidation(result.data);
                        reject(messages);
                    });
                });
            };
            AccountService.prototype.getExternalLogins = function () {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    var url = "api/Account/getExternalLogins?returnUrl=%2FexternalLogin&generateState=true";
                    _this.$http.get(url).then(function (result) {
                        resolve(result.data);
                    }).catch(function (result) {
                        reject(result);
                    });
                });
            };
            // checks whether the current user is authenticated on the server and returns user info
            AccountService.prototype.checkAuthentication = function () {
                var _this = this;
                this.$http.get('/api/account/checkAuthentication')
                    .then(function (result) {
                    if (result.data) {
                        _this.storeUserInfo(result.data);
                    }
                });
            };
            AccountService.prototype.confirmEmail = function (userId, code) {
                var _this = this;
                return this.$q(function (resolve, reject) {
                    var data = {
                        userId: userId,
                        code: code
                    };
                    _this.$http.post('/api/account/confirmEmail', data).then(function (result) {
                        resolve(result.data);
                    }).catch(function (result) {
                        reject(result);
                    });
                });
            };
            // extract access token from response
            AccountService.prototype.parseOAuthResponse = function (token) {
                var results = {};
                token.split('&').forEach(function (item) {
                    var pair = item.split('=');
                    results[pair[0]] = pair[1];
                });
                return results;
            };
            AccountService.prototype.flattenValidation = function (modelState) {
                var messages = [];
                for (var prop in modelState) {
                    messages = messages.concat(modelState[prop]);
                }
                return messages;
            };
            return AccountService;
        }());
        Services.AccountService = AccountService;
        angular.module('MyApp').service('accountService', AccountService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
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
            DiscussionService.prototype.getDiscussion = function (id) {
                return this.discussionResource.get({ id: id });
            };
            DiscussionService.prototype.saveDiscussion = function (discToSave) {
                return this.discussionResource.save(discToSave).$promise;
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
        var MessageService = (function () {
            function MessageService($resource) {
                this.$resource = $resource;
                this.msgResource = this.$resource("/api/msgs/:id");
            }
            MessageService.prototype.getMessage = function (id) {
                return this.msgResource.get({ id: id });
            };
            MessageService.prototype.saveMsg = function (id, msgToCreate) {
                return this.msgResource.save({ id: id }, msgToCreate).$promise;
            };
            return MessageService;
        }());
        Services.MessageService = MessageService;
        angular.module("MyApp").service("messageService", MessageService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Services;
    (function (Services) {
        var PostsService = (function () {
            function PostsService($resource) {
                this.$resource = $resource;
                this.postsResource = this.$resource("/api/posts/:id");
            }
            PostsService.prototype.getPost = function (id) {
                return this.postsResource.get({ id: id });
            };
            PostsService.prototype.savePost = function (id, postToSave) {
                return this.postsResource.save({ id: id }, postToSave).$promise;
            };
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
        var AccountController = (function () {
            function AccountController(accountService, $location) {
                var _this = this;
                this.accountService = accountService;
                this.$location = $location;
                this.getExternalLogins().then(function (results) {
                    _this.externalLogins = results;
                });
            }
            AccountController.prototype.getUserName = function () {
                return this.accountService.getUserName();
            };
            AccountController.prototype.getClaim = function (type) {
                return this.accountService.getClaim(type);
            };
            AccountController.prototype.isLoggedIn = function () {
                return this.accountService.isLoggedIn();
            };
            AccountController.prototype.logout = function () {
                this.accountService.logout();
                this.$location.path('/');
            };
            AccountController.prototype.getExternalLogins = function () {
                return this.accountService.getExternalLogins();
            };
            return AccountController;
        }());
        Controllers.AccountController = AccountController;
        angular.module('MyApp').controller('AccountController', AccountController);
        var LoginController = (function () {
            function LoginController(accountService, $location) {
                this.accountService = accountService;
                this.$location = $location;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.accountService.login(this.loginUser).then(function () {
                    _this.$location.path('/');
                }).catch(function (results) {
                    _this.validationMessages = results;
                });
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController(accountService, $location) {
                this.accountService = accountService;
                this.$location = $location;
            }
            RegisterController.prototype.register = function () {
                var _this = this;
                this.accountService.register(this.registerUser).then(function () {
                    _this.$location.path('/');
                }).catch(function (results) {
                    _this.validationMessages = results;
                });
            };
            return RegisterController;
        }());
        Controllers.RegisterController = RegisterController;
        var ExternalRegisterController = (function () {
            function ExternalRegisterController(accountService, $location) {
                this.accountService = accountService;
                this.$location = $location;
            }
            ExternalRegisterController.prototype.register = function () {
                var _this = this;
                this.accountService.registerExternal(this.registerUser.email)
                    .then(function (result) {
                    _this.$location.path('/');
                }).catch(function (result) {
                    _this.validationMessages = result;
                });
            };
            return ExternalRegisterController;
        }());
        Controllers.ExternalRegisterController = ExternalRegisterController;
        var ConfirmEmailController = (function () {
            function ConfirmEmailController(accountService, $http, $stateParams, $location) {
                var _this = this;
                this.accountService = accountService;
                this.$http = $http;
                this.$stateParams = $stateParams;
                this.$location = $location;
                var userId = $stateParams['userId'];
                var code = $stateParams['code'];
                accountService.confirmEmail(userId, code)
                    .then(function (result) {
                    _this.$location.path('/');
                }).catch(function (result) {
                    _this.validationMessages = result;
                });
            }
            return ConfirmEmailController;
        }());
        Controllers.ConfirmEmailController = ConfirmEmailController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CreateDiscussionController = (function () {
            function CreateDiscussionController(discussionService, $state) {
                this.discussionService = discussionService;
                this.$state = $state;
            }
            CreateDiscussionController.prototype.saveNewDisc = function () {
                var _this = this;
                this.discussionService.saveDiscussion(this.discToCreate).then(function () {
                    _this.$state.go('discussion');
                });
            };
            return CreateDiscussionController;
        }());
        Controllers.CreateDiscussionController = CreateDiscussionController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CreateMessageController = (function () {
            function CreateMessageController(messageService, $state, $stateParams) {
                this.messageService = messageService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.postId = this.$stateParams['id'];
            }
            CreateMessageController.prototype.saveMsg = function () {
                var _this = this;
                this.messageService.saveMsg(this.postId, this.msgToCreate).then(function () {
                    _this.$state.go('messages', {
                        id: _this.postId
                    });
                });
            };
            return CreateMessageController;
        }());
        Controllers.CreateMessageController = CreateMessageController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var CreatePostController = (function () {
            function CreatePostController(postsService, $state, $stateParams) {
                this.postsService = postsService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.discussionId = this.$stateParams['id'];
            }
            CreatePostController.prototype.savePost = function () {
                var _this = this;
                this.postsService.savePost(this.discussionId, this.postToCreate).then(function () {
                    _this.$state.go('discussions', { id: _this.discussionId });
                });
            };
            return CreatePostController;
        }());
        Controllers.CreatePostController = CreatePostController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DiscussionController = (function () {
            function DiscussionController(discussionService, $stateParams) {
                this.discussionService = discussionService;
                this.$stateParams = $stateParams;
                this.getDiscussion();
            }
            DiscussionController.prototype.getDiscussion = function () {
                var discId = this.$stateParams['id'];
                this.discussion = this.discussionService.getDiscussion(discId);
            };
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
        var PostController = (function () {
            function PostController(postsService, $stateParams) {
                this.postsService = postsService;
                this.$stateParams = $stateParams;
                this.getPost();
            }
            PostController.prototype.getPost = function () {
                var postId = this.$stateParams['id'];
                this.post = this.postsService.getPost(postId);
            };
            return PostController;
        }());
        Controllers.PostController = PostController;
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
        var InnerProfileController = (function () {
            function InnerProfileController() {
            }
            return InnerProfileController;
        }());
        Controllers.InnerProfileController = InnerProfileController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=all.js.map