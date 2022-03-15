export default function formatarDados($nome,$sobrenome,$nacimento){
   let dados = {}
   let nome = String($nome.value); // converto o valor para string
   let sobrenome = String($sobrenome.value);

   let convert = String($nacimento.value);// converto o valor do input do ano em string

   let data = new Date(convert); // passso o valor da sting do ano como argumento 
   let naci = data.toLocaleDateString('PT-BR',{timezone:"UTC"}); //converto para o formato de data brasilheiro

   let nacimento = naci.split("/"); // uso o split para tirar as barras e colocar em um array
   // seleciono o ano atual para calcular a idade depois
   let agora = new Date;
   let ano = agora.getUTCFullYear();
   let hora = agora.getHours()
   // o primeiro valor o array nacimento estava vindo como -1 ex: 10 vinha 9, dai precisei vazer esse comando 
   let dia = String(Number(nacimento[0])+1);

   nacimento[0] = dia;
   dados.nome = nome;
   dados.sobrenome = sobrenome;
   dados.data = nacimento;
   dados.idade = ano - nacimento[2];
   dados.horas = hora;
   return dados;
}


