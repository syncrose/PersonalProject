var MyApp;
(function (MyApp) {
    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker', 'ngSanitize']).config(function ($stateProvider, $urlRouterProvider, $locationProvider, filepickerProvider) {
        filepickerProvider.setKey('Ay0qe4wR6efe0Ua2XZC5wz');
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
            .state('discDelete', {
            url: '/deleteDiscussion/:id',
            templateUrl: 'ngApp/views/deleteDiscussion.html',
            controller: MyApp.Controllers.DeleteDiscussionController,
            controllerAs: 'controller'
        })
            .state('newDiscussion', {
            url: '/createDiscussion',
            templateUrl: 'ngApp/views/createDiscussion.html',
            controller: MyApp.Controllers.CreateDiscussionController,
            controllerAs: 'controller'
        })
            .state('editDiscussion', {
            url: '/editDiscussion/:id',
            templateUrl: 'ngApp/views/editDiscussion.html',
            controller: MyApp.Controllers.EditDiscussionController,
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
            .state('editPost', {
            url: '/editPost/:id',
            templateUrl: 'ngApp/views/editPost.html',
            controller: MyApp.Controllers.EditPostController,
            controllerAs: 'controller'
        })
            .state('postDelete', {
            url: '/deletePost/:id',
            templateUrl: 'ngApp/views/deletePost.html',
            controller: MyApp.Controllers.DeletePostController,
            controllerAs: 'controller'
        })
            .state('messages', {
            url: '/discussion/post/:id',
            templateUrl: 'ngApp/views/forumPostMessageBoard.html',
            controller: MyApp.Controllers.PostController,
            controllerAs: 'controller'
        })
            .state('deleteMsg', {
            url: '/deleteMsg/:id',
            templateUrl: 'ngApp/views/deleteMsg.html',
            controller: MyApp.Controllers.DeleteMsgController,
            controllerAs: 'controller'
        })
            .state('newMsg', {
            url: '/createMsg/:id',
            templateUrl: 'ngApp/views/createMessage.html',
            controller: MyApp.Controllers.CreateMessageController,
            controllerAs: 'controller'
        })
            .state('editMsg', {
            url: '/editMsg/:id',
            templateUrl: 'ngApp/views/editMsg.html',
            controller: MyApp.Controllers.EditMsgController,
            controllerAs: 'controller'
        })
            .state('users', {
            url: '/users',
            templateUrl: 'ngApp/views/users.html',
            controller: MyApp.Controllers.UsersController,
            controllerAs: 'controller'
        })
            .state('profile', {
            url: '/profile/:id',
            abstract: true,
            templateUrl: 'ngApp/views/profilePage.html',
            controller: MyApp.Controllers.UserController,
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
                    templateUrl: '/ngApp/views/userPostsMsgs.html',
                    controller: MyApp.Controllers.UserController,
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
    angular.module('MyApp').factory('authInterceptor', function ($q, $window, $location) {
        return ({
            request: function (config) {
                config.headers = config.headers || {};
                config.headers['X-Requested-With'] = 'XMLHttpRequest';
                return config;
            },
            responseError: function (rejection) {
                if (rejection.status === 401 || rejection.status === 403) {
                    $location.path('/login');
                }
                return $q.reject(rejection);
            }
        });
    });
    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
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
        var AccountController = (function () {
            function AccountController(accountService, $location, $uibModal, $stateParams) {
                var _this = this;
                this.accountService = accountService;
                this.$location = $location;
                this.$uibModal = $uibModal;
                this.$stateParams = $stateParams;
                this.getExternalLogins().then(function (results) {
                    _this.externalLogins = results;
                });
            }
            AccountController.prototype.getUserId = function () {
                return this.accountService.getUserId();
            };
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
            AccountController.prototype.showSignInModal = function (x) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/modalViews/loginPage.html',
                    controller: MyApp.Controllers.LoginController,
                    controllerAs: 'controller',
                    resolve: {
                        x: function () { return x; },
                    },
                    size: 'lg'
                });
            };
            AccountController.prototype.showSignUpModal = function (x) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/modalViews/signUp.html',
                    controller: MyApp.Controllers.RegisterController,
                    controllerAs: 'controller',
                    resolve: {
                        x: function () { return x; },
                    },
                    size: 'lg'
                });
            };
            return AccountController;
        }());
        Controllers.AccountController = AccountController;
        angular.module('MyApp').controller('AccountController', AccountController);
        var LoginController = (function () {
            function LoginController(accountService, $state, $location, $uibModalInstance, x, $stateParams) {
                this.accountService = accountService;
                this.$state = $state;
                this.$location = $location;
                this.$uibModalInstance = $uibModalInstance;
                this.x = x;
                this.$stateParams = $stateParams;
            }
            LoginController.prototype.login = function () {
                var _this = this;
                this.accountService.login(this.loginUser).then(function () {
                    _this.$location.path('/');
                    _this.ok();
                }).catch(function (results) {
                    _this.validationMessages = results;
                });
            };
            LoginController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            return LoginController;
        }());
        Controllers.LoginController = LoginController;
        var RegisterController = (function () {
            function RegisterController(accountService, $location, $uibModalInstance, $state) {
                this.accountService = accountService;
                this.$location = $location;
                this.$uibModalInstance = $uibModalInstance;
                this.$state = $state;
            }
            RegisterController.prototype.register = function () {
                var _this = this;
                debugger;
                this.accountService.register(this.registerUser).then(function () {
                    _this.$location.path('/');
                    _this.ok();
                }).catch(function (results) {
                    _this.validationMessages = results;
                });
            };
            RegisterController.prototype.ok = function () {
                this.$uibModalInstance.close();
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
        var CreatePostController = (function () {
            function CreatePostController(postsService, accountService, $state, $stateParams, $uibModalInstance, id) {
                this.postsService = postsService;
                this.accountService = accountService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$uibModalInstance = $uibModalInstance;
                this.id = id;
                this.discussionId = this.$stateParams['id'];
                this.userId = accountService.getUserId();
                this.discIdUserId = this.discussionId + " " + this.userId;
            }
            CreatePostController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            CreatePostController.prototype.savePost = function () {
                var _this = this;
                this.postsService.savePost(this.discIdUserId, this.postToCreate).then(function () {
                    _this.ok();
                    _this.$state.reload();
                });
            };
            return CreatePostController;
        }());
        Controllers.CreatePostController = CreatePostController;
        var EditPostController = (function () {
            function EditPostController(postsService, accountService, $state, $stateParams) {
                this.postsService = postsService;
                this.accountService = accountService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.discussionId = this.$stateParams['id'];
                this.postToEdit = this.postsService.getPost(this.$stateParams['id']);
                this.userId = this.accountService.getUserName();
            }
            return EditPostController;
        }());
        Controllers.EditPostController = EditPostController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var DiscussionController = (function () {
            function DiscussionController(discussionService, $stateParams, $uibModal) {
                this.discussionService = discussionService;
                this.$stateParams = $stateParams;
                this.$uibModal = $uibModal;
                this.getDiscussion();
            }
            DiscussionController.prototype.getDiscussion = function () {
                var discId = this.$stateParams['id'];
                this.discussion = this.discussionService.getDiscussion(discId);
            };
            DiscussionController.prototype.addPostModal = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/createPost.html',
                    controller: MyApp.Controllers.CreatePostController,
                    controllerAs: 'controller',
                    resolve: {
                        id: function () { return id; },
                    },
                    size: 'md'
                });
            };
            DiscussionController.prototype.deletePostModal = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/deletePost.html',
                    controller: MyApp.Controllers.DeletePostController,
                    controllerAs: 'controller',
                    resolve: {
                        id: function () { return id; },
                    },
                    size: 'md'
                });
            };
            DiscussionController.prototype.editPostModal = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/editPost.html',
                    controller: MyApp.Controllers.EditPostController,
                    controllerAs: 'controller',
                    resolve: {
                        id: function () { return id; },
                    },
                    size: 'md'
                });
            };
            return DiscussionController;
        }());
        Controllers.DiscussionController = DiscussionController;
        var DeleteDiscussionController = (function () {
            function DeleteDiscussionController(discussionService, $stateParams, $state) {
                this.discussionService = discussionService;
                this.$stateParams = $stateParams;
                this.$state = $state;
            }
            DeleteDiscussionController.prototype.deleteDisc = function () {
                var _this = this;
                this.discussionService.deleteDiscussion(this.$stateParams['id']).then(function () {
                    _this.$state.go('discussion');
                });
            };
            DeleteDiscussionController.prototype.cancel = function () {
                this.$state.go("discussion");
            };
            return DeleteDiscussionController;
        }());
        Controllers.DeleteDiscussionController = DeleteDiscussionController;
        var EditDiscussionController = (function () {
            function EditDiscussionController(discussionService, $stateParams, $state) {
                this.discussionService = discussionService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.discToEdit = this.discussionService.getDiscussion(this.$stateParams['id']);
            }
            EditDiscussionController.prototype.editDisc = function () {
                var _this = this;
                debugger;
                this.discussionService.saveDiscussion(this.discToEdit).then(function () {
                    _this.$state.go("discussion");
                });
            };
            return EditDiscussionController;
        }());
        Controllers.EditDiscussionController = EditDiscussionController;
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
                    controller: MyApp.Controllers.LoginController,
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
                    controller: MyApp.Controllers.RegisterController,
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
        var CreateMessageController = (function () {
            function CreateMessageController(messageService, accountService, $state, $stateParams, $uibModalInstance, id) {
                this.messageService = messageService;
                this.accountService = accountService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$uibModalInstance = $uibModalInstance;
                this.id = id;
                this.postId = this.$stateParams['id'];
                this.userId = accountService.getUserId();
                this.postIdUserId = this.postId + " " + this.userId;
            }
            CreateMessageController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            CreateMessageController.prototype.saveMsg = function () {
                var _this = this;
                this.messageService.saveMsg(this.postIdUserId, this.msgToCreate).then(function () {
                    _this.ok();
                    _this.$state.reload();
                });
            };
            return CreateMessageController;
        }());
        Controllers.CreateMessageController = CreateMessageController;
        var EditMsgController = (function () {
            function EditMsgController(messageService, $state, $stateParams, $uibModalInstance, id) {
                this.messageService = messageService;
                this.$state = $state;
                this.$stateParams = $stateParams;
                this.$uibModalInstance = $uibModalInstance;
                this.id = id;
                this.postId = this.$stateParams['id'];
                this.msgToEdit = this.messageService.getMessage(this.$stateParams['id']);
            }
            EditMsgController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            EditMsgController.prototype.editMsg = function () {
                var _this = this;
                this.messageService.saveMsg(this.postId, this.msgToEdit).then(function () {
                    _this.ok();
                    _this.$state.reload();
                });
            };
            return EditMsgController;
        }());
        Controllers.EditMsgController = EditMsgController;
        var DeleteMsgController = (function () {
            function DeleteMsgController(messageService, $stateParams, $state, $uibModalInstance, id) {
                this.messageService = messageService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$uibModalInstance = $uibModalInstance;
                this.id = id;
                this.postId = this.$stateParams['id'];
            }
            DeleteMsgController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            DeleteMsgController.prototype.deleteMsg = function () {
                var _this = this;
                this.messageService.deleteMsg(this.$stateParams['id']).then(function () {
                    _this.ok();
                    _this.$state.reload();
                });
            };
            DeleteMsgController.prototype.cancel = function () {
                this.$state.go("messages", { id: this.postId });
            };
            return DeleteMsgController;
        }());
        Controllers.DeleteMsgController = DeleteMsgController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var PostController = (function () {
            function PostController(postsService, $stateParams, $state, $uibModal) {
                this.postsService = postsService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.getPost();
            }
            PostController.prototype.addMsgModal = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/createMessage.html',
                    controller: MyApp.Controllers.CreateMessageController,
                    controllerAs: 'controller',
                    resolve: {
                        id: function () { return id; },
                    },
                    size: 'md'
                });
            };
            PostController.prototype.deleteMsgModal = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/deleteMsg.html',
                    controller: MyApp.Controllers.DeleteMsgController,
                    controllerAs: 'controller',
                    resolve: {
                        id: function () { return id; },
                    },
                    size: 'md'
                });
            };
            PostController.prototype.editMsgModal = function (id) {
                this.$uibModal.open({
                    templateUrl: '/ngApp/views/editMsg.html',
                    controller: MyApp.Controllers.EditMsgController,
                    controllerAs: 'controller',
                    resolve: {
                        id: function () { return id; },
                    },
                    size: 'md'
                });
            };
            PostController.prototype.getPost = function () {
                var postId = this.$stateParams['id'];
                this.post = this.postsService.getPost(postId);
            };
            return PostController;
        }());
        Controllers.PostController = PostController;
        var DeletePostController = (function () {
            function DeletePostController(postsService, $stateParams, $state, $uibModalInstance, id) {
                this.postsService = postsService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$uibModalInstance = $uibModalInstance;
                this.id = id;
                this.discId = this.$stateParams['id'];
            }
            DeletePostController.prototype.ok = function () {
                this.$uibModalInstance.close();
            };
            DeletePostController.prototype.deletePost = function () {
                var _this = this;
                this.postsService.deletePost(this.$stateParams['id']).then(function () {
                    _this.ok();
                    _this.$state.reload();
                });
            };
            DeletePostController.prototype.cancel = function () {
                this.$state.go('discussions');
            };
            return DeletePostController;
        }());
        Controllers.DeletePostController = DeletePostController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var InnerProfileController = (function () {
            function InnerProfileController(meetupService) {
                this.meetupService = meetupService;
            }
            InnerProfileController.prototype.getMeetups = function () {
                debugger;
                this.meetups = this.meetupService.getMeetups(this.zip);
                console.log(this.meetups);
            };
            return InnerProfileController;
        }());
        Controllers.InnerProfileController = InnerProfileController;
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
        var UsersController = (function () {
            function UsersController(userService) {
                this.userService = userService;
                this.users = this.userService.getUsers();
            }
            return UsersController;
        }());
        Controllers.UsersController = UsersController;
        var UserController = (function () {
            function UserController(userService, accountService, messageService, postsService, $stateParams, $state, $uibModal, filepickerService, $scope) {
                this.userService = userService;
                this.accountService = accountService;
                this.messageService = messageService;
                this.postsService = postsService;
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.$uibModal = $uibModal;
                this.filepickerService = filepickerService;
                this.$scope = $scope;
                this.currentPostPage = 1;
                this.currentMsgPage = 1;
                this.itemsPerPage = 10;
                this.totalMsgs = 0;
                this.totalPosts = 0;
                this.getUser();
                this.getUserPosts();
                this.getUserMsgs();
            }
            UserController.prototype.getUserPosts = function () {
                var _this = this;
                debugger;
                this.userName = this.accountService.getUserName();
                this.userService.getTotalPosts(this.userName).then(function (posts) {
                    _this.totalPosts = posts.length;
                });
                this.UserPostPage = this.userName + " " + this.currentPostPage;
                this.userService.getUserContent(this.UserPostPage).then(function (posts) {
                    _this.posts = posts;
                });
            };
            UserController.prototype.getUserMsgs = function () {
                var _this = this;
                debugger;
                this.userName = this.accountService.getUserName();
                this.userService.getTotalMsgs(this.userName).then(function (msgs) {
                    _this.totalMsgs = msgs.length;
                });
                this.userMsgPage = this.userName + " " + this.currentMsgPage;
                this.userService.getUserMsgs(this.userMsgPage).then(function (msgs) {
                    _this.msgs = msgs;
                });
            };
            UserController.prototype.getUser = function () {
                this.userId = this.$stateParams['id'];
                this.user = this.userService.getUser(this.userId);
                console.log(this.user);
            };
            UserController.prototype.pickFile = function () {
                this.filepickerService.pick({
                    mimetype: 'image/*',
                }, this.fileUploaded.bind(this));
            };
            UserController.prototype.fileUploaded = function (file) {
                this.file = file;
                this.$scope.$apply();
                this.image = file.url;
            };
            return UserController;
        }());
        Controllers.UserController = UserController;
        var EditUserController = (function () {
            function EditUserController($stateParams, $state, userService, $uibModalInstance, id) {
                this.$stateParams = $stateParams;
                this.$state = $state;
                this.userService = userService;
                this.$uibModalInstance = $uibModalInstance;
                this.id = id;
                this.userId = this.id;
                this.user = this.userService.getUser(this.userId);
            }
            EditUserController.prototype.editUser = function () {
                this.userService.updateUser(this.user);
                this.$state.reload();
            };
            return EditUserController;
        }());
        Controllers.EditUserController = EditUserController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
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
                this.$window.sessionStorage.setItem('id', userInfo.userId);
            };
            AccountService.prototype.getUserName = function () {
                return this.$window.sessionStorage.getItem('userName');
            };
            AccountService.prototype.getUserId = function () {
                return this.$window.sessionStorage.getItem('id');
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
                debugger;
                return this.discussionResource.save(discToSave).$promise;
            };
            DiscussionService.prototype.deleteDiscussion = function (id) {
                return this.discussionResource.delete({ id: id }).$promise;
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
        var MeetupService = (function () {
            function MeetupService($resource) {
                this.$resource = $resource;
                this.meetupResource = this.$resource("/api/meetupApi/:id");
            }
            MeetupService.prototype.getMeetups = function (zip) {
                debugger;
                return this.meetupResource.get({
                    id: zip
                });
            };
            return MeetupService;
        }());
        Services.MeetupService = MeetupService;
        angular.module("MyApp").service('meetupService', MeetupService);
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
                debugger;
                return this.msgResource.save({ id: id }, msgToCreate).$promise;
            };
            MessageService.prototype.deleteMsg = function (id) {
                return this.msgResource.delete({ id: id }).$promise;
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
                debugger;
                return this.postsResource.save({ id: id }, postToSave).$promise;
            };
            PostsService.prototype.deletePost = function (id) {
                return this.postsResource.delete({ id: id }).$promise;
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
        var UserService = (function () {
            function UserService($resource) {
                this.$resource = $resource;
                this.userResource = this.$resource("/api/users/:id");
            }
            UserService.prototype.getUsers = function () {
                return this.userResource.query();
            };
            UserService.prototype.getUser = function (id) {
                return this.userResource.get({ id: id });
            };
            UserService.prototype.getUserContent = function (userPostPage) {
                debugger;
                var userContentResource = this.$resource('/api/users/userPosts');
                return userContentResource.query({ userPage: userPostPage }).$promise;
            };
            UserService.prototype.getUserMsgs = function (userMsgPage) {
                debugger;
                var userContentResource = this.$resource('/api/users/userMsgs');
                return userContentResource.query({ userPage: userMsgPage }).$promise;
            };
            UserService.prototype.getTotalMsgs = function (id) {
                debugger;
                var msgResource = this.$resource('/api/users/totalMsgs');
                return msgResource.query().$promise;
            };
            UserService.prototype.getTotalPosts = function (id) {
                debugger;
                var postResource = this.$resource('/api/users/totalPosts');
                return postResource.query().$promise;
            };
            UserService.prototype.updateUser = function (userToUpdate) {
                return this.userResource.save(userToUpdate);
            };
            return UserService;
        }());
        Services.UserService = UserService;
        angular.module("MyApp").service("userService", UserService);
    })(Services = MyApp.Services || (MyApp.Services = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=all.js.map