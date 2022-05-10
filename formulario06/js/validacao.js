let inputNome = document.querySelector(".nomeClient");
inputNome.addEventListener("keydown", function (e) {
  if (e.key > "0" && e.key < "9") {
    e.preventDefault();
  }
});


let value_cpf = document.querySelector('#campo_cpf');
value_cpf.addEventListener("keydown",
  function (e) {
    if (e.key > "a" && e.key < "z") {
      e.preventDefault();
    }
  }
);


value_cpf.addEventListener("blur",
  function (e) {
    //Remove tudo o que não é dígito
    let validar_cpf = this.value.replace(/\D/g, "");

    //verificação da quantidade números
    if (validar_cpf.length == 11) {
      validacao_receita(validar_cpf);
      //formatação final
      cpf_final = validar_cpf.replace(/(\d{3})(\d)/, "$1.$2");
      cpf_final = cpf_final.replace(/(\d{3})(\d)/, "$1.$2");
      cpf_final = cpf_final.replace(/(\d{3})(\d{1,2})$/, "$1-$2");
      document.getElementById('campo_cpf').value = cpf_final;
    } else {
      alert("CPF Inválido! É esperado 11 dígitos numéricos.")
    }
  }
);

// Celular
let campo_celular = document.querySelector('#campo_celular');

campo_celular.addEventListener("blur", function (e) {
  //Remove tudo o que não é dígito
  let celular = this.value.replace(/\D/g, "");

  if (celular.length == 11) {
    celular = celular.replace(/^(\d{2})(\d)/g, "($1) $2");
    resultado_celular = celular.replace(/(\d)(\d{4})$/, "$1-$2");
    document.getElementById('campo_celular').value = resultado_celular;
  } else {
    alert("Digite 11 números.");
  }
})
// Telefone Fixo
document.querySelector('#campo_fixo').addEventListener("blur", function (e) {
  let telefone = this.value.replace(/\D/g, "");
  if (telefone.length == 10) {
    telefone = telefone.replace(/^(\d{2})(\d)/g, "($1) $2");
    resultado_telefone = telefone.replace(/(\d)(\d{4})$/, "$1-$2");
    document.getElementById('campo_fixo').value = resultado_telefone;
  } else {
    alert("Digite 10 números.");
  }
})


function validacao_receita(validar_cpf) {
  // verificação de CPF valido
  var soma;
  var resto;

  soma = 0;
  for (i = 1; i <= 9; i++) soma = soma + parseInt(validar_cpf.substring(i - 1, i)) * (11 - i);
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(validar_cpf.substring(9, 10))) return alert("CPF Inválido!");;

  soma = 0;
  for (i = 1; i <= 10; i++) soma = soma + parseInt(validar_cpf.substring(i - 1, i)) * (12 - i);
  resto = (soma * 10) % 11;

  if ((resto == 10) || (resto == 11)) resto = 0;
  if (resto != parseInt(validar_cpf.substring(10, 11))) return alert("CPF Inválido!");;
}