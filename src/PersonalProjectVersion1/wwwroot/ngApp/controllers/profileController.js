var MyApp;
(function (MyApp) {
    var Controllers;
    (function (Controllers) {
        var ProfileController = (function () {
            function ProfileController() {
                this.message = "Hello from profile controller";
            }
            return ProfileController;
        }());
        Controllers.ProfileController = ProfileController;
        var DiscussionController = (function () {
            function DiscussionController() {
            }
            return DiscussionController;
        }());
        Controllers.DiscussionController = DiscussionController;
        var EventsViewController = (function () {
            function EventsViewController() {
            }
            return EventsViewController;
        }());
        Controllers.EventsViewController = EventsViewController;
    })(Controllers = MyApp.Controllers || (MyApp.Controllers = {}));
})(MyApp || (MyApp = {}));
//# sourceMappingURL=profileController.js.map