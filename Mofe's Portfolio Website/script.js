var tablinks = document.getElementsByClassName("tab__links");
var tabcontents = document.getElementsByClassName("tab__contents");

function opentab(tabname) {
  for (let tablink of tablinks) {
    tablink.classList.remove("active__link");
  }

  for (let tabcontent of tabcontents) {
    tabcontent.classList.remove("active__tab");
  }

  event.currentTarget.classList.add("active__link");
  document.getElementById(tabname).classList.add("active__tab");
}
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

const element = document.querySelector('.profile__col--1 img');
window.addEventListener('scroll', function() {
  if (isInViewport(element)) {
    element.classList.add('fade-in');
  }
});
