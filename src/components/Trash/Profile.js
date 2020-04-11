
export default class Profile{
    constructor(id,name,gender,age,height,city,imgSrc,premium){
        this.id = id;
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.height= height;
        this.city = city;
        this.imgSrc= imgSrc;
        this.premium = premium;
    }
    
    
    show=()=> {
    return `name=${this.name} gender=${this.gender} age=${this.age} height=${this.height} city=${this.city} premium=${this.premium}`;
    }
}
 

/*  Users: [
    {id:0,name:'Gilad Zilberg',gender:'male',age:'28',height:'178',city:'Tel Aviv'},
    {id:1,name:'Beyonce knowles',gender:'female',age:'28',height:'178',city:'Los Angeles'}

    new Profile(0,"Gilad Zilberg",male,28,178,"Tel Aviv","...",True,["Football","Basketball","Volleyball"]),
    new Profile(1,"Beyonce knowles",female,37,167,"Los Angeles","https://content.iospress.com/media/hsm/2016/35-3/hsm-35-3-hsm0870/hsm-35-hsm0870-g010.jpg",True,["Sing", "Dance"]),
    new Profile(2,"Omer Kimhi",male,28,178,"Tel Aviv","...","Premium", [ "Football","Basketball","Volleyball"]) 
    ],
     */