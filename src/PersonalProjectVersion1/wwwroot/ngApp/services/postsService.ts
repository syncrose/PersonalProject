namespace MyApp.Services {

    export class PostsService {
        private postsResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.postsResource = $resource
        }


    }

    angular.module("MyApp").service("postsService", PostsService);
}