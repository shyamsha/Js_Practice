// find each charterer occurrence in para

function char(s) {
  let obj={}
  for(let i=0;i<s.length;i++){
    if(!obj[s[i]]){
      obj[`${s[i]}`]=1
    }else{
      obj[`${s[i]}`]++
    }
  }
  return obj
}

console.log(char('aa sachin shyam kochi')) // { a: 4, ' ': 3, s: 2, c: 2, h: 3, i: 2, n: 1, y: 1, m: 1, k: 1, o: 1 }