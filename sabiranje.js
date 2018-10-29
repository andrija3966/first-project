function s(a,b){
	
 	let c=Number(a)+Number(b);
 	if(isNaN(c))
 		console.log("operand not a number");
 	else
 		console.log(c);
}
s(2,5);
s(2,"5");
s("asd",1);
s(false,65);