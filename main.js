
///Q1

function numChecker(arrayNew, numberChecked){

    for(let i=0;i<arrayNew.length;i++){

        if(arrayNew[i]==numberChecked)
         {
        console.log("True")}
        else 
        {
            console.log("False")
        }
    } 
    
}

console.log(numChecker([1,2,3,4],4))




//Q2


function  converter(hours,minutes){
    let seconds=0;

     if(typeof hours === 'number')
     {
     seconds = hours*60*60;
     }
     if(typeof minutes === 'number')
     {

     seconds += minutes*60

     }

     console.log(seconds);
 }
 console.log(converter(1,3))




 // Q3 
 var  aquarium = {
    filledWithWater: true,
    capacityInGallons: 12,
    numberOfRocks: 5,
    fish: [
            {
                type: 'goldfish' ,
                size: '3.5 inches',
                color: 'golden'
            },
            {
                type: 'puffer',
                size: '4 inches',
                color: 'tan'
            },
            {
                type: 'clown',
                size: '3 inches',
                color: 'orange'
            }
        ]
}


//1

console.log(aquarium.capacityInGallons)

//2

aquarium.numberOfRocks= aquarium.numberOfRocks + 2

console.log(aquarium.numberOfRocks)

// 3


console.log(aquarium.fish[2])

//4

aquarium.fish[1].size
console.log(aquarium.fish[1].size)

//5

console.log(aquarium.fish[2].size= " 4 inches")
console.log(aquarium.fish[2])

//6

let newFish = {
    type: 'Star',
    size: '5 inches',
    color: 'Blue'
}

aquarium.fish.push(newFish)

console.log(aquarium.fish)


//Q4


let ObjectsImport = require('./data')

let myObjects = JSON.parse(ObjectsImport)


let logData = function() { 

 console.log(myObjects.people)
} 

logData()

console.log("------------------------------------------")


let logNames = function() { 

    for(i in myObjects.people)

    console.log(myObjects.people[i].name)
};

logNames()


console.log("------------------------------------------")

let logNameEyes = function() { 

    for(i in myObjects.people)

    console.log(`The name is : ${myObjects.people[i].name} and eye color is : ${myObjects.people[i].eye_color}`)
};

logNameEyes()

console.log("------------------------------------------")


let logByMass = function() { 
    for(i in myObjects.people){
        if(myObjects.people[i].mass > 75)
        console.log(myObjects.people[i].name)
    }
};

logByMass()


console.log("------------------------------------------")








