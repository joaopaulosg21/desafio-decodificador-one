let input = document.getElementById('input');
let output = document.getElementById('output');

const keys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

function criptografar() {
    let text = input.value;

    text = text.replaceAll('e', keys['e'])
        .replaceAll('i', keys['i'])
        .replaceAll('a', keys['a'])
        .replaceAll('o', keys['o'])
        .replaceAll('u', keys['u']);

    output.value = text;
}

function descriptografar() {
    let text = input.value;

    text = text.replaceAll(keys['e'], 'e')
        .replaceAll(keys['i'], 'i')
        .replaceAll(keys['a'], 'a')
        .replaceAll(keys['o'], 'o')
        .replaceAll(keys['u'], 'u');

    output.value = text;
}