namespace MyApp.Services {

    export class MessageService {
        private msgResource;

        constructor(private $resource: ng.resource.IResourceService) {
            this.msgResource = this.$resource("/api/msgs/:id");
        }

        getMessage(id) {
            return this.msgResource.get({ id: id });
        }

        saveMsg(id, msgToCreate) {
            debugger;
            return this.msgResource.save({ id: id }, msgToCreate).$promise;
        }

        deleteMsg(id) {
            return this.msgResource.delete({ id: id }).$promise;
        }
    }

    angular.module("MyApp").service("messageService", MessageService);
}