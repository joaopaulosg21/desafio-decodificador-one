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

    OutputBox(text);
}

function descriptografar() {
    removeImage()
    let text = input.value;

    text = text.replaceAll(keys['e'], 'e')
        .replaceAll(keys['i'], 'i')
        .replaceAll(keys['a'], 'a')
        .replaceAll(keys['o'], 'o')
        .replaceAll(keys['u'], 'u');

    OutputBox(text);
}

function removeImage() {
    let outputImage = document.getElementById('img-output');
    let outputText = document.getElementById('output-text');
    outputImage.style.display = 'none';
    outputText.style.display = 'none';
}

function OutputBox(text) {
    let textBox = document.getElementById('textResult');
    textBox.style.display = 'block';
    textBox.style.backgroundColor = 'white';
    textBox.innerHTML = text;
}