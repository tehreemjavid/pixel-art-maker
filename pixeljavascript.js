function starter() {
  let body = document.getElementById('pixelBody');
  let pixel = document.getElementsByClassName('pixel');
  let canvas = document.getElementById('canvas');
  let palette = document.getElementById('palette');
  let colors = ['Red', 'Crimson', 'DarkRed', 'Cyan', 'DarkTurquoise', 'RoyalBlue', 'Blue', 'GreenYellow', 'LawnGreen', 'Lime', 'Pink', 'HotPink', 'DeepPink', 'Bisque', 'DarkSalmon', 'LightCoral', 'White', 'Grey', 'DimGray',  'Black'];

  // grid pixel maker
  for (let i = 0; i < 1540; i++) {
    let div = document.createElement('div');
    div.classList.add('pixel');
    div.setAttribute('data-position', i);
    canvas.appendChild(div);
  }

  // make the palette colors
  for (let i = 0; i < colors.length; i++) {
    let circles = document.createElement('div');
    circles.classList.add('paletteColors');
    circles.style.backgroundColor = colors[i];
    palette.appendChild(circles);

    // display current color
    if (i === colors.length - 1) {
      let divText = document.createElement('div');
      let divColor = document.createElement('div');
      divText.classList.add('text');
      divText.innerHTML =  'CURRENT COLOR ---> ';
      divColor.classList.add('currentColor')
      palette.appendChild(divText);
      palette.appendChild(divColor);
    }
  }

  // let listener = function(event){
  //   console.log(event.target.dataset.position);
  // }

  // change color of pixel on click
  canvas.addEventListener('mousedown', function(event){
    document.getElementsByClassName('pixel')[event.target.dataset.position].style.backgroundColor = color;
    document.getElementsByClassName('pixel')[event.target.dataset.position].style.border = '1px solid ' + color;
  })

  // changes colors of canvas backgroundColor upon mouseover
  let colorChange;
  canvas.addEventListener('mouseover', function(event, listener){
    colorChange = Math.floor(Math.random() * colors.length)
    document.getElementById('border').style.boxShadow = '0em 0em 10em 0.5em ' + colors[colorChange];
  })

  // // stops painting when mouse is released
  // canvas.addEventListener('mouseup', function(event){
  //   canvas.removeEventListener('mouseover', listener);
  // })

  // change color of current color picked on click
  palette.addEventListener('click', function(event) {
    color = event.target.style.backgroundColor;
    let show = document.getElementsByClassName('currentColor')[0]
    show.style.backgroundColor = color;
  })
}

document.addEventListener('DOMContentLoaded', function() {
  starter()
})

// canvas.addEventListener('dragstart', function(event){
//   console.log(event.target)
// })
//
// canvas.addEventListener('dragend', function(event){
//   console.log(event.target)
// })