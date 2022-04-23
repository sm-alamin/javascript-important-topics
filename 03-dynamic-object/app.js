const person = {
    name: "john",
}
console.log(person.name)
person.age =27 ;
console.log(person)

const state ={
    loading:true,
    name: ' ',
    job: ' ',
}
updateState = (key,value)=> {
    state[key] = value
}
updateState("name","rafi");
updateState ("job","developer")
updateState("loading","false")
console.log(state)