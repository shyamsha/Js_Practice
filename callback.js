// callback 
// it's wait until its dne
function call(cb) {
  setTimeout(() => {
    cb(10)
  }, 100);
}

call(n=>{
  console.log(n);
})

// promise
// it not wait going to execute another one
function callPromise(){
  return new Promise((res,rej)=>{
    call(res)
  })
}

const promise=callPromise()
// when ever we want value in future unpack the value 
promise.then(n=> console.log(n))