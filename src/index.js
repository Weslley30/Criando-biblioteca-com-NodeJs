import chalk from "chalk";
import fs from "fs";


function extraiLink(texto){
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[1]]: [captura[2]] }));
    // pega todos os valores(em colchetes) e valores(site) do texto.md mas como um só dado
    // const capturas = texto.match(regex);
    return resultados.length > 0?  resultados : 'Não tem link nesse arquivo';
}



function trataErro( erro ){
    throw new Error(chalk.red('erro no processo: ', erro.code));
}

async function pegaArquivo(caminhoDoArquivo){
    try{
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding);
        return extraiLink(texto);
    } catch(erro){
        trataErro(erro);
    }
}


export default pegaArquivo;