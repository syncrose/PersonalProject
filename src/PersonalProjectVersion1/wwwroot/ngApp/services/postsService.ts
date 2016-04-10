namespace MyApp.Services {

    export class PostsService {
        private postsResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.postsResource = this.$resource("/api/posts/:id");
        }

        getPost(id) {
            return this.postsResource.get({ id: id });
        }

        savePost(id, postToSave) {
            return this.postsResource.save({ id: id }, postToSave).$promise;
        }
    }

    angular.module("MyApp").service("postsService", PostsService);
}