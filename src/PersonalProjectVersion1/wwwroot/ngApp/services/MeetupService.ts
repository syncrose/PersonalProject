namespace MyApp.Services {

    export class MeetupService {
        public meetupResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.meetupResource = this.$resource("/api/meetupApi/:id");
        }

        public getMeetups(zip) {
            debugger;
            return this.meetupResource.get({
                id: zip
            });
        }

    }

    angular.module("MyApp").service('meetupService', MeetupService);
}