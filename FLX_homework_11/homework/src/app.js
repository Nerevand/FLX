let btn = document.getElementById('btn');
btn.addEventListener('click', newElement);
let max = [];
let maxNumber = 9;
let ul = document.getElementById('myUL');
let close = document.getElementsByClassName('close');
for (let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    let div = this.parentElement;
    max.pop();
    div.style.display = 'none';
  }
}
function newElement() {
  if (max.length > maxNumber) {
    return alert('max tasks is 10 that you can save here');
  }
  let li = document.createElement('li');
  li.className = 'li';
  li.draggable = true;
  let inputValue = document.querySelector('.area').value.trim();
  if (inputValue === '') {
    return alert('You must write something!');
  } else {
    ul.appendChild(li);
  }
  max.push(inputValue);
  document.querySelector('.area').value = '';
  let box = document.createElement('i');
  box.className = 'material-icons done';
  box.innerHTML = 'crop_square';
  li.appendChild(box);
  let checkBlock = true;
  box.addEventListener('click', () => {
    if (checkBlock) {
      box.innerText = 'check_box';
      checkBlock = false;
    } else {
      box.innerText = 'crop_square';
      checkBlock = true;
    }
  });
  let t = document.createElement('span');
  t.innerText = inputValue;
  li.appendChild(t);
  let deleteIcon = document.createElement('i');
  deleteIcon.className = 'material-icons close';
  deleteIcon.innerText = 'delete';
  li.appendChild(deleteIcon);
  for (let i = 0; i < close.length; i++) {
    close[i].onclick = function () {
      let div = this.parentElement;
      const one = 1;
      max.splice(i, one);
      div.style.display = 'none';
    }
  }
  drop(li);
  document.querySelector('.area').focus();
}
let drag = null;
function dragStart(e) {
  drag = event.target;
  e.target.style.opacity = 0.5;
}
function dragEnd(e) {
  e.target.style.opacity = '';
}
function dragOver(e) {
  e.preventDefault();
}
function dragEnter(e) {
  if ('li' === e.target.className) {
    e.target.style.background = 'red';
  }
}
function dragLeave(e) {
  e.target.style.background = '';
}
function dragDrop(e) {
  if ('li' === event.target.className) {
    e.target.style.background = '';
    drag.parentNode.removeChild(drag);
    ul.insertBefore(drag, event.target);
  }
}
function drop(el) {
  el.addEventListener('dragover', dragOver);
  el.addEventListener('dragstart', dragStart);
  el.addEventListener('dragenter', dragEnter);
  el.addEventListener('drop', dragDrop);
  el.addEventListener('dragleave', dragLeave);
  el.addEventListener('dragend', dragEnd);
}