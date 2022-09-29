function getNumberOrString(value) {
    // Convert a string value to a number if possible
    let number_value = Number(value);
    if (Number.isNaN(number_value)) {
      return value
    } else {
      return number_value
    }
  }
  
  
  
  document.getElementById('send').addEventListener('click', (event) => {
    let element_display = document.getElementById('display');
    let new_ul = document.createElement('ul');
    new_ul.innerText = getNumberOrString(document.getElementById('name1').value);
    new_ul.setAttribute("class", 'Name');
  
    element_display.appendChild(new_ul);
    let new_ul2 = document.createElement('ul');
    new_ul2.innerText = getNumberOrString(document.getElementById('comment').value);
    new_ul2.setAttribute("class", 'Comment');
  
    element_display.appendChild(new_ul2);
  
  });
