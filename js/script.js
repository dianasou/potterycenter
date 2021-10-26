function menuToggle () {
  var x = document.getElementById('myNav');
  if (x.className === 'navbar') {
    // add responsive to className to show menu
    x.className += ' responsive';
  } else {
    // change className back to hide menu
    x.className = 'navbar';
  }
}

/* open menu when someone clicks on menu span element */
function openNav() {
  document.getElementById("myNav").style.width = "100%";
}

/* close menu when someone clicks on the "x" symbol */
function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}
