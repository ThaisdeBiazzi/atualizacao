function verificarCampo(){

    //PEGANDO O VALOR DO SELECT
    let select = document.querySelector("select").value

    if(select == 'desabilitado') {

        document.querySelector('input').disabled = true
        
        let msg = document.getElementById('mensagem')

        msg.innerHTML = "DESABILITADO"

        msg.style.backgroundColor = "red"
        msg.style.color = "white"

    } else {

        document.querySelector('input').disabled = false

        let msg = document.getElementById('mensagem')

        msg.innerText = ""
        

    }

}