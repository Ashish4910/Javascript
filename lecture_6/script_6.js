// DOM (Document object model)
console.log() // print value 
console.dir() // print special method in the script(window method )
console.log(window.document.body);

// getElementById  -- used when you want to do one change beacuse we have one id in through out the html page 
let heading = document.getElementById('heading');
console.log('Heading print : ', heading);

// getElementsByClassName -- we used this when want to apply multiple change in the code because we have many class name as same 
let heading_class = document.getElementsByClassName('heading-class');
console.log('Get Element by class : ', heading_class);

// getElementsByTagName -- used for tag
let get_tagname = document.getElementsByTagName('p');
console.log('Get Elememt by tag name : ', get_tagname);

// querySelectorAll
let element = document.querySelectorAll('p');
console.log('querySelector  : ', element);

let get_h2 = document.getElementById('jsc');
console.log('Get h2 :', get_h2);
get_h2.innerText + ' from apna college student ';

let divs = document.querySelectorAll('.box');
let val = 1;
for (div of divs) {
    div.innerText = `new value ${val}`;
    val++;
}
//  console.log('Divs : ', divs);
//  divs[0].innerText ='new unique value 2 ';