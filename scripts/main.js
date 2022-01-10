const myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!';

 // Define a Function
 function sayOuch() {
 	alert('Ouch! Stop poking me!');
 }
 
 // Use a CSS selector to identify an element
 var foxImage = document.querySelector('img');
 
 // Assign the function to the onclick event on that element
 foxImage.onclick = sayOuch;

 function tend() {
        document.getElementById('my').style.visibility='visible';
      }
      function tn() {
        document.getElementById('my').style.visibility='hidden';
      }

// With a function, I am able to perform multiple tasks 
function SwitchButtons(buttonId) {
  var hideBtn, showBtn, menuToggle;
  if (buttonId == 'button1') {
    document.getElementById('my').style.visibility='hidden';
    showBtn = 'button2';
    hideBtn = 'button1';
  } else {
    document.getElementById('my').style.visibility='visible';
    showBtn = 'button1';
    hideBtn = 'button2';
  }
  //I don't have your menus, so this is commented out.  just uncomment for your usage
  // document.getElementById(menuToggle).toggle(); //step 1: toggle menu
  document.getElementById(hideBtn).style.display = 'none'; //step 2 :additional feature hide button
  document.getElementById(showBtn).style.display = ''; //step 3:additional feature show button

}