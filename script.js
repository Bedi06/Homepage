let element_list = document.getElementById('list');
let new_li = document.createElement('li');
let new_a = document.createElement('a');
new_a.setAttribute("href", 'https://www.codeyourfuture.io');
new_a.innerText = 'CYF';

new_li.appendChild(new_a);

element_list.appendChild(new_li);

let element_list2 = document.getElementById('list');
let new_li2 = document.createElement('li');
let new_a2 = document.createElement('a');
new_a2.setAttribute("href", 'https://studio.code.org/home');
new_a2.innerText = 'Code.org';

new_li2.appendChild(new_a2);

element_list2.appendChild(new_li2);

let element_list3 = document.getElementById('list');
let new_li3 = document.createElement('li');
let new_a3 = document.createElement('a');
new_a3.setAttribute("href", 'https://www.freecodecamp.org/');
new_a3.innerText = 'Freecodecamp';

new_li3.appendChild(new_a3);

element_list3.appendChild(new_li3);
