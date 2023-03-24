log = console.log;

link = document.getElementById("link_to_pdf");
log(link);
iframe = document.getElementById("my__iframe");
log(iframe);

link.addEventListener("click", f1);
function f1() {
  iframe.classList.toggle("show");
}
