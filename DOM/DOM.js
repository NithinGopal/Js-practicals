const container = document.querySelector('#container');

const p = document.createElement('p');
p.style.color = 'red';
p.textContent = "Hey I'm Red!";

const h3 = document.createElement('h3');
h3.style.color = 'blue';

const content = document.createElement('div');
content.classList.add('content');
content.style.cssText ='border-color: black; background: pink; text-align: center;';

const insidePara = document.createElement('p');
insidePara.textContent = 'ME TOO!';
insidePara.classList.add('innertext');
document.querySelector('.innertext');

const h1 = document.createElement('h1');
h1.textContent = 'I\'m in a div!';
h1.classList.add('innertext');

content.appendChild(insidePara);
content.appendChild(h1);

container.appendChild(content);


btn.addEventListener('click', function (e) {
    e.target.style.background = 'blue';
  });

