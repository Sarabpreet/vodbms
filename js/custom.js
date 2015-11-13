function modifyText() {

if(this.className=='logo active') {

this.className="logo ready";
		if(annyang) {

// var hello= function() {
//           	 $( ".output-paragraph" ).load( "code-db/hello.txt");
//         };


var a=$('#query');

// var doc=document.querySelector('.text');

var select=function(){
a.append('select ');
};

var all=function(){a.append('* ');};
var from=function(){a.append('from ');};
var example=function(){a.append('example ');};
var where=function(){a.append('where ');};
var serial=function(){a.append('serial ');};
var equal=function(){a.append('=');};
var zero=function(){a.append('0');};
var semicolon=function(){a.append(';');};
var open_c=function(){a.append('{');};
var close_c=function(){a.append('}');};
var new_line=function(){a.append('\n');};
var open_p=function(){a.append('(');};
var close_p=function(){a.append(')');};
var execute=function(){

alert('the final query is '+a.value);
alert('The vodbms will load the result now');


};
var weird=function(){a.append('Dear Sarabpreet, stop giving commands to me, i am machine but you got to do something alteast, you cannot relly on me always!');};
var clear=function(){a.value(' ');};


    var commands = {
    	'select': select,
    	'all': all,
    	'from': from,
    	'example': example,
	'where': where,
    	'serial': serial,
    	'is equal to': equal,
    	'zero': zero,
        'semicolon': semicolon,
    	'open c': open_c,
    	'close c': close_c,
    	'next line': new_line,
        'open p':open_p,
        'close p':close_p,
        'execute':execute,
        'something weird':weird,
        'clear canvas':clear,
};

				      annyang.debug();


    annyang.addCommands(commands);


			annyang.start();
		}
}

else{

this.className="logo active";

}

}

// add event listener to table
var el =  document.querySelector('.logo');

el.addEventListener("click", modifyText, false);