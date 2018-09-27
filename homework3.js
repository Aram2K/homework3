// A function that takes at least three arguments and returns the result of some set of operations using those arguments
const calc = function(q,w,e){
	return ((q*w+e)/2);
	
	
};
console.log(calc(5,4,8))


// A function that takes no arguments and returns something
const nof = function(){
return(6);	
};
console.log(nof());

//A function that takes arguments, does something but does not return anything

const f = function(age, birthYear){
	console.log(age + birthYear);
	
};
console.log(f(18, 2000));

// A function that takes three strings and returns the string that is the longest

const L = function(N1, N2, N3){
	let x;
	if (N1.length > N2.length && N1.length > N3.length){	
		x= N1;
	} else if (N2.length>N1.length && N2.length>N3.length){
		x=N2;
			
	}else {
		x=N3;
		
	}
	return(x);
};
console.log(L("Ara", "Mika", "George"));

// A function that takes two numbers and returns 0 if they are equal, 1 if the first is larger and -1 if the second is larger

const num = function(a, b){
	let y;
	if (a>b){
		y= 1;
	}else if (a===b){
		y=0;
	}else {
		y= -1;
	}
	return(y);
};

console.log(num(765, 259));

// Create a multiply function (that multiplies the two given arguments together and returns the result)

const multiply = function(m,n){
	return (m*n)
};
console.log(multiply(5,13));

// Create a divide function (that divides the first argument by the second and returns the result) 

const divide = function(o,p){
	return (o/p)
};
console.log(divide(5,13));

// Create a triangleArea function that takes base and height as input and returns the area of a triangle without using * or / 

const triangleArea= function(base, height){
	const z= multiply(base, height);
	return (divide(z,2));
	
};
console.log(triangleArea(5,20));


//Create a function called numLength that takes a number and returns the number of characters in the number (example: numLength(8940); should return 4).  Hint: strings have .length, numbers don't - so make a string and then get the length

const numLength = function(n){
	return ((n+"").length);
};
console.log(numLength(846568520));

// Create a function that takes two strings and a number.  If the length of the two strings concatenated together is greater than the given number, return 1, else return -1

const op = function(s,d,f){
	let t = 0;
	if ((s+d).length > f){
		t =1;
		
	}else {
		t= -1;
	}
	return t;
};
console.log(op("Michael ","is drunk", 12)); 


// Create a function runStuff that takes two numbers and a string.  If the string is 'rectangle', return the area of a rectangle using the two numbers as base and height.  If the string is 'triangle', return the area of a triangle (you can use the triangleArea function here).  If the string does not match 'rectangle' or 'triangle', return -1.  

const runStuff =function(base,height,v){
	if (v==="triangle"){
		return triangleArea(base,height);
	}else if (v==="rectangle"){
		return (base*height);	
	}
};
console.log(runStuff ( 8, 9, 'triangle'));