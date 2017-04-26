

function go() {

  var iframe = document.getElementById('iframe');
  iframe.addEventListener('load', onload);
  iframe.src='about:blank'
  iframe.contentWindow.document.innerHTML = '';
}


function onload() {
  var iframe = document.getElementById('iframe');
  iframe.removeEventListener('load', onload);
  iframe.src='child.html'

  setTimeout(go, 1000);
}