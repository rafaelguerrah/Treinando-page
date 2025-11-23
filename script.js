
// Menu mobile simples: abre links como overlay (mostra/oculta)
const menuBtn = document.getElementById('menuBtn');
const header = document.querySelector('header');
const links = document.querySelector('.links');
menuBtn?.addEventListener('click', () => {
    if (getComputedStyle(links).display === 'none') {
        links.style.display = 'flex';
        links.style.flexDirection = 'column';
        links.style.position = 'absolute';
        links.style.top = '64px';
        links.style.right = '20px';
        links.style.background = 'rgba(20,20,22,.95)';
        links.style.padding = '12px';
        links.style.borderRadius = '12px';
        links.style.border = '1px solid var(--stroke)';
        links.style.boxShadow = 'var(--shadow)';
    } else {
        links.style.display = 'none';
    }
});

// Animação reveal ao rolar
const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('in'); }
    });
}, { threshold: .16 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Validação simples + abrir WhatsApp com dados do formulário
const form = document.getElementById('formAgendar');
form?.addEventListener('submit', (ev) => {
    ev.preventDefault();
    const nome = document.getElementById('nome').value.trim();
    const tel = document.getElementById('telefone').value.trim();
    const email = document.getElementById('email').value.trim();
    const servico = document.getElementById('servico').value;
    const msg = document.getElementById('mensagem').value.trim();

    if (!nome || !tel || !servico) {
        alert('Por favor, preencha nome, telefone e serviço.');
        return;
    }

    const texto = encodeURIComponent(
        `Oi! Meu nome é ${nome}.
Telefone: ${tel}${email ? ` | E-mail: ${email}` : ``}
Quero agendar: ${servico}
Mensagem: ${msg || '—'}`
    );

    // Substitua pelo seu número com DDI 55 e DDD (ex: 5579999999999)
    const numero = '5579998804382';
    window.open(`https://wa.me/${numero}?text=${texto}`, '_blank');
});

// Ajuste rápido do botão do hero para seu número
const cta = document.getElementById('ctaWhats');
cta?.addEventListener('click', (e) => {
    // Opcional: se quiser sempre atualizar com o número do formulário, comente/edite aqui.
});
