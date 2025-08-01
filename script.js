
document.addEventListener("DOMContentLoaded", function() {
  const txt = "Mahdi Ghaznawy – Cyber Sentinel";
  let i = 0;
  function type() {
    if (i < txt.length) {
      document.querySelector(".typewriter").textContent += txt.charAt(i);
      i++;
      setTimeout(type, 70);
    }
  }
  type();
});
