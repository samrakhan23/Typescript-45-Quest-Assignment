// Unchanged Magicians: 

let magiciansNames:string[] = ["Ali", "Babar", "Apana", "Zubia"];

let Magicians2 = [...magiciansNames];

function show_magicians(greet: string){
  let greetings = "";
  for (let Magician of Magicians2){
    greetings += `${greet} ${Magician}\n`
  }
  return greetings;
}

let Magicians3 = show_magicians("Hello");
let myArray = Magicians3.split('\n')
console.log(myArray)
console.log(magiciansNames)

