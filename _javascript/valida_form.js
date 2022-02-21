
//Validação nome com REGEX
function validar_nome() {
  let value = document.getElementById("nome").value;
  let re = /^[a-zA-ZéúíóáÉÚÍÓÁèùìòàçÇÈÙÌÒÀõãñÕÃÑêûîôâÊÛÎÔÂëÿüïöäËYÜÏÖÄ\-\ \s]+$/;
  if (!re.test(value)) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Somente caracteres alfabéticos Inválido');
    document.form.nome.focus();
    return false;
  }
  return true;
}

//Validação com REGEX
function validar_cpf() {
  let value = document.getElementById("cpf").value;
  let re = /^(([0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2})|([0-9]{11}))$/;
  if (!re.test(value)) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Conteúdo de CPF Inválido');
    document.form.cpf.focus();
    return false;
  }
  return true;
}
//Validação com JSON
//Confere se CPF digitado é igual ao válido do JSON
function confere_cpf()
{
  let cpf_json = '{"cpf1": "123.456.788-90","cpf2":"12345678890"}';
  let v_cpf = JSON.parse(cpf_json);
  if(v_cpf.cpf1 == document.form.cpf.value || v_cpf.cpf2 == document.form.cpf.value)
    return true;
  else
    {
    alert("CPF não confere com JSON!");
    document.form.cpf.focus();
    return false;
    }
}

//Validação com JQUERY
function validar_cpf() {
  let value = document.getElementById("cpf").value;
 if (value == "" || value == null) {
     //campo inválido, retorna false para o formulário não ser submetido
    alert('CPF não informado');
    document.form.cpf.focus();
    return false;
  }
 return true;
}

//Validação com JQUERY
function validar_celular() {
  let celular = document.getElementById("cel").value;
  if (celular == "" || celular == null) {
    // campo inválido, retorna false para o formulário não ser submetido
    alert('Conteúdo numérico não informado');
    document.form.cel.focus();
    return false;
  }
  return true;
}

// Validar se campo está vazio com javscript
function verificar_campos(){
  let nome = document.getElementById("nome");
  if (validar(nome, "" , "nome") == false) 
  return false;

  let cpf = document.getElementById("cpf");
  if (validar(cpf, "" , "cpf") == false) 
  return false;

  let email = document.getElementById("email");
  if (validar(email, "" , "email") == false) 
  return false;

  let cel = document.getElementById("cel");
  if (validar(cel, "" , "cel") == false) 
  return false;

  let nascimento = document.getElementById("nascimento");
  if (validar(nascimento, "" , "nascimento") == false) 
  return false;

  let salario = document.getElementById("salario");
  if (validar(salario, "" , "0,00") == false) 
  return false;

  let times = document.getElementById("times").selectedIndex;
  if(times == "0")
  {
    alert('Conteúdo times não informado !');
    document.getElementById("times").focus();
    return false
  }

  let login = document.getElementById("login");
  if(validar(login, "" , "login") == false) 
  return false;

  let senha = document.getElementById("senha");
  if(validar(senha, "" , "senha") == false) 
  return false;

  return true;
}

// Confere login com JSON
function confere_login()
{
  let login_json = '{"login": "Usuario"}';
 // JSON
  let v_login = JSON.parse(login_json);

//document.namedoform.namedacampo.value
//document.form.login.value
//document.getElementById("login").value
  if(v_login.login == document.form.login.value)
    return true;
  else
    {
      alert("Login não confere com JSON!");
      document.form.login.focus();

      return false;
    }
}

// confere senha com JSON
function confere_senha()
{

  let v_senha = JSON.parse('{"senha": "Abc$123"}');
  if(v_senha.senha == document.form.senha.value )
    return true
  else
    {
    alert("Senha não confere com JSON!")
    document.form.senha.focus()
    return false
    }
}

// Função auxiliar para validar campos sem precisar criar um if para todos!
function validar(campo, valor_inicial, nome_campo)
{
    if(campo.value == "" || campo.value == null || valor_inicial == campo.value)
    {
      //campo inválido, retorna false para o formulário não ser submetido
      alert('conteúdo '+ nome_campo + ' não informado');
      campo.focus();
      return false;
    }
    return true
}

//valida todos os campos
function validar_tudo() {
  // se um deles nao for inválido, retorna false
  alert("Validado !");
  if(verificar_campos() && validar_nome() && confere_login() && confere_senha())
  {
    document.getElementsByName("butassin").disabled = false;
    return true;
  }
}

//Temporalizador da página
setInterval(contartempo, 1000);

var contador=1;
function contartempo(){ 
	document.getElementById("tempo").innerHTML = contador;
	contador++;
}
