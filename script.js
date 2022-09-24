document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_ul = document.createElement('ul');
  new_ul.innerText = 'Apple';

  element_list.appendChild(new_ul);

});
