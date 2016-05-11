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
            debugger;
            return this.postsResource.save({ id: id }, postToSave).$promise;
        }

        deletePost(id) {
            return this.postsResource.delete({ id: id }).$promise;
        }
    }

    angular.module("MyApp").service("postsService", PostsService);
}