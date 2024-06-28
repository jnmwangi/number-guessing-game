function generateNumberRange(){
    const maxNumber = Math.floor(10 * Math.random());
    const size = Math.floor(10 * Math.random());
    
    if(maxNumber > size){
        return [size, maxNumber]
    }
    else{
        return [1, 10]
    }
}

const range = generateNumberRange();
const numberInMind = Math.floor( Math.random() * (range[1] - range[0]) + range[0] );