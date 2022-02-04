const objStyle  = {
    'border-radius': '',
    'font-size': '',
    'padding-left': '',
    'padding-right': '',
    'padding-top': '',
    'padding-bottom': '',
    'opacity': '',
}

document.addEventListener('input', (event) => {
    const mainBtn = document.getElementById('mainBtn');

    mainBtn.style.cssText += `${event.target.id}: ${event.target.value}px`;
    objStyle[event.target.id] = event.target.value+'px';

    if(event.target.id === 'padding-left') {
        mainBtn.style.cssText += `${event.target.id}: ${event.target.value}px`;
        mainBtn.style.cssText += `padding-right: ${event.target.value}px`;
        objStyle[event.target.id] = event.target.value+'px';
        objStyle['padding-right'] = event.target.value+'px';
    }

    if(event.target.id === 'padding-top') {
        mainBtn.style.cssText += `${event.target.id}: ${event.target.value}px`;
        mainBtn.style.cssText += `padding-bottom: ${event.target.value}px`;
        objStyle[event.target.id] = event.target.value+'px';
        objStyle['padding-bottom'] = event.target.value+'px';
    }

    if(event.target.id === 'opacity') {
        mainBtn.style.cssText += `${event.target.id}: ${event.target.value}`;
        objStyle[event.target.id] = event.target.value;
    }

    showCSS(objStyle);
})



function showCSS(objStyle) {
    console.log(objStyle);
    const data = document.getElementById('css-data');
    data.innerHTML = '';
    Object.keys(objStyle).forEach(css => {
        data.innerHTML += `${css}: ${objStyle[css]};</br>`
    })
}