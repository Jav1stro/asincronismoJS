const fnAsync = () => {
    return new Promise((resolve, reject) => {
      (true)
        ? setTimeout(() => resolve('1!!'), 2000)
        : reject(new Error('Error!'));
    });
  }
  
  const anotherFn = async () => {
    const somethig = await fnAsync();
    console.log(somethig);
    console.log('2!');
  }
  
  console.log('3');
  anotherFn();
  console.log('4');