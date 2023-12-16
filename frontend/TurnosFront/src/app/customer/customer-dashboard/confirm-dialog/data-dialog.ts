import {User} from "src/app/shared/class/user";
import { Turno } from 'src/app/shared/class/turno';

export class DataDialog {
    user:User;
    turno: Turno;

    constructor(u:User,t:Turno){
        this.user=u;
        this.turno= t;
    }
}
