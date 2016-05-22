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

        public getUserContent(userPostPage) {
            debugger;
            let userContentResource = this.$resource('/api/users/userPosts');
            return userContentResource.query({ userPage: userPostPage }).$promise;
        }

        public getUserMsgs(userMsgPage) {
            debugger;
            let userContentResource = this.$resource('/api/users/userMsgs');
            return userContentResource.query({ userPage: userMsgPage }).$promise;
        }

        getTotalMsgs(id) {
            debugger;
            let msgResource = this.$resource('/api/users/totalMsgs');
            return msgResource.query().$promise;
        }

        getTotalPosts(id) {
            debugger;
            let postResource = this.$resource('/api/users/totalPosts');
            return postResource.query().$promise;
        }

        public updateUser(userToUpdate) {
            return this.userResource.save(userToUpdate);
        }
    }

    angular.module("MyApp").service("userService", UserService);
}