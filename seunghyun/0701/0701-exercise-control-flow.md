# 1번
```
var x = 15;

if (x > 10 && x < 20) {
  console.log(x);
}
```

# 2번
```
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) { console.log(i) }
}
```

# 3번
```
let j = '';
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) { j += i }
}
console.log(j)
```

# 4번
```
for (let i = 10; i > 0; i--) {
  if (i % 2 !== 0) { console.log(i); }
}
```

# 5번
```
let i = 0;
while (i < 10) {
  if (i % 2 === 0) { console.log(i); }
  i++;
}
```

# 6번
```
let i = 10;
while (i > 0) {
  if (i % 2 !== 0) { console.log(i); }
  i--;
}
```

# 7번
```
let sum = 0;
for (let i = 0; i < 10; i++) {
  sum = sum + i;
}
console.log(sum); // 45
```

# 8번
```
let sum = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 !== 0 && i % 3 !== 0) {
    sum = sum + i
  }
}
console.log(sum); // 73
```

# 9번
```
let sum = 0;
for (let i = 0; i < 20; i++) {
  if (i % 2 === 0 || i % 3 === 0) {
    sum = sum + i
  }
}
console.log(sum); // 117
```

# 10번
```
for (let i = 1; i <= 6; i++) {
  for (let j = 1; j <= 6; j++) {
    if(i + j === 6) { console.log(`[${i}, ${j}]`)}
  }
}
```

# 11번
```
let star = '*';
let blank = '';
for (let i = 1; i <= 5; i++) {
  for (let j = 1; j <= i; j++) {
  }
  console.log(blank = blank + star);
}

for (let i = 0; i < 5; i++) {
  let star = "";
  for (let j = 0; j <= i; j++) {
    star = star + "*";
  }
  console.log(star);
}
```

# 12번
```
for (let i = 0; i < 5; i++) {
  let star = '';
  for (let j = 0; j < i; j++) {
    star = star + ' ';
  }
  for (let j = 0; j < 5 - i; j++) {
    star = star + '*'
  }
  console.log(star);
}
```

# 13번
```
for (let i = 0; i < 5; i++) {
  let star = '';
  for (let j = 0; j < 5-i; j++) {
    star = star + '*';
  }
  console.log(star);
}
```

# 14번
```
for (let i = 0; i < 5; i++) {
  let star = '';
  for (let j = 0; j <= 5-i; j++) {
    star = star + ' ';
  }
  for (let j = 0; j <= i; j++) {
    star = star + '*'
  }
  console.log(star);
}
```