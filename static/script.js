// Fecha o modal quando o usuário clica fora do conteúdo do modal
window.onclick = function(event) {
    var modal = document.getElementById('myModal');
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  