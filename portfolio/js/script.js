'use strict';
window.onload = function showLoader(show) {
let loader = document.querySelector('#loader');
if (show) {
  loader.classList.remove("hide");
} else {
  loader.classList.add("hide");
}
}
window.onload = function() {
    try {
      TagCanvas.Start('myCanvas','tags',{
        textColour: 'var(--black)',
        reverse: true,
        depth: 0.9,
        maxSpeed: 0.1,
        initial: [0.1, 0.1],
        outlineMethod: 'none',
        minSpeed: .1,
        maxSpeed: .1


      });
    } catch(e) {
      // something went wrong, hide the canvas container
      document.getElementById('myCanvasContainer').style.display = 'none';
    }
  };
// show page or tab
function showPage(pageId) {
  hideAllPages();
  document.querySelector(`#${pageId}`).style.display = "block";
  location.href = `#${pageId}`;
  setActiveTab(pageId);

}

// sets active tabbar/ menu item
function setActiveTab(pageId) {
  let pages = document.querySelectorAll(".tabbar a");
  for (let page of pages) {
    if (`#${pageId}` === page.getAttribute("href")) {
      page.classList.add("active");
    } else {
      page.classList.remove("active");
    }
  }
}
// set default page
function setDefaultPage() {
  let page = "home";
  if (location.hash) {
    page = location.hash.slice(1);
  }
  showPage(page);
}


setDefaultPage();

// hide all pages
function hideAllPages() {
  let pages = document.querySelectorAll(".page");
  for (let page of pages) {
    page.style.display = "none";
  }
}


function toggleMenu() {
  let nav = document.querySelector(".hamburgerMenu");
  let ul = document.querySelector("nav > ul");

  if (nav.classList.contains("activeMenu")) {
    nav.classList.remove("activeMenu");
    ul.style.height = 0;
  } else {
    nav.classList.add("activeMenu");
    ul.classList.add("navigationActive");
    ul.style.height = ul.childElementCount * 52 + "px";
  }
}



// var offset = $(window).scrollTop() - actualBlock.offset().top,
//     windowHeight = $(window).height();
//
// if( offset >= -windowHeight && offset <= 0 ) {
//    // section entering the viewport
//    translateY = (-offset)*100/windowHeight;
//    scale = 1;
//    opacity = 1;
// } else if( offset > 0 && offset <= windowHeight ) {
//    //section leaving the viewport
//    scale = (1 - ( offset * 0.3/windowHeight));
//    opacity = ( 1 - ( offset/windowHeight) );
//    translateY = 0;
//    boxShadowBlur = 40*(offset/windowHeight);
// }




var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  let slides = [];
  slides = document.querySelectorAll(".img1");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.transform = "scale(1)";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.transform = "scale(1.4)";
  setTimeout(showSlides, 2000);

}
