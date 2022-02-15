function toggleVisibilityChildren(element) {
    const arr = Array.from(element.children);
    if(arr[0].display !== 'none') {
        arr.forEach(elem => elem.style.display = 'none');
    } else {
        arr.forEach(elem => elem.style.display = 'block');
    }
}