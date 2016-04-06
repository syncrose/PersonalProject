namespace MyApp {

    angular.module('MyApp', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
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
                url: '/discussion/post/:id',
                templateUrl: 'ngApp/views/forumPostMessageBoard.html',
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

}