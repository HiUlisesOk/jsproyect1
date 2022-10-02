const fibonnachi = (num) => {
    let a = 0;
    let b = 1;
    fibo = [0];
    for (i = 0; i < num; i++){
        let agregar = a + b;
        a = b;
        b = agregar;
        fibo.push(agregar)
    }
    console.log(fibo)
}
fibonnachi(15)