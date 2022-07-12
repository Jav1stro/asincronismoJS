function* gen(){
    yield 1;
    yield 2;
    yield 3;
}

const g = gen();

console.log(g.next().value);
console.log(g.next().value);
console.log(g.next().value);
console.log('--------------------');

function* iterable(array){

    for(let value of array){
        yield value;
    }
}

const iterate = iterable(['Javi', 'Mate', 'Pitu', 'Eli', 'Valen']);

console.log(iterate.next().value)
console.log(iterate.next().value)
console.log(iterate.next().value)
console.log(iterate.next().value)
console.log(iterate.next().value)
