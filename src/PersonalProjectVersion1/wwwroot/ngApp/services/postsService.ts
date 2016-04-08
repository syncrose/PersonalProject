namespace MyApp.Services {

    export class PostsService {
        private postsResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.postsResource = this.$resource("/api/posts/:id");
        }

        getPost(id) {
            return this.postsResource.get({ id: id });
        }

        savePost(postToSave) {
            return this.postsResource.save(postToSave).$promise;
        }
    }

    angular.module("MyApp").service("postsService", PostsService);
}