 $(function() {
    $("#exampleInputTelefone1").mask('(00) 00000-0000');
    $("#exampleInputCpf1").mask('000.000.000-00');
});

function validar(){
    let ret = true;
    let msgToast = document.getElementById('msgToast')
    msgToast.innerHTML = "";

    let form = document.forms["dataForm"];

    if (form.exampleInputNome1.value.trim() == "") {
        msgToast.innerHTML = "Favor preencher o campo nome <br>";
        form.exampleInputNome1.focus();
        ret = false;
    }

    if (form.exampleInputCpf1.value.trim() == "") {
        msgToast.innerHTML = msgToast.innerHTML +  "Favor preencher o campo CPF <br>";
        form.exampleInputCpf1.focus();
        ret = false;
    }

     if (form.exampleInputTelefone1.value.trim() == ""){
        msgToast.innerHTML = msgToast.innerHTML + "Favor preencher o campo telefone";
        form.exampleInputTelefone1.focus();
        ret = false;
    }     

    if (!ret){
        let toastLive = document.getElementById('liveToast')
        let toast = new bootstrap.Toast(toastLive)
        toast.show()
    }

    return ret;
}