export class Storage {
    public static get(key:string, defaultValue:any = ""){
        var data = localStorage.getItem(key);
        if(data === null || data === undefined){
            return defaultValue;
        }
        if(typeof data === 'string'){
            return Storage.obj(data);
        }
        return data;
    }

    public static set(key:string, value:any){
        if(typeof value !== 'string'){
            value = Storage.str(value);
        }
        localStorage.setItem(key, value);
    }

    public static str(data:any){
        return JSON.stringify(data);
    }
    
    public static obj(json: string){
        return JSON.parse(json);
    }
}
