const people = [
  { name: 'bob', age: 20, position: 'developer' },
  { name: 'peter', age: 25, position: 'designer' },
  { name: 'susy', age: 30, position: 'the boss' },
  { name: 'anna', age: 35, position: 'intern' },
];
// filter
const young = people.filter((people)=>people.age <30)
console.log(young)
// no match
const checkPosition = people.filter((people)=>people.position === 'senDev' )
console.log(checkPosition)
// find
const findPeter = people.find((people)=>people.name === 'peter')
console.log(findPeter)
// no match
const findRaju = people.find((people)=>people.name === 'raju')
console.log(findRaju)
// multiple matches
const randomPerson = people.filter((people)=>people.age <30)
console.log(randomPerson['0'].name)
