// Closures 
// A closure is the combination of a function and the scope object in which it was created.
// A closure creates a new stack-trace(scope) each time the outer funtion is invoked.
function makeAdder(a) {
	return function(b) {
		return a + b;
	}
}
// Declare 2 functions (more than first argument are ignored)
var x = makeAdder(5);
var y = makeAdder(20, 5, 5);

console.log(x(5));
console.log(y(5));


function buildList(list) {
    var result = [];
    for (var i = 0; i < list.length; i++) {
        var item = 'item' + i;
        result.push( function() {console.log(item + ' ' + list[i])} );
    }
    return result;
}

function testList() {
    var fnlist = buildList([1,2,3]);
    // Using j only to help prevent confusion -- could use i.
    for (var j = 0; j < fnlist.length; j++) {
        fnlist[j]();
    }
}

testList();
// Returns 3 times "item2 undefined" because the closure remains the 
// last values: item = "item2" and i = 3, so list[3] = undefined 