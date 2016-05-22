namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap', 'angular-filepicker', 'ngSanitize']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider,
        filepickerProvider: any
    ) => {

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

    angular.module('MyApp').factory('authInterceptor', (
        $q: ng.IQService,
        $window: ng.IWindowService,
        $location: ng.ILocationService
    ) =>
        ({
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
        })
    );

    angular.module('MyApp').config(function ($httpProvider) {
        $httpProvider.interceptors.push('authInterceptor');
    });
}