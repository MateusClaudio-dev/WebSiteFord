
//class contato

class contato {


constructor(nome, sobrenome, email, cpf, telefone, meioContato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.meioContato = meioContato;
    }

}

function Post(form) {
event.preventDefault();
  let data = new contato(
        //O form elemento c/ name = nome pegue o valor 
            form.elements.namedItem("nome").value,
            form.elements.namedItem("sobrenome").value, 
            form.elements.namedItem("email").value, 
            form.elements.namedItem("cpf").value, 
            form.elements.namedItem("telefone").value, 
            form.elements.namedItem("contato").value);

    if (data.nome !== "") {
       alert('Obrigado sr(a) ' + data.nome + ' ' + data.sobrenome + ', os seus dados foram encaminhados com sucesso!');
    }

    console.log(data)
    form.reset();
    
}



