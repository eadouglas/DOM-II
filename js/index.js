// Your code goes here
const intro = document.querySelector('.intro');
function myCallback(eventInfo) {
  const { type } = eventInfo; 
  console.log(type);

}
intro.addEventListener('mouseover', myCallback);

const h2letsgo = document.querySelector('.letsgo');
h2letsgo.addEventListener('click',event => {
    event.target.style.color = 'red';
}) 

const imgcontent = document.querySelector('.img-content')
imgcontent.addEventListener('dblclick',event => {
    event.target.style.border = '12px solid red'; 
})