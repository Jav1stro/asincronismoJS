const promise = new Promise((resolve, reject) => {
  resolve("resuelto ¡¡¡PERRITO MALVADO!!!");
});

const cows = 5;

const countCows = new Promise((resolve, reject) => {
  cows > 10
    ? resolve(`Hay vaquitas suficientes: ${cows}`)
    : reject(`No hay vaquitas suficientes: ${cows}`);
});

countCows.then((result)=>{
    console.log(result);
}).catch((error)=>{
    console.log('ERROR!!!', error)
}).finally(()=>{
    console.log('Finalizado.')
})