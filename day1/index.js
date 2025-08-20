var x = 10;
outPoint: for (var i = 0; i < 5; i++) {
    console.log(i);
    break;
    if (i == 2) {
        x += 5;
        break;
    }
}
console.log(x);
