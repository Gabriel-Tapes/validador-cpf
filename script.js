const validaCPF = (cpf) => {
    if (cpf.length !== 11 || isNaN(cpf)) {
        return false
    } else {
        let numeros = cpf.substring(0, 9);
        let digitosVerificadores = cpf.substring(9);
        let soma = 0;

        for (let i = 10; i > 1; i--) {
            soma += numeros.charAt(10 - i) * i;
        }
        console.log(soma);
        let resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

        if (resultado != digitosVerificadores.charAt(0)) {
            return false
        } else {
            numeros = cpf.substring(0, 10);
            soma = 0;
             
            for (let k = 11; k > 1; k--) {
                soma += numeros.charAt(11 - k) * k;
            }

            console.log(soma);
            resultado = (soma % 11) < 2 ? 0 : 11 - (soma % 11);

            return true ? resultado == digitosVerificadores.charAt(1) : false
        }
    }
}

const validar = () => {
    document.getElementById("success").style.display = "none";
    document.getElementById("error").style.display = "none";

    let cpf = document.getElementById("cpf-digitado").value;

    let resultadoValidacao = validaCPF(cpf);

    if (resultadoValidacao) {
         document.getElementById("success").style.display = "block";
    } else {
        document.getElementById("error").style.display = "block"
    }
}