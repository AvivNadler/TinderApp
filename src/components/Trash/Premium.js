export default class Premium{
    constructor(id,name,gender,age,height,city,imgSrc,premium,hobbies){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height= height;
        this.city = city;
        this.imgSrc= imgSrc;
        this.premium = premium;
        this.hobbies = hobbies;

    }
    show=()=> {
    return `name=${this.name} price${this.price}`;
    }  
}