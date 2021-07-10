import {InjectionToken} from "@angular/core";

export class Environment {

}
export const TEST_ENV= new InjectionToken<Environment>(
    "TEST_ENV"
);
