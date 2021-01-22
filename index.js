function wakeDog(dogName,dogBreed){
  let x = `Wake ${dogName} the ${dogBreed}`
  console.log(x)
  return x
}

function leashDog(dogName,dogBreed){
  let leash = `Leash ${dogName} the ${dogBreed}`
  console.log(leash)
  return leash 
}

function walkToPark(dogName,dogBreed){
  let walk = `Walk to the park with ${dogName} the ${dogBreed}`
  console.log(walk)
  return walk 
}

function throwFrisbee(dogName,dogBreed){
  let frisbee = `Throw the frisbee for ${dogName} the ${dogBreed}`
  console.log(frisbee)
  return frisbee
}

function walkHome(dogName,dogBreed){
  let home = `Walk home with ${dogName} the ${dogBreed}`
  console.log(home)
  return home 
}

function unleashDog(dogName,dogBreed){
    let unleash = `Unleash ${dogName} the ${dogBreed}`
    console.log(unleash)
    return unleash
}

const routine = [wakeDog,leashDog,walkToPark,throwFrisbee,walkHome,unleashDog]

function exerciseDog(dogName,dogBreed){
  const dog = []
    for(let i = 0;i < routine.length;i++){
      dog.push(routine[i](dogName,dogBreed))  
    }
    return dog 
}