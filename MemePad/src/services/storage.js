// LOCAL STORAGE
function getItem(key, defaultValue) {
    let value = localStorage.getItem(key);
    if (value) {
        value = JSON.parse(value);
        return value;
    }
    return defaultValue;
}

function setItem(key, value) {
    value = JSON.stringify(value);
    localStorage.setItem(key, value);
}

function removeItem(key) {
    localStorage.removeItem(key);
}

export const Storage = { getItem, setItem, removeItem };

// SESSION STORAGE
function getSessionItem(key, defaultValue) {
    let value = sessionStorage.getItem(key);
    if (value) {
        value = JSON.parse(value);
        return value;
    }
    return defaultValue;
}

function setSessionItem(key, value) {
    value = JSON.stringify(value);
    sessionStorage.setItem(key, value);
}

function removeSessionItem(key) {
    sessionStorage.removeItem(key);
}

export const SessionStorage = { getSessionItem, setSessionItem, removeSessionItem };
