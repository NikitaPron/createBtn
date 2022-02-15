import * as SETTERS from './setters.js';
import * as SHADOW from './shadow.js';
const mainBtn = document.querySelector('#mainBtn');

const objStyle  = {
    'font-family': 'Georgia, serif',
    'border-radius': '0px',
    'border-width': '1px',
    'border-color': 'black',
    'font-size': '50px',
    'padding-left': '30px',
    'padding-right': '30px',
    'padding-top': '10px',
    'padding-bottom': '10px',
    'opacity': '1',
    'background-color': 'red',
    'color': 'black',
    'box-shadow': SHADOW.setShadowToBtn(mainBtn),
    'hoverColor': 'blue',
}

document.addEventListener('input', (event) => {
    const mainBtn = document.getElementById('mainBtn');

    if(event.target.id === 'font-size') {
        SETTERS.setTextSize(mainBtn, event.target.value);
        objStyle[event.target.id] = event.target.value+'px';
    }

    if(event.target.id === 'border-radius') {
        SETTERS.setBorderRadius(mainBtn, event.target.value);
        objStyle[event.target.id] = event.target.value+'px';
    }

    if(event.target.id === 'border-width') {
        SETTERS.setBorderWidth(mainBtn, event.target.value);
        objStyle[event.target.id] = event.target.value+'px';
    }

    if(event.target.id === 'border-color') {
        SETTERS.setBorderColor(mainBtn, event.target.value);
        objStyle[event.target.id] = event.target.value;
    }

    if(event.target.id === 'mainBgColor') {
        document.querySelector('#app').style.background = event.target.value;
        return;
    }

    if(event.target.id === 'textInBtn') {
        mainBtn.textContent = event.target.value;
        return;
    }

    if(event.target.id.startsWith('padding')) {
        SETTERS.setPadding(mainBtn, event.target.value, event.target.id);
        objStyle[event.target.id] = event.target.value+'px';
    }

    if(event.target.id === 'opacity') {
        SETTERS.setOpacity(mainBtn, event.target.value);
        objStyle[event.target.id] = event.target.value;
    }

    if(event.target.id === 'background-color' || event.target.id === 'color') {
        mainBtn.style.cssText += `${event.target.id}: ${event.target.value}`;
        objStyle[event.target.id] = event.target.value;
    }

    if(event.target.id === 'hoverColor') {
        objStyle[event.target.id] = event.target.value;
    }

    if(event.target.id === 'font-family') {
        mainBtn.style.fontFamily = event.target.value;
        objStyle[event.target.id] = event.target.value;
    }

    // SHADOW

    if(event.target.id === 'shadow-color') {
        objStyle['box-shadow'] = SHADOW.setColorShadow(event.target.value, mainBtn);
    }
    if(event.target.id === 'blur-radius') {
        objStyle['box-shadow'] = SHADOW.setBlurRadius(event.target.value, mainBtn);
    }
    if(event.target.id === 'spread-radius') {
        objStyle['box-shadow'] = SHADOW.setSpreadRadius(event.target.value, mainBtn);
    }
    if(event.target.id === 'offset-x') {
        objStyle['box-shadow'] = SHADOW.setOffsetX(event.target.value, mainBtn);
    }
    if(event.target.id === 'offset-y') {
        objStyle['box-shadow'] = SHADOW.setOffsetY(event.target.value, mainBtn);
    }

    // SHADOW
    showCSS(objStyle);
})



function showCSS(objStyle) {
    const data = document.getElementById('css-data');
    data.innerHTML = 'button {</br>';
    Object.keys(objStyle).forEach(css => {
        if(css !== 'hoverColor') {
            data.innerHTML += `&nbsp;&nbsp;&nbsp;&nbsp;${css}: ${objStyle[css]};</br>`
        } else {
            data.innerHTML += `}</br>button:hover {</br>
                &nbsp;&nbsp;&nbsp;&nbsp;background-color: ${objStyle[css]};</br>
            }`
        }
    })
}

showCSS(objStyle);


// FONTS
const fonts = [
'Georgia, serif',
'"Palatino Linotype", "Book Antiqua", Palatino, serif',
'"Times New Roman", Times, serif',
'Arial, Helvetica, sans-serif',
'"Arial Black", Gadget, sans-serif',
'"Comic Sans MS", cursive, sans-serif',
'Impact, Charcoal, sans-serif',
'"Lucida Sans Unicode", "Lucida Grande", sans-serif',
'Tahoma, Geneva, sans-serif',
'"Trebuchet MS", Helvetica, sans-serif',
'Verdana, Geneva, sans-serif',
];

fonts.forEach(font => {
    document.querySelector('#font-family').add(new Option(font, font));
})
// FONTS


// HOVERS
    mainBtn.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = objStyle.hoverColor;
    })
        
    mainBtn.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = objStyle['background-color'];
    })
// HOVERS



//COPYFUNC
const copyBtn = document.querySelector('.css-data__btnCopy');
copyBtn.addEventListener('click', (event) => {
    const CSS = document.querySelector('#css-data').textContent;
    navigator.clipboard.writeText(CSS);
})
//COPYFUNC
