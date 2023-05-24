// How do you test for an empty object

Object.entries(obj).length === 0 && obj.constructor === Object;
// Since date object length is 0, you need to check constructor check as well

Object.keys(obj).length === 0 && obj.constructor === Object;
