import { Model } from "src/app/shared/class/model";

export class TextLink extends Model{
    
    constructor(attr: {}, idAttr: string = '') {
        super(attr);
    }

    get url():string{
        return this.getValue("url");
    }

    get text():string{
        return this.getValue("text")
    }
}
