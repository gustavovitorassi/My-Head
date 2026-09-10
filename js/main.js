const imagem = document.querySelector('#img');
const movimentoReduzido = window.matchMedia('(prefers-reduced-motion: reduce)');

if (imagem && !movimentoReduzido.matches) {
    gsap.to(imagem, {
        duration: 10,
        rotation: 360,
        ease: 'none',
        repeat: -1
    });
}
