//this class handles all the unexpected errors 
//ErrorHandler is an angular class with handleError that can be overridden
//do add it in the providers part of app.module.ts

import { ErrorHandler } from "@angular/core";

export class AppErrorHandler implements ErrorHandler {
    handleError(error)
    {
        alert("An unexpected error occurred.");
        console.log(error);
    }

}
