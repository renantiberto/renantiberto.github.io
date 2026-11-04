// Seletor Contato / Currículo: a pílula branca desliza até o item com hover ou foco
// e volta para "Entre em contato" quando o ponteiro ou o foco saem do grupo.
const seg = document.querySelector('[data-seg]');

if (seg) {
    const items = [...seg.querySelectorAll('.seg-item')];
    const home = items[0];
    let current = home;

    const moveTo = (item) => {
        current = item;
        seg.style.setProperty('--seg-x', `${item.offsetLeft}px`);
        seg.style.setProperty('--seg-w', `${item.offsetWidth}px`);
        items.forEach((el) => el.classList.toggle('is-active', el === item));
    };

    items.forEach((item) => {
        item.addEventListener('pointerenter', () => moveTo(item));
        item.addEventListener('focus', () => moveTo(item));
    });

    seg.addEventListener('pointerleave', () => {
        if (!seg.contains(document.activeElement)) moveTo(home);
    });

    seg.addEventListener('focusout', (e) => {
        if (!seg.contains(e.relatedTarget)) moveTo(home);
    });

    // Posiciona sem animar e só depois liga a transição
    moveTo(home);
    requestAnimationFrame(() => seg.classList.add('is-ready'));

    // Recalcula quando a fonte carrega ou a largura muda
    new ResizeObserver(() => moveTo(current)).observe(seg);
}
