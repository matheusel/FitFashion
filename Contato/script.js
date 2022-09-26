function enviar() {
    let caixinhas = document.querySelectorAll('.caixinhas');
    console.log(caixinhas);
    document.getElementById('mensagem').value = '';

    caixinhas.forEach(element => {
        element.value = ''
    });
    alert("Sua mensagem foi enviada! Agradecemos o contato.")

}