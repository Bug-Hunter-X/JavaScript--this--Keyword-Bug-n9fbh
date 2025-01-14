function myFunc() {
  console.log(this);
}

const obj = {
  myMethod: myFunc
};

const boundMethod = obj.myMethod.bind(obj); // explicitly bind this to obj

boundMethod(); // this will log obj

const arr = [myFunc];
const boundArrFunc = arr[0].bind(obj); // explicitly bind this to obj
boundArrFunc(); // this will log obj

// Using arrow functions: arrow functions inherit the 'this' value from their surrounding scope.
const arrowFunc = () => {
  console.log(this);
};

arr.forEach(arrowFunc); // This may log the expected scope, depending on context

obj.arrowMethod = arrowFunc;
obj.arrowMethod(); // logs this as the object 'obj' 