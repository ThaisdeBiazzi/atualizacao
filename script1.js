function enviarNome(){
    //PEGANDO O INPUT
    let input = document.querySelector('input')
    //PEGANDOO INUT E COLOCANDO DENTRO DO NOME
    let nome= input.value
    //LIMPANDO O INPUT
    input.value = ""
    //CRIANDO O ELEMENTO P
    let nomeUsuario = document.createElement('p')
    //PEGANDO O ELEMENTO P E COLOCANDO UM TEXTO NA VARIAVEL NOME
    nomeUsuario.innerText = nome

    //MOSTRANDO OS NOMES ARMAZENADOS NA TELA
    document.body.appendChild(nomeUsuario)
}