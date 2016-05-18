namespace MyApp.Controllers {

    export class InnerProfileController {
        public zip;
        public meetups;

        constructor(
            private meetupService: MyApp.Services.MeetupService
        ) {

        }

        getMeetups() {
            debugger;
            this.meetups = this.meetupService.getMeetups(this.zip);
           
            console.log(this.meetups);
        }



    }

    export class EventsViewController {

    }

}