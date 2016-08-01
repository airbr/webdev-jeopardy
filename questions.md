Jeopardy Questions - From two weeks of WDI 

HTML
--
* The expansion of HTML? Hypertext Markup Language
* The current version of HTML? HTML5
* The seperate language that has replaced HTML <style></style> tags in common and professional usage? CSS or Cascading Style Sheets
* Functionally the same as a div introduced in HTML5? Semantic Tags
* HTML is the principal source for attributes of Nodes in the DOM. Browsers do not usually allow cross-site actions but there is one major exception. iFrames



CSS
--

* The expansion of CSS? Cascading Style Sheets
* <span></span> is an example of what element? inline
* The * Selector applies to? everything
* The feature introduced in CSS 3 recently meant to address issues with "floats"? flexbox
* CSS is hard. Whats one feature that makes it hard compared to other languages? No error output


JS
--
* A coding language Javascript is not really related to? Java
* Javascript is usually described as a " "-based langage? Object
* JSON is: a text format readable by Javascript
* Angular JS is an example of; a JS Framework "incorrect: an open-source, cross-platform runtime environment for developing server-side Web applications"
* "One hundred Samurai are standing in a circle each holding a sword. The first samurai kills the second, then the third kills the forth, and so on until there is only one Samurai left standing. Write a program to determine which Samurai will be the last one alive (assume we have numbered the samurai from 1 to 100)?":  what is:

```
var battlefield = [];
for (var i = 1; i <= 100; i++) {
	battlefield.push("Samurai  Number " + i)
}
while (battlefield.length > 1) { 
	for (i = 1; i <= battlefield.length; i++) {
		if (i === battlefield.length) { 
			var killList1 = battlefield.shift();
			console.log(killList1);
		} else {
			var killList2 = battlefield.splice(i, 1);
			console.log(killList2);
		}
	}
}

console.log(battlefield);
```





UNIX
--
* The "Terminal" or unix command line is an example of a ? REPL
* UNIX was introduced later into what major operating system? Mac OS X
* The "man x" function does what to x?: Brings up the manual
* Someone on the internet tells you to enter "rm -rf" on your computer. What would this do? What is likely irreparable damage to your file system.
* GREP Allows the user to? find specific text in potentially many files saving significant time.




Bonus
--

* A computer language known for being implemented by government with little input or design by computer scientists ? COBOL
* The Man page for Git describes it as ? "That stupid content tracker"
* This is an example of a " " only animation: (Include CSS only animation) A css-only animation
* A difference between Declarations vs. Expressions in Javascript ? Answer Function 
declarations define functions without assigning them to variables. 
* Use of !("Alert") is often considered bad practice, as browsers and users are hostile to pop-ups. What is one of the other two native Javascript popup functions? !confirm
3