function avgArray(arrayArgs) {
	var sum = 0;
	for(let i=0; i<arrayArgs.length; i++) {
		sum += arrayArgs[i];
	}
	return sum/arrayArgs.length;
}

var myArray = [1,2,3,4,5,6];
var a = avgArray(myArray);
console.log('Average value of the Array [' + myArray + '] = ' + a);


// Constructor function Person
function Person(name, lastName) {
	this.name = name;
	this.lastName = lastName;
};
// playing with 'this'
console.log('-> Crea p1, instancia de Person("Juanky", "Smith"):');
var p1 = new Person('Juanky', 'Smith');
console.log('-> this en el raiz: ');
console.log(this);

// Create function independently from the Person object
getCapLastName = function() {
	console.log('this dentro de la funcion aplicada(apply/call) sobre p1: ');
	console.log(this);
	return this.lastName.toUpperCase();
};
getCapName = function() { 
	return this.name.toUpperCase(); 
};

console.log('-> Invoca la funcion p1.getCapName():');
try {
	console.log(p1.getCapName());
}
catch(err) {
	console.log(err.message);
}

console.log('-> Añade getCapName() al prototype de Person e invoca p1.getCapName() de nuevo:');
Person.prototype.getCapName = getCapName;
console.log(p1.getCapName());
console.log('-> Crea p2, instancia de Person("Pepe", "Smith")');
var p2 = new Person("Pepe", "Smith");
console.log(p2.getCapName());
// apply() and call() set the value of 'this'
console.log(getCapLastName.apply(p1));
console.log(getCapLastName.call(p1));
console.log('-> this al volver al raiz: ');
console.log(this);