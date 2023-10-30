const input = require('readline-sync');

function fibonacciChallenges(){

    let fibonacci = [0,1];

    const challenge = input.questionInt('Choose the challenge:');
    const variable = input.question('Submit a number:');
    
    
    switch(challenge){
        
    
        case 1: 
        //Challenge number 1
    
        //You can search a number in the index change the variable right here    
           
    
        //This function makes an array with the same long of the variable     
            function fibonatization(){
                for(let i = 1 ; i < variable ; i++){
                    const nextNumber = fibonacci[i] + fibonacci[i - 1]
                    fibonacci.push(nextNumber)
                }
                return fibonacci
            }
    
    
        //Finally you search in the array that you make with the same variable minus one
    
            const fibonacciArray = fibonatization()
            console.log(`F${variable} = ${fibonacciArray[variable - 1]}`);
    
    
            break;
    
        case 2:
    
        //Challenge number 2
    
        const fibonacciVerification = fibonatization();
    
            //Make a filter with the fibonacci Array
                const valid = fibonacciVerification.filter( (number) => number == variable )
    
                 
           if(valid.length > 0){
          
            console.log(`${variable} it's a fibonacci number`);
    
           }else{
    
            console.log(`${variable} isn't a fibonacci number`);
    
           }
    
        break;
        
        case 3:
            
        //Challenge number 3
            
        //Just call again the fibonatization function and slice the last value on the array because the function return one number more than we need
            const fibonacciResponse = fibonatization()
            const text = fibonacciResponse.slice(-0,-1)
            console.log(`The first ${variable} numbers of the fibonacci secuency are: ${text}` )
    
        break;
    

    }

}



//Challenge  number 4

const array = [];
const multiplicador = input.questionInt('Write the multiplier: ');
const multiplicando = input.questionInt('Write the multipliering: ');

while(multiplicador != 1){

   const double = (num2)=>{
    const result = num2 * 2
    return result
   }
   
   console.log(double);
    let num1 =  multiplicando * 2
   
    array.push(num1)
   
    let num2 = num1 * 2

    array.push(num2)
    console.log(multiplicando);
    console.log(array);
}
console.log('l' + array);


    


