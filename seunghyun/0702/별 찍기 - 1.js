function printStar(n) {
  for (let i = 0; i < n; i++) {
    let star = '';
    for (let j = 0; j <= i; j++) {
      star = star + '*';
    }
    console.log(star);
  }
}

printStar(6);