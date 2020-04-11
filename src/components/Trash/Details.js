
export default class Details{
    constructor(gender,minAge,maxAge){
        this.gender = gender;
this.minAge= minAge;
this.maxAge = maxAge;
    }
    show=()=> {
    return `gender=${this.gender} ages${this.minAge}-${this.maxAge}`;
    }
    render() { 
        return (<div>Necessary?
    </div>  );
    }
}
 

