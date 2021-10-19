import { TimeoutError } from "rxjs";

export class Livre {
    public title:string;
    public cover:string;
    public price:number;
    public reduction: number;
    constructor( public titre:string, public cov:string,public p:number,public red:number,){ 
            this.title=titre;
            this.cover=cov;
            this.price=p;
            this.reduction=red;


    }
}
