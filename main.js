const but = document.querySelector('#click')
const spawn = document.querySelector('#spawn')
function createHearts() {
  
  const plusOne = document.createElement('div');
  plusOne.classList.add('plus-one');
  plusOne.textContent = '❤';
  plusOne.style.left = `${Math.random()*300}px`;
  plusOne.style.opacity = `${Math.random()}`;
  plusOne.style.fontSize = `${Math.random()*100}px`;

  spawn.parentElement.appendChild(plusOne);

  setTimeout(() => {
      plusOne.remove();
  }, 10000);
}

setInterval(() => {
  createHearts()
}, 100)

but.addEventListener('click', () => {
  if (but.className == '-1') {
    but.innerHTML = 'Знаешь, что..'
    but.className = '-2'
  } else if (but.className == '-2') {
    but.innerHTML = 'Хоть у меня и не получилось сегодня тебя увидеть..'
    but.className = '-3'
  } else if (but.className == '-3') {
    but.innerHTML = 'Я всё равно хочу поздравить тебя с этим праздником'
    but.className = '-4'
  } else if (but.className == '-4') {
    but.innerHTML = 'Все эти сердечки тебе'
    but.className = '-5'
  } else if (but.className == '-5') {
    but.innerHTML = 'Люблю тебя, Лерочка<3'
    but.className = 'final'
  }
})