import { AbstractControl, ValidationErrors, FormGroup } from "@angular/forms";

export class ConfirmPasswordValidators{
    static shouldMatchNewPassword(formGroup: FormGroup): ValidationErrors | null {
        if(formGroup.controls.confirmPassword.value != formGroup.controls.newPassword.value)
            return {shouldMatchNewPassword: true};
        return(null);
    }
    
}