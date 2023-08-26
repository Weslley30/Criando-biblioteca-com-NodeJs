function promessa(bool) {
    const isValid = bool;
    return new Promise((resolve, reject) => {
      if (!isValid) {
        reject(new Error("falha na promessa"));
      }else
      resolve(console.log("sucesso na promessa"));
    });
}


promessa(true);