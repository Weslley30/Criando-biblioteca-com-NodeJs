import chalk from "chalk";
import fs from "fs";

function trataErro( erro ){
    throw new Error(chalk.red('erro no processo: ', erro.code));
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.promises
    .readFile(caminhoDoArquivo, encoding)
    .then( (res) => console.log(extraiLink(res)) )
    .catch( trataErro )
}



pegaArquivo("../arquivos/texto.md");