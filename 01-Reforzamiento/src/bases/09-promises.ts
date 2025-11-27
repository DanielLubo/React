const myPromise = new Promise<number>((resolve, reject) => {

     setTimeout(()=> {
        //! Mis lukas loca
        reject(`nos vemos lokas`);
     }, 2000);
});


myPromise.then((myMoneyIsBack) => {
    console.log(`Tengo mi dinero ${myMoneyIsBack}`);
}). catch ((reason) => {
    console.warn(reason);
}). finally(() => {
    console.log('ekisde, mi cara cuando');
})



