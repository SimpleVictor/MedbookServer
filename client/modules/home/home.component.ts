import {Component, OnInit, ElementRef} from "@angular/core";

declare var firebase:any;
declare var $:any;

@Component({
    selector: "home",
    styleUrls: ['client/modules/home/home.component.css'],
    templateUrl: `client/modules/home/home.component.html`
})
export class HomeComponent implements OnInit {

    patient_profile=false;
    medical_time=false;
    allergies=false;
    medications=false;
    patient_vitals=false;
    test_results=false;

    patient_profile_data;



    constructor(private el : ElementRef) {
        console.log(firebase);

        var refs = firebase.database().ref();
        refs.on("value", (snapshot) => {
            console.log(snapshot.val());
            this.patient_profile_data = snapshot.val();
console.log("asdas");
        });

    }

    ngOnInit(){


    }




}
