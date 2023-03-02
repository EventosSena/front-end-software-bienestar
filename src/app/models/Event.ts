import { Responsible } from "./Responsible";

export class Event {
    id:Number
    name:string;
    description:string;
    date:String;
    place:string;
    idresponsible:Responsible

    constructor(){
        this.id=0;
        this.name='';
        this.description='';
        this.date='';
        this.place='';
        this.idresponsible=new Responsible;
    }


}