window.onload = function () {
  ButtonText();
  AOS.init();
};

function ButtonText() {
  var ButtonText = "Error";
  const host = window.location.hostname;

  if (host.length > 1) {
    ButtonText = host;
  } else {
    ButtonText = document.location;
  }

  document.getElementById("hostname").innerText = ButtonText;
}

function showmore() {
  document.getElementById("more-content").style.display = "block";
  document.getElementById("nav").innerHTML +=
    '<li class="nav-item" data-aos="fade-left" data-aos-offset="500" data-aos-duration="500"><a class="nav-link" href="#other">External&nbspContent</a></li>';
  document.getElementById("chevron-down").removeAttribute("onclick");
  AOS.refresh();
}