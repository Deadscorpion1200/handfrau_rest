let slider = $('.range');
let fill = $('.bar .fill');
let square;
let value = $('.calc-calculator-square__square_count');
console.log(value.html());
function setBar()
{
  fill.css('width', slider.val()+'%')
  square = slider.val()
}

slider.on('input', setBar);
setBar();