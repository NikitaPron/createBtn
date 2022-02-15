const infoShadow = {
    'shadow-color': 'black',
    'blur-radius': '13px',
    'spread-radius': '2px',
    'offset-x': '2px',
    'offset-y': '2px',
}

export function setBlurRadius(px, btn) {
    infoShadow['blur-radius'] = px+'px';
    return setShadowToBtn(btn);
}

export function setSpreadRadius(px, btn) {
    infoShadow['spread-radius'] = px+'px';
    return setShadowToBtn(btn);
}

export function setOffsetY(px, btn) {
    infoShadow['offset-x'] = px+'px';
    return setShadowToBtn(btn);
}

export function setOffsetX(px, btn) {
    infoShadow['offset-y'] = px+'px';
    return setShadowToBtn(btn);
}

export function setColorShadow(color, btn) {
    infoShadow['shadow-color'] = color;
    return setShadowToBtn(btn);
}

export function setShadowToBtn(btn) {
    const newShadow = `${infoShadow['offset-x']} ${infoShadow['offset-y']} ${infoShadow['blur-radius']} ${infoShadow['spread-radius']} ${infoShadow['shadow-color']}`;
    btn.style.boxShadow = newShadow;
    return newShadow;
}