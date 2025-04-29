import React from "react";
import './Cartao.css';


function Cartao(){
    return(
        <>
            <header><h1>VÍRUS</h1></header>
           
             
            <p className="p">Um vírus de computador é um tipo de programa malicioso projetado para infectar outros
              programas ou arquivos e se replicar, se espalhando para diferentes sistemas ou dispositivos.
               Aqui está um detalhamento mais completo:</p>

            <h1>1. Replicação</h1>
            <p>O vírus anexa seu código a um arquivo ou programa legítimo, criando uma cópia dele. Quando esse
            arquivo ou programa é executado, o vírus também é executado e pode se propagar para outros arquivos
            ou sistemas.
            O vírus pode se espalhar por redes de computadores ou dispositivos conectados, como pen drives, por exemplo.</p>

            <h1>2. Ativação</h1>
            <p>O vírus geralmente não é ativo o tempo todo. Ele depende de interação do usuário para ser executado. Isso pode
            ocorrer ao abrir um arquivo infectado, baixar um programa comprometido ou até visitar um site malicioso.</p>

            <h1>3. Danos Causados</h1>
            <p>Danos ao sistema: pode tornar o computador mais lento ou até mesmo travá-lo.
            Perda de dados: pode apagar ou corromper arquivos importantes, dificultando a recuperação dos dados.
            Roubo de informações: alguns vírus são projetados para espionar atividades, capturar senhas ou informações pessoais.
            Desativação de antivírus: alguns vírus têm o objetivo de desativar softwares de segurança, deixando o sistema vulnerável a outros ataques.</p>

            <h1>4. Exemplo de funcionamento</h1>
            <p>Um vírus pode se esconder em um anexo de e-mail ou em um arquivo de download. Quando o usuário abre o anexo ou executa o arquivo,
            o vírus é ativado e começa a se replicar ou a causar os danos programados.</p>
            
        </>
    )

};
export default Cartao;  