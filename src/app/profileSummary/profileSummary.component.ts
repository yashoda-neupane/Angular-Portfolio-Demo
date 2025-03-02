import { Component } from "@angular/core";
import { AboutService } from "../about/about.service";

@Component({
    selector: 'app-profileSummary',
    imports:[],
    templateUrl: './profileSummary.component.html',
    styleUrls: ['./profileSummary.component.css']
})
export class ProfileSummaryComponent{
    name: string = '';
    profession: string = '';
    constructor(private AboutService: AboutService) {
        const data = AboutService.getAboutData();
        this.name = data.name;
        this.profession = data.profession;
    }
}