import { Model } from "src/app/shared/class/model";

export class IconLink extends Model{

    constructor(attr: {}, idAttr: string = '') {
        super(attr);
    }

    get url():string{
        return this.getValue("url");
    }

    get icon():string{
        return this.getValue("icon");
    }
}
