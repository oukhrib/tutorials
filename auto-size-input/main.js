document.querySelectorAll('.auto-resize')
        .forEach(el=>{
    const text = el.querySelector('span');
    const input = el.querySelector('input');
    text.innerText = input.value.replace(/ /g, '.');
    input.addEventListener('input',e=>{
        text.innerText =   e.target.value
                            .replace(/ /g, '.');
        input.style.width = text.offsetWidth + 'px';
    })
})