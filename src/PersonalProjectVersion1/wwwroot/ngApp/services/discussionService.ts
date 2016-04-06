namespace MyApp.Services {

    export class DiscussionService {
        public discussionResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.discussionResource = this.$resource("/api/discussions/:id");
        }

        getDiscussions() {
            return this.discussionResource.query();
        }


    }

    angular.module("MyApp").service("discussionService", DiscussionService);
}