import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export class PasswordValidators {
    static shouldMatchOldPassword(control: AbstractControl) : Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if((control.value as string) == "1234") {
                    resolve(null);
                }
                else {
                    resolve({ shouldMatchOldPassword: true});
                }
            }, 2000);
        });
    }

    static shouldMatchNewPassword(formGroup: FormGroup): ValidationErrors | null {
        if(formGroup.controls.confirmPassword.value != formGroup.controls.newPassword.value)
          {
            //Your can also do it without creating form groups
            //the control object is actually that would have been passed to this function 
            //is actually the entire form object and we would just have to do the following:
            //let newPassword = contol.get('newPassword');
            //let confirmPassword = control.get('confirmPassword');
            //then match the two

            return {shouldMatchNewPassword: true};
          }  
        return(null);
    }
}