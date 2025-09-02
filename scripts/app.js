const btn = document.getElementById('sub');
const getInput = document.getElementById('emailInput');

//criação do evento de click para meu botão de submit e seta o comporamento padrao como vazio
btn.addEventListener('click', function (event) {
    event.preventDefault();
    validatorInput();
});

// função com estrutura base dos elementos a serem realizados caso o validador não atenda os requisitos
function setupValidator() {
    //verifica se não existo o elemento
    if (!document.querySelector('.mensageError')) {
        const errorMensage = document.createElement('span');
        const errorIcon = document.createElement('span');

        errorMensage.className = 'mensageError';
        errorIcon.className = 'iconError';
        errorMensage.textContent = 'Please provide a valid email'
        errorIcon.textContent = '!'

        // Insere o ícone antes do input
        getInput.insertAdjacentElement('beforebegin', errorIcon);

        // Insere a mensagem depois do input
        getInput.insertAdjacentElement('afterend', errorMensage);
    }

}

//função para validação se o campo email esta preenchido
function validatorInput() {
// constatntes para verificação de email se é valido
    const email = getInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    //condicional para adição ou validação do input fornecido
    if (email === '') {
        getInput.classList.add('invalid');
        getInput.parentElement.classList.add('invalid');
        setupValidator();
    } else if (!emailRegex.test(email)) {
        getInput.classList.add('invalid');
        getInput.parentElement.classList.add('invalid');
        alert('email invalido por gentileza certifique que esteja preenchido corretamente')
    } else {
        getInput.classList.remove('invalid');
        getInput.parentElement.classList.remove('invalid');
        document.querySelector('.mensageError')?.remove();
        document.querySelector('.iconError')?.remove();
    }
}
