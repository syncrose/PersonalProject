namespace MyApp.Services {

    export class UserService {
        public userResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.userResource = this.$resource("/api/users/:id");
        }

        public getUsers() {
            return this.userResource.query();
        }

        public getUser(id) {
            debugger;
            return this.userResource.get({ id: id });
        }

        public updateUser(userToUpdate) {
            return this.userResource.save(userToUpdate);
        }
    }

    angular.module("MyApp").service("userService", UserService);
}