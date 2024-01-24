let input = document.getElementById('input');

const keys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function criptografar() {
    removeImage();
    let text = input.value;

    text = text.replaceAll('e', keys['e'])
        .replaceAll('i', keys['i'])
        .replaceAll('a', keys['a'])
        .replaceAll('o', keys['o'])
        .replaceAll('u', keys['u']);

    createTextBox(text);
}

function descriptografar() {
    removeImage()
    let text = input.value;

    text = text.replaceAll(keys['e'], 'e')
        .replaceAll(keys['i'], 'i')
        .replaceAll(keys['a'], 'a')
        .replaceAll(keys['o'], 'o')
        .replaceAll(keys['u'], 'u');

    createTextBox(text);
}

function removeImage() {
    let outputImage = document.getElementById('img-output');
    outputImage.style.display = 'none';
}

function createTextBox(text) {
    let textBox = document.getElementById('textResult');
    textBox.style.display = 'block';
    textBox.innerHTML = text;
}