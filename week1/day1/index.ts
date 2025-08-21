let x: number = 10;
outPoint: for(let i = 0; i < 5; i++){
    console.log(i)
    break
    if(i == 2){
        x += 5;
        break
    }
}
console.log(x);
