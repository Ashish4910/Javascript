let head_1 = document.querySelector('heading');
console.log('Get Attribute of header : ', head_1);

let heading = document.querySelector("p");
console.log(heading.getAttribute("p"));
console.log(`set id attribute `, heading.setAttribute("p", '123'));

let id_box = document.querySelector('#box_label');
id_box.style.backgroundColor = 'blue';

// insert elements 

// first create element then add 
let newButton = document.createElement('button');
newButton.innerText='click me';
console.log('new Button', newButton);

// now access the div where you want to append the elements 
let div_for_create_elements = document.querySelector('#box_card');
div_for_create_elements.append(newButton); // at end 
div_for_create_elements.prepend(newButton); // at start 
div_for_create_elements.after(newButton); // at after 

div_for_create_elements.remove();

// delete elements 
