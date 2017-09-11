import { AbstractControl, ValidationErrors } from "@angular/forms";

export class UsernameValidators {
     static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
        if ((control.value as string).indexOf(' ') != -1) {
            return { cannotContainSpace: true};
        }
        return null;
    }

    //async validator returns promise or observable
    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                let users = ["abc", "pqr"]; // assume got from server
                if(users.indexOf(control.value) != -1) {
                    resolve({ shouldBeUnique: true});
                }
                else {
                    resolve(null);
                }
            }, 5000);
        });
        //to get the list of all the usernames from server is time consuming and should be async
        //so we need to set some timeout or set interval
    }
}