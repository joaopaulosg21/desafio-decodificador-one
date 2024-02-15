let input = document.getElementById('input');
let textBox = document.getElementById('textResult');

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
    let button = document.getElementById('copy-button');

    textBox.style.display = 'block';
    textBox.style.backgroundColor = 'white';
    textBox.innerHTML = text;
    button.style.display = 'block';
}

function copyText() {
    let textBox = document.getElementById('textResult');
    textBox.select();
    textBox.setSelectionRange(0,99999);
    navigator.clipboard.writeText(textBox.value).then(() => {
        console.log("Texto copiado")
    },() => {
        alert("Erro ao copiar texto");
    });
    
    alert('Texto copiado com sucesso: ' + textBox.value);
}