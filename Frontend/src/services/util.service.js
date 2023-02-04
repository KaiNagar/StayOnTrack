export const utilService = {
    saveToStorage,
    loadFromStorage,
    makeId,
}

function saveToStorage(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
}

function loadFromStorage(key) {
    var val = localStorage.getItem(key);
    return JSON.parse(val);
}

function makeId() {
    let text = '';
    const possible =
        'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i = 0; i < possible.length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}