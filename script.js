console.log("hello!");

function test() {
  console.log("hello!");

  const test = document.getElementById("test");

  test.style.display = "none";
}

let sideNav = false;
function hidesidenav() {
  sideNav = !sideNav;
  console.log("hello");
  var element = document.getElementById("sidenav-hide");
  var content = document.getElementById("content-container");

  if (sideNav) {
    content.classList.remove("content-container-hide-sidenav-icon");
    element.classList.add("hide-sidenav");
    content.classList.add("content-container-hide-sidenav");
  } else {
    // element.classList.add("show-sidenav");
    // content.classList.add("content-container-show-sidenav");

    element.classList.remove("hide-sidenav");
    content.classList.remove("content-container-hide-sidenav");
  }
}
let hideMenuNameCheck = false;
function hideMenuName() {
  console.log("hello!");

  hideMenuNameCheck = !hideMenuNameCheck;
  var getSideNavMenuName = document.getElementsByClassName("menuname");
  var getContentContainerId = document.getElementById("content-container");

  if (hideMenuNameCheck) {
    // getSideNavMenuName.style.display = "none";

    for (var x = 0; x < getSideNavMenuName.length; x++) {
      getSideNavMenuName[x].style.display = "none";
    }
    getContentContainerId.classList.add("content-container-hide-sidenav-icon");
  } else {
    for (var x = 0; x < getSideNavMenuName.length; x++) {
      getSideNavMenuName[x].style.display = "block";
    }

    getContentContainerId.classList.remove(
      "content-container-hide-sidenav-icon"
    );
  }
}
