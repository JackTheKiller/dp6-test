// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
})(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-12345-6', 'auto');
ga('send', 'pageview');


// vanilla js version

// todas as paginas

document.querySelector('.menu-lista-contato').addEventListener('click', (e) => {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

document.querySelector('.menu-lista-download').addEventListener('click', (e) => {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
});

// analise.html

document.querySelectorAll('.cards-montadoras .card').forEach((el) => {
    el.addEventListener('click', (e) => {
        ga('send', 'event', 'analise', 'ver_mais', el.dataset.name);
    });
});

// sobre.html

document.querySelectorAll('form.contato input').forEach((el) => {
    el.addEventListener('change', (e) => {
        ga('send', 'event', 'contato', el.id, 'preencheu');
    });
});

const formContato = document.querySelector('form.contato');
if (formContato) {
    formContato.addEventListener('submit', (e) => {
        ga('send', 'event', 'contato', 'enviado', 'enviado');
    });
}


// jquery version
/*
// todas as paginas

$('.menu-lista-contato').on('click', (e) => {
    ga('send', 'event', 'menu', 'entre_em_contato', 'link_externo');
});

$('.menu-lista-download').on('click', (e) => {
    ga('send', 'event', 'menu', 'download_pdf', 'download_pdf');
});

// analise.html

$('.cards-montadoras .card').on('click', (e) => {
    ga('send', 'event', 'analise', 'ver_mais', e.currentTarget.dataset.name);
});

// sobre.html

$('form.contato input').on('change', (e) => {
    ga('send', 'event', 'contato', e.currentTarget.id, 'preencheu');
});

$('form.contato').on('submit', (e) => {
    ga('send', 'event', 'contato', 'enviado', 'enviado');
});
*/