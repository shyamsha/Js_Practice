function FibIterator(a) {
  this.state = { x: 1, y: a };
  this.next = function() {
    const ret = this.state.x;
    const z = this.state.x + this.state.y;
    this.state.x = this.state.y;
    this.state.y = z;
    return   ret;
  }
};
const fibs = new FibIterator(4);
   console.log(fibs.next());
   console.log(fibs.next());
   console.log(fibs.next());
   console.log(fibs.next());

  
