`use strict`;
const categoryNav = document.getElementsByClassName("nav-highlight")(0)
  .outerHTML;
console.log(categoryNav);
categoryNav.classList.add("active");
