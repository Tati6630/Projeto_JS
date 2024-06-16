let nomes=[]; let datas=[]; let idades=[]; let cidades=[];
let estados=['AC','AL','AP','AM','BA','CE','DF','ES','GO','MA','MS','MT','MG','PA','PB','PR','PE','PI','RJ','RN','RS',
            'RO','RR','SP','SC','SE','TO'];
let cpf=[]; let senhas=[]; let confirmaSenhas=[];

function cadastro(){
    let nome=document.getElementById('nome').value; 
    let nascimento=document.getElementById('nascimento').value;
    let idade=document.getElementById('idade').value;
    let cidade=document.getElementById('cidade').value;
    let estado=document.getElementById('estado').value;

    if (nome!= 'string' || !nome){
        document.getElementById('container').innerHTML = 'Digite um NOME válido';
        return;
    }
    
    if(nascimento!= 'string' || !nascimento){
        document.getElementById('container').innerHTML = 'Digite a data no formato **/**/**** e não deixe o campo em branco!';  
        return;
    }
    
    if(idade<=0 || !idade || idade=='string'){
        document.getElementById('container').innerHTML = 'Digite uma IDADE válida'; 
        return;
    }
    if(cidade!=='string' || !cidade){
        document.getElementById('container').innerHTML = 'Digite um município válido';
        return;
    }
    
    if(estados.indexOf(estado) != -1){
        document.getElementById('container').innerHTML = 'Cadastro realizado com sucesso';  
        window.location.href='index1.html';
        
    }
    nomes.push(nome);
    datas.push(nascimento);
    idades.push(idade);
    cidades.push(cidade);

}

function entrar(){
    let usuario=document.getElementById('usuario').value;
    let senha=document.getElementById('senha').value;
    let confirmasenha=document.getElementById('confirmasenha').value;
        if(usuario.length!=11 || usuario=='string' ){   
            document.getElementById('container').innerHTML = 'Digite CPF com 11 dígitos';
            return;
        }
    
        if(senha.length!=6 || senha=='string'){ 
            document.getElementById('container').innerHTML = 'Digite senha numérica de 6 dígitos';
            return;
        }
    
        if(confirmasenha!==senha){
            document.getElementById('container').innerHTML = 'Senha não confere com a anterior\nDigite novamente';
            return;
        }
        document.getElementById('container').innerHTML = 'Senha cadastrada com sucesso';
        window.location.href='index2.html';
        
    cpf.push(usuario);
    senhas.push(senha);
    confirmaSenhas.push(confirmasenha);
   
}

function voltar(){
    window.location.href="index1.html";
}


