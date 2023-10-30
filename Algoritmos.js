const input = require('readline-sync');

function fibonacciChallenges(){

    let fibonacci = [0,1];

    const cases = input.questionInt('Choose the case:');
    const variable = input.question('Submit a number:');
    
    
    switch(cases){
        
    
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


function russianChallenge(){


//Challenge  number 4

let arrayMultipliying = [];
let arrayMultiplier = [];
let multiplier = input.questionInt('Write the multiplier: ');
let multipliying = input.questionInt('Write the multipliying: ');
    

const double = (num)=>{
    const result = num * 2
    return result 
   };

const division = (num)=>{
    const result = num / 2
    return result 
};
    arrayMultiplier.push(multiplier) 
    arrayMultipliying.push(multipliying) 

while(multiplier > 2){

    const z = division(multiplier)
    multiplier =+ z;
    arrayMultiplier.push(Math.floor(multiplier))
  
   const x = double(multipliying)
   multipliying =+ x;
   arrayMultipliying.push(multipliying)
     
}

const arrayFilter = arrayMultiplier.filter((num) => num % 2 !== 0 )

let arrayResult = [];
arrayFilter.map((element) => {
    
    const indexPosition = arrayMultiplier.indexOf(element) 
    arrayResult.push(arrayMultipliying[indexPosition])
})


const sumar = (array)=>{

    let i = 0;
    
  while(arrayResult.length > i){

    let a = [0];

    arrayResult.map((element)=>{

        const suma = a[0] + element
        a[0] =+ suma
        i++
    })
   
    console.log(`result:${a}`);
  }

}

sumar()



    
}

function kindNumber(){

        console.log("I don't understood this exercise");
}


function confechVotes(){

const universityAmounth = input.questionInt('How many universities there are?: ')
let form = [];
let A = 0
let R = 0
let N = 0
let B = 0
for(let i = 0; universityAmounth > i; i++){
    let votes = []
    const universityName = input.question("what it's the university name?: ")
    console.log(universityName);
    const universityVote = input.question("Add a new vote: ");

    if(universityVote === 'A'){
        votes.push(universityVote)
        A += 1
       }else if(universityVote === 'R'){
        votes.push(universityVote)
        R += 1
       }
       else if(universityVote === 'N'){
        votes.push(universityVote)
        N += 1
       }else if(universityVote === 'B'){
        votes.push(universityVote)
        B += 1
       }else{
        console.log('Incorrect value');
       }
       
 
    console.log(votes);
    let again = input.question("press X if you wan't add another vote: ");
    
    
    while(again === 'X'){

    
       const otherVote = input.question("Add another vote: ");
       if(otherVote === 'A'){
        votes.push(otherVote)
        A += 1
       }else if(otherVote === 'R'){
        votes.push(otherVote)
        R += 1
       }
       else if(otherVote === 'N'){
        votes.push(otherVote)
        N += 1
       }else if(otherVote === 'B'){
        votes.push(otherVote)
        B += 1
       }else{
        console.log('Incorrect value');
       }
       
      
        again = input.question("Press X if you want add another vote // Press anything else to cancel" );
    }

    const format = {

        "University" : universityName,
        "votes" : votes,
        "A": A,
        "R": R,
        "N": N,
        "B": B
    }

    form.push(format)
    console.log(format);
   

}

   console.log(form);
   form.forEach((element)=>{
    console.log(`University:${element.University}`);

        element.votes.forEach((element)=>{
            console.log(`Vote: ${element}`);
        })

     

    console.log(`${element.University}: ${element.A} accept, ${element.R} refuse, ${element.B} blank, ${element.N} nulls`);    
   }) 





}


  

  const exercise = input.questionInt('Choose the exercise:');

  switch(exercise){

    case 1:
        fibonacciChallenges()
    break;

    case 2:
        russianChallenge()
    break;

    case 3:
        kindNumber()
    break;

    case 4:

        confechVotes()
    break;

  }

 

    


