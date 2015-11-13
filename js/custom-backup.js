function modifyText() {

if(this.className=='logo active') {

this.className="logo ready";
		if(annyang) {



var hello= function() {
           
          	 $( ".output-paragraph" ).load( "code-db/hello.txt");

        };

var all= function() {
           
           $('#query').append(' *');
        };
var select= function() {
           
           $('#query').append(' select');
        };
var from= function() {
           
           $('#query').append(' from');
        };
var o_braces= function() {
           
           $('#query').append(' \{');
        };
var c_braces= function() {
           
           $('textarea').append('\}');
        };
var o_paranthesis= function() {
           
           $('textarea').append('\(');
        };
var c_paranthesis= function() {
           
           $('textarea').append('\)');
        };
var o_bracket= function() {
           
           $('textarea').append('\[');
        };
var c_bracket= function() {
           
           $('textarea').append('\]');
        };
var space= function() {
           
           $('textarea').append(' ');
        };
var backspace= function() {
           
           $('textarea').append('\r');
        };
var new_line= function() {
           
           $('textarea').append('\n');
        };
    var commands = {
    	'call': all,
    	'select': select,
    	'open c': o_braces,
    	'close c': c_braces,
	'open p': o_paranthesis,
    	'close p': c_paranthesis,
    	'open b': o_bracket,
    	'close b': c_bracket,
    	'space': space,
    	'backspace': backspace,
    	'next line': new_line,
        };

				      annyang.debug();




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