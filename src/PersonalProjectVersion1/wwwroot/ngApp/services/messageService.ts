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
            return this.msgResource.save({ id: id }, msgToCreate).$promise;
        }
    }

    angular.module("MyApp").service("messageService", MessageService);
}