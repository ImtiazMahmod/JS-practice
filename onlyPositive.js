// only positive value return from array

function onlyPositive(array){
    let positiveArray = [];
    let negativeArray = [];
    for(let value of array){
        if(Math.sign(value)==1 || Math.sign(value)==0){
            positiveArray.push(value);
        }  
        // else {
        //     negativeArray.push(value);
        // }    
                   
    }
    return {positiveArray};
    // return {positiveArray,negativeArray};
    
}

const array = [12,0,16,96,65,26,-56,19,-4];

const getOnlyPositive = onlyPositive(array);
console.log(getOnlyPositive); 
