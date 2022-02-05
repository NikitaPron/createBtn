export function setBgColor(btn, color) {
    btn.style.backgroundColor = color;
}

//text
export function setTextColor(btn, color) {
    btn.style.color = color;
}

export function setTextSize(btn, size) {
    btn.style.fontSize = size+'px';
}

export function setText(btn, text) {
    btn.textContent = text;
}
//text

//padding
export function setPadding(btn, padding, direction) {
    btn.style.cssText += `${direction}: ${padding}px`;
}
//padding

// border
export function setBorderRadius(btn, radius) {
    btn.style.borderRadius = radius+'px';
}

export function setBorderColor(btn, color) {
    btn.style.borderColor = color;
}

export function setBorderWidth(btn, width) {
    btn.style.borderWidth = width+'px';
}
// border
export function setOpacity(btn, opacity) {
    btn.style.opacity = opacity;
}




// HOVERS
let bgColor;
let hoverColor;
export function setHoverColor(btn, color) {
    hoverColor = color;
    bgColor = btn.style.backgroundColor;

    if(!bgColor) {
        btn.addEventListener('mouseover', (event) => {
            event.target.style.background = hoverColor;
        })
        
        btn.addEventListener('mouseout', (event) => {
            event.target.style.background = bgColor;
        })
    }
}

// HOVERS

