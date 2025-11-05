// for typing animation==================================================================
var i = 0;
var txt = "Specialized in Web Wevelopment"; /* The text */
var speed = 50; /* The speed/duration of the effect in milliseconds */

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
    // console.log("sdsdssd");
  }
}

setTimeout(() => {
  typeWriter();
}, 600);