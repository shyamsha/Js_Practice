Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    if (typeof this[i] !== "undefined") {
      cb(this[i], i, this);
    }
  }
};

const arr = ["a", "b", "c"];

arr.myForEach((element, index) => console.log({ [index]: element }));
// output:
// {0: 'a'}
// {1: 'b'}
// {2: 'c'}

const arr1 = ["a", , "c"];

arr1.myForEach((element, index) => console.log({ [index]: element }));
// output:
// {0: 'a'}
// {2: 'c'}
