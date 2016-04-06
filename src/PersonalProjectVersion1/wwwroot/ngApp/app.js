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
            .state('profile', {
            url: '/profile',
            abstract: true,
            templateUrl: 'ngApp/views/profilePage.html',
            controller: MyApp.Controllers.ProfileController,
            controllerAs: 'controller'
        })
            .state('profile.details', {
            views: {
                'discussion': {
                    templateUrl: '/ngApp/views/discussionPage.html',
                    controller: MyApp.Controllers.DiscussionController,
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
//# sourceMappingURL=app.js.map