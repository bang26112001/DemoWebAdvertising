var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var headline__nav = document.querySelector('.headline__nav')
var rootElement = document.documentElement

function handleScroll() {
  // Do something on scroll
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
    // Show button
    scrollToTopBtn.classList.add("showBtn")
  } else {
    // Hide button
    scrollToTopBtn.classList.remove("showBtn")
  }

  var scroll_Top = document.documentElement.scrollTop;
  if (scroll_Top > 80) {
    headline__nav.classList.add('header__active');
  }else{
    headline__nav.classList.remove('header__active');
  }
  
}

function scrollToTop() {
  // Scroll to top logic
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)

