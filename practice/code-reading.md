# Code reading

## Question 1

Take a look at the following code:

```
1    let x = 1;
2    function f1()
3    {
4        let x = 2;
5        console.log(x);
6    }
7    console.log(x);
```

Explain why line 4 and line 6 output different numbers.

The variable x in the function, has function scope so when we log it inside the function its output is 2. However, the last console.log outside the function, will refer to the global-scoped variable x so its output is 1.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

10
undefined
Here the variable x has a global scope, so it can be accessible from outside the function. However, the variable y is declared within the function and has function scope, so we can't log it from outside the function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

9
{ x: 10 }
When we log the variable x the output is still 9 because x has global scope not function scope and it wouldn't be incremented. However, the last console.log will change the value of the object because we are passing an argument as reference(since it is object), so it can be modified by function.
