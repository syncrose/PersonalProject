namespace MyApp.Services {

    export class DiscussionService {
        public discussionResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.discussionResource = this.$resource("/api/discussions/:id");
        }

        getDiscussions() {
            return this.discussionResource.query();
        }

        getDiscussion(id) {
            return this.discussionResource.get({ id: id });
        }

        saveDiscussion(discToSave) {
            return this.discussionResource.save(discToSave).$promise;
        }


    }

    angular.module("MyApp").service("discussionService", DiscussionService);
}