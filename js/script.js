function menuToggle () {
  var x = document.getElementById('myNavbar');
  if (x.className === 'navbar') {
    // add responsive to className to show menu
    x.className += ' responsive';
  } else {
    // change className back to hide menu
    x.className = 'navbar';
  }
}
