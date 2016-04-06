namespace MyApp.Services {

    export class PostsService {
        private postsResource;

        constructor(private $resource: ng.resource.IResourceService) {
            
        }


    }

    angular.module("MyApp").service("postsService", PostsService);
}