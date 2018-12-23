import {ImageData} from "./image-data";
import {Storage} from "./storage";

export class Images {
    private static images:ImageData[] = [];
    private static TAG = "IMAGES";
    
    public static init(){
        Images.loadImages();
    }

    public static getImages():ImageData[]{
        return Images.images;
    }

    public static getImage(index:number):ImageData{
        return Images.images[index];
    }

    public static addImage(imageData:ImageData){
        Images.images.push(imageData);
        Images.saveImages();
    }

    public static removeImage(index:number){
        Images.images.splice(index, 1);
        Images.saveImages();
    }

    public static saveImages(){
        Storage.set(Images.TAG, Images.images);
    }

    public static loadImages(){
        let data = Storage.get(Images.TAG, []);
        if(typeof data == "string"){
            data = Storage.obj(data);
        }
        Images.images = [];
        for(let i=0; i<data.length; i++){
            let image = new ImageData(data[i]);
            Images.images.push(image);
        }
    }

}
