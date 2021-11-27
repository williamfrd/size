function mascara_cpf() {
    var cpf = document.getElementById('cCPF')
    if(cpf.value.length == 3 || cpf.value.length == 7){
        cpf.value += "."
    } else if(cpf.value.length == 11){
        cpf.value += "-"
    }
}

function mascara_telefone() {
    var tel = document.getElementById('cTel')
    if(tel.value.length == 0){
        tel.value += "("
    }
    if(tel.value.length == 3){
        tel.value += ")"
    }if(tel.value.length == 9){
        tel.value += "-"
    }
}

function mascara_CEP() {
    var cep = document.getElementById('cCEP')
    if(cep.value.length == 5){
        cep.value += "-"
    }
}
