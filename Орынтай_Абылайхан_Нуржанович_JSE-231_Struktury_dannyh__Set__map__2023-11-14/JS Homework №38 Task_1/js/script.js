function caesarCipher(text, shift) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';

    const shiftAlphabet = (str) => {
        return str.slice(shift) + str.slice(0, shift);
    };

    const shiftedUppercase = shiftAlphabet(alphabet);
    const shiftedLowercase = shiftAlphabet(lowercaseAlphabet);

    const map = new Map();

    for (let i = 0; i < 26; i++) {
        map.set(alphabet[i], shiftedUppercase[i]);
        map.set(lowercaseAlphabet[i], shiftedLowercase[i]);
    }

    let result = '';
    for (let i = 0; i < text.length; i++) {
        const char = text[i];
        result += map.has(char) ? map.get(char) : char;
    }
    return result;
}

function applyCipher() {
    const text = document.getElementById('text').value;
    const shift = parseInt(document.getElementById('shift').value);
    const operation = document.getElementById('operation').value;

    let result = '';

    if (operation === 'encrypt') {
        result = caesarCipher(text, shift);
    } else if (operation === 'decrypt') {
        result = caesarCipher(text, 26 - shift); 
    }

    document.getElementById('result').value = result;
}