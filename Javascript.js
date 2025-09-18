function OpenB(){
    document.getElementsByClassName("sidebar")[0].style.left = "350px";
}

function closeMenu() {
    document.getElementsByClassName("sidebar")[0].style.left = "-350px";
}

function Display(){
    document.getElementsByClassName("line")[0].style.display="block";
    // document.getElementsByClassName("l")[0].style.backgroundColor="red";
}
function Display1(){
    document.getElementsByClassName("line")[1].style.display="block";
    // document.getElementsByClassName("w")[0].style.backgroundColor="red";
}
function Display2(){
    document.getElementsByClassName("line1")[0].style.display="block";
    // document.getElementsByClassName("d")[0].style.backgroundColor="red";
}
function openCert(src) {
  document.getElementById("certModal").style.display = "block";
  document.getElementById("certImage").src = src;
}
function closeCert() {
  document.getElementById("certModal").style.display = "none";
}
async function downloadResume() {
    const response = await fetch("./GanisettiLakshmiVisalakshiResume.pdf");
    const blob = await response.blob();
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "Lakshmi_Resume.pdf"; // force download
    link.click();
    URL.revokeObjectURL(link.href);
}
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(
    "section, .h, .skillset, .projects, .cert-container, .contact"
  );

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    },
    {
      root: null,
      rootMargin: "0px 0px -10% 0px", // ensures trigger earlier on mobile
      threshold: 0.05 // lower threshold works better on small screens
    }
  );

  sections.forEach(sec => observer.observe(sec));

  // 👇 Fallback: if section is already in viewport on load
  sections.forEach(sec => {
    if (sec.getBoundingClientRect().top < window.innerHeight) {
      sec.classList.add("visible");
    }
  });
});
