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
            return {shouldMatchNewPassword: true};
        return(null);
    }
}