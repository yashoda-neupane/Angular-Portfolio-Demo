import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root' // Make it globally available as singleton instance of the service
})
export class AboutService {
    
    private aboutData = {
        name: 'Evika Nomi',
        profession: 'Web Developer, Graphic Designer and Photographer',
        description: `Creative CV is an HTML resume template for professionals. Built with Bootstrap 4, Now UI Kit and FontAwesome, this modern and responsive design template is perfect to showcase your portfolio, skills, and experience.`,
        learnMoreLink: '#',
        basicInfo: {
        age: 25,
        email: 'anthony@company.com',
        phone: '+1718-111-0011',
        address: '140, City Center, New York, U.S.A',
        language: 'English, Nepali, French'
        }
    };

    getAboutData() {
        return this.aboutData;
    }
}