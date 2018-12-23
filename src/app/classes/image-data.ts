export class ImageData {
    public name:string;
    public base64:string;
    public added_at: Date;
    public liked:boolean;
    constructor(data:any){
        if(typeof data == "string"){
            data = JSON.parse(data);
        }
        this.name = data.name;
        this.base64 = data.base64;
        this.added_at = data.added_at;
        this.liked = data.liked;
    }
}
