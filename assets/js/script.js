// Main Script,
// Author: Usama Farooq

// Theme Switcher
 // function to set a given theme
 function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark theme
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-light');
  } else {
      setTheme('theme-dark');
  }
}

// Immediately invoked function to set the theme on initial load
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
      document.getElementById('slider').checked = false;
  } else {
      setTheme('theme-light');
    document.getElementById('slider').checked = true;
  }
})();





// Temperature Converter
var cel = document.getElementById("cel");
var fah = document.getElementById("fah");

cel.addEventListener('input', function(){
  let c = this.value;
  let f = (c * 9/5) + 32;
  if(!Number.isInteger(f)){
    f = f.toFixed(4);
  }
  fah.value = f;

});

fah.addEventListener('input', function(){
  let f = this.value;
  let c = (f - 32) * 5/9;
  if(!Number.isInteger(c)){
    c = c.toFixed(4);
  }
  cel.value = c;

});