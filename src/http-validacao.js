import chalk from "chalk";

function extrairLinks(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function checaStatus(listaURL){
    const arrStatus = await Promise.all(
        listaURL.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;
            } catch (erro) {
                return manejarErros(erro);
            }
        })
    )
    return arrStatus;
}

function manejarErros(erro){
    if(erro.cause.code === "ENOTFOUND"){
        return 'link não encontrado';
    } else {
        return 'ocorreu algum erro';
    }
}

export default async function listaValidada(lista){
    const links =  extrairLinks(lista);
    const status = await checaStatus(links);

    return lista.map((objeto, indece) => ({
        ...objeto,
        status: status[indece]
    }));
}

