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
            return this.userResource.get({ id: id });
        }

        public getUserContent(id) {
            let userContentResource = this.$resource('/api/users/userPosts');
            return userContentResource.query();
        }

        public getUserMsgs(id) {
            let userContentResource = this.$resource('/api/users/userMsgs');
            return userContentResource.query();
        }

        public updateUser(userToUpdate) {
            return this.userResource.save(userToUpdate);
        }
    }

    angular.module("MyApp").service("userService", UserService);
}