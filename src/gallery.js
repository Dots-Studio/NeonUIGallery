//This JS file is just used for the NeonUI controls gallery.
//In your app, use NeonUI.js

var sheet = document.querySelector("#gallerySheet")
var dialog = document.querySelector("#galleryDialog")

function randomValue() {
    var RandomNumber = Math.floor(Math.random() * 101);
    var ProgressBar = document.getElementById("galleryProgress")
    ProgressBar.style.width = RandomNumber + "%"
}

function ToggleVisibility(e) {
  if(getComputedStyle(e, null).display == 'none') {
    e.style.display = 'flex'
  }
  else {
    e.style.display = 'none'
  }
}

window.onload = function() {
  AttachContextMenu('body', 'menu')
  AttachContextMenu('#galleryRightClickExample', 'galleryMenu')
}