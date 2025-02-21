const colors = ["#008000", "#FF0000", "#855CC8", "#F15025"];  
let history = [];

function getRandomColor() {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex]; 
}

function updateHistory(color) {
  history.push(color);
  if (history.length > 5) {  
    history.shift();
  }
}

const btn = document.getElementById('btn');
const colorSpan = document.querySelector('.color');
const historyBtn = document.getElementById('history-btn');

btn.addEventListener('click', function() {
  const newColor = getRandomColor();  
  document.body.style.backgroundColor = newColor;  
  colorSpan.textContent = newColor;  
  updateHistory(newColor);  
});

historyBtn.addEventListener('click', function() {
  if (history.length > 1) {  
    history.pop();  
    const prevColor = history[history.length - 1];  
    document.body.style.backgroundColor = prevColor;
    colorSpan.textContent = prevColor;
  }
});

colorSpan.addEventListener('click', function() {
  const colorCode = colorSpan.textContent;
  navigator.clipboard.writeText(colorCode).then(function() {
    alert(`Color ${colorCode} copied to clipboard!`);  
  }).catch(function(error) {
    alert('Failed to copy color code!');
  });
});
