
import criarConteudo from "./modulos/Resultados.js";
import formatarDados from "./modulos/formatDados.js"
let analizar = document.getElementById('button-analisar');

analizar.addEventListener("click", () => {

	let $nome = document.getElementById('dados-nome')
	let $sobre = document.getElementById('dados-sobrenome')
	let $naci = document.getElementById('dados-nacimento')
	let $sexo = document.getElementsByName('radsex')
	let $foto = document.getElementById('foto-resultado')
	let $resultado = document.getElementById('p-resultado')
    
	const dados = formatarDados($nome, $sobre, $naci)
	let Hdia;
	let conteudo;
	
    // analiza a hora do dia para dar bom dia, tarde ou noite 
   const bom = ()=>{
     if(dados.horas >= 0 && dados.horas < 13){ Hdia = "!Bom dia!";}
      Hdia = dados.horas < 18? "!Boa tarde!":"!Boa noite!";
   }
   const alerta = ()=>{
	   let a = [$nome,$sobre, $naci]
	   let b = ["nome", "sobrenome", "nacimento"]
	 if(a[0].value.length === 0 && a[1].value.length === 0 && a[2].value.length === 0){
      alert('Ops!!! Parece que todas as caixas então vazias ')
	 }
	 else{
		for(let n = 0; n < a.length; n++){
			if(a[n].value.length === 0){
			 for(let m = 1; m < a.length; m++){
				  if(a[n].value.length === 0 && a[m].value.length === 0 && n !== m ){					  
					 window.alert(`ops!!!Parece que você esqueceu de colocar o seu ${b[n]} e ${b[m]}`)
					 n += 3; m += 3
				  }
				  else if(n !== m && a[n].value.length == 0){
					 window.alert(`ops!!!Parece que você esqueceu de informar seu ${b[n]}`)
				  }		
				}	
			}	   
		 }
	 }
   }
	if ($sexo[0].checked && $nome.value.length !== 0 && $naci.value.length !== 0 && $sobre.value.length !== 0) {
		       bom()
			if (dados.idade >= 18 && dados.idade < 30) { 
				conteudo = "e esta dentro da idade de voto obrigatório, o primeiro turno da eleição começara em 02 de outubro de 2022."

				 new criarConteudo('um jovem', conteudo, dados.nome, dados.idade,$foto, '../imagens/homen-jovem.png',$resultado, Hdia);
			}
			else if (dados.idade >= 0 && dados.idade < 15) {
				conteudo = "você não tem idade pra votar ainda"

				new criarConteudo('uma criançã', conteudo, dados.nome, dados.idade,$foto, '../imagens/menino-criança.png',$resultado, Hdia)
			}
			else if (dados.idade < 16 && dados.data[1] <= 9) {
				conteudo = "portanto, você não tem idade pra votar ainda, mas como a proxima eleição é só ano que vem e você completara 16 anos antes do primeiro turno começar podera votar assim que tiver feito 16 e estiver com seu titulo de eleitor. lenbrado !!! o voto é opcional para você."

				new criarConteudo(' um adolecente', conteudo, dados.nome, dados.idade,$foto, '../imagens/menino-adolecente.png',$resultado, Hdia)                  
			}
			else if (dados.idade < 16 && dados.data[1] >= 10) {
				conteudo = "você não tem idade pra votar ainda, e infelismente não tera idade pra votar ano que vem também."

                new criarConteudo('um adolecente', conteudo, dados.nome, dados.idade,$foto, '../imagens/menino-adolecente.png',$resultado, Hdia)		
			}
			else if (dados.idade < 18) {
				conteudo = "você já tem idade pra votar, só que o seu voto é opcional. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('um adolecente', conteudo, dados.nome, dados.idade,$foto, '../imagens/menino-adolecente.png',$resultado, Hdia) 
			}
			else if (dados.idade < 46) {
				conteudo = "seu voto é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('um homen', conteudo, dados.nome, dados.idade,$foto, '../imagens/homen-jovem.png',$resultado, Hdia) 
			}
			else if (dados.idade < 61) {
				conteudo = "você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('um senhor', conteudo, dados.nome, dados.idade,$foto, '../imagens/homen-6-idade.png',$resultado, Hdia) 
			}
			else if (dados.idade < 70) {
				conteudo = "você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('um senhor', conteudo, dados.nome, dados.idade,$foto, '../imagens/homen-velho.png',$resultado, Hdia) 
			}
			else if (dados.idade < 125) {
				conteudo = "você não tem mais idade pra votar obrigatóriamente , portanto seu voto não é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('um senhor', conteudo, dados.nome, dados.idade,$foto, '../imagens/homen-velho.png',$resultado, Hdia);
			}
	}
	else{
		alerta()
	}
	if ($sexo[1].checked && $nome.value.length !== 0 && $naci.value.length !== 0 && $sobre.value.length !== 0) {
          bom()
            if (dados.idade >= 18 && dados.idade < 30) {
				conteudo = "e esta dentro da idade de voto obrigatório, o primeiro turno da eleição começara em 02 de outubro de 2022"
				new criarConteudo('uma jovem', conteudo, dados.nome, dados.idade,$foto, '../imagens/mulher-jovem.png',$resultado, Hdia);
            }
            else if (dados.idade >= 0 && dados.idade < 15) {
				conteudo = "você não tem idade pra votar ainda"

				new criarConteudo('uma criançã', conteudo, dados.nome, dados.idade,$foto, '../imagens/menine-criança.png',$resultado, Hdia);
            }
            else if (dados.idade < 16 && dados.data[1] <= 9) {
				conteudo = "portanto, você não tem idade pra votar ainda, mas como a proxima eleição é só ano que vem e você completara 16 anos antes do primeiro turno começar podera votar assim que tiver feito 16 e estiver com seu titulo de eleitor. lenbrado !!! o voto é opcional para você."
				
				new criarConteudo('uma adolecente', conteudo, dados.nome, dados.idade,$foto, '../imagens/menina-adolecente.png',$resultado, Hdia);
            }
            else if (dados.idade < 16 && dados.data[1] >= 10) {
				conteudo = "você não tem idade pra votar ainda, e infelismente não tera idade pra votar ano que vem também."

				new criarConteudo('uma adolecente', conteudo, dados.nome, dados.idade,$foto, '../imagens/menina-adolecente.png',$resultado, Hdia);
            }
            else if (dados.idade < 18) {
				conteudo = "você já tem idade pra votar, só que o seu voto é opcional. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('uma adolecente', conteudo, dados.nome, dados.idade,$foto, '../imagens/menina-adolecente.png',$resultado, Hdia);
            }
            else if (dados.idade < 46) {
				conteudo = "seu voto é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('uma adolecente', conteudo, dados.nome, dados.idade,$foto, '../imagens/menina-adolecente.png',$resultado, Hdia);
            }
            else if (dados.idade < 61) {
				conteudo = "você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('uma senhora', conteudo, dados.nome, dados.idade,$foto, '../imagens/mulher-6-idade.png',$resultado, Hdia);
            }
            else if (dados.idade < 70) {
				conteudo = "você ainda tem idade pra votar, seu voto é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('uma senhora', conteudo, dados.nome, dados.idade,$foto, '../imagens/mulher-velha.png',$resultado, Hdia);
            }
            else if (dados.idade < 125) {
				conteudo = "você não tem mais idade pra votar obrigatóriamente , portanto seu voto não é obrigatório. O primeiro turno das eleições começãm no dia 02 de outubro de 2022."

				new criarConteudo('uma senhora', conteudo, dados.nome, dados.idade,$foto, '../imagens/mulher-velha.png',$resultado, Hdia);
            }
            else{
				alert()
			}
    }
   
})