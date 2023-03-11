//your code here
class OutOfRangeError extends Error {
  constructor(message) {
    super(message);
    this.name = "OutOfRangeError";
	  
  }
	
}function evalString(){
	throw  new OutOfRangeError=("Expression should not start with invalid operator
");
}
try {
  evalString();
} catch(err) {
  alert(err.message); // Expression should not start with invalid operator
  alert(err.name); // InvalidExprError
  alert(err.stack); // a list of nested calls with line numbers for each
}


class InvalidExprError extends Error {
  constructor(message) {
    super(message);
    this.name = "InvalidExprError";
  }
}
function evalString(){
	throw  new InvalidExprError=("Expression should not end with invalid operator
");
}
try {
  evalString();
} catch(err) {
  alert(err.message); // Expression should not end with invalid operator
  alert(err.name); // InvalidExprError
  alert(err.stack); // a list of nested calls with line numbers for each
}
