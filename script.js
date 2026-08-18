// Botão "voltar ao topo": aparece depois de rolar a página e devolve o foco
// pra marca no header, pra quem navega por teclado/leitor de tela continuar
// a partir do topo em vez de perder a posição.
(function () {
  var botao = document.getElementById('voltar-topo');
  if (!botao) return;

  var limite = 480;

  function atualizarVisibilidade() {
    botao.hidden = window.scrollY <= limite;
  }

  atualizarVisibilidade();
  window.addEventListener('scroll', atualizarVisibilidade, { passive: true });

  botao.addEventListener('click', function () {
    var reduzirMovimento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reduzirMovimento ? 'auto' : 'smooth' });

    var marca = document.getElementById('topo-marca');
    if (marca) marca.focus();
  });
})();
