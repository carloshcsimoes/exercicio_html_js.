document.getElementById('meuFormulario').addEventListener('submit', function(event) {
    event.preventDefault();

    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    const mensagem = document.getElementById('mensagem');

    if (numeroB > numeroA) {
        mensagem.textContent = "Formulário válido: O número B é maior que o número A.";
        mensagem.style.color = "green";
    } else {
        mensagem.textContent = "Formulário inválido: O número B deve ser maior que o número A.";
        mensagem.style.color = "red";
    }
});
