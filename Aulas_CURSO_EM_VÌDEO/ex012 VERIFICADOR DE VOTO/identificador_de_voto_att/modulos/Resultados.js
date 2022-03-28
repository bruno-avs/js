
export default function criarConteudo(genero,content, nome, idade,$foto, src, $resultado,dia){
   $foto.src = src;
   $resultado.innerHTML = `Ola ${nome}, ${dia} Detectamos que você é ${genero} de ${idade} anos, ${content} `
}