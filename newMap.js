// new Map is similar to object but a map object iterates its elements in insertion order
let contacts=new Map()

contacts.set(0,"s")
contacts.set(1,"y")
contacts.set(2,"a")
let check= contacts.has(1)
let  del=contacts.delete(1)
let fetch= contacts.get(0)
let val=contacts.values()
let key=contacts.keys()
let size=contacts.size
for(let [key, value] of contacts){
  console.log(key,value)
}
for (let key of contacts.keys()) {
  console.log(key)
}
for (let value of contacts.values()) {
  console.log(value)
}
for (let [key, value] of contacts.entries()) {
  console.log(key + ' = ' + value)
}
let en=contacts.entries()
console.log(en)

contacts.forEach(function(value, key) {
  console.log(key + ' = ' + value)
})

// manual creating
let first = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
])

let second = new Map([
  [1, 'uno'],
  [2, 'dos']
])

// Merge maps with an array. The last repeated key wins.
let merged = new Map([...first, ...second, [1, 'eins']])

console.log(merged.get(1)) // eins
console.log(merged.get(2)) // dos
console.log(merged.get(3)) // three