import {Injectable} from "@angular/core";

declare let Noty: any;

@Injectable()
export class UINoty {

    noty: any;

    constructor() {
    }

    open(options) {
        this.noty = new Noty(options);
        this.noty.show();
    }
}
