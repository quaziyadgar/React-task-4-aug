// Create a function that accepts n number of strings. (Hint - you need to use rest).
// From those strings, you need to print the string that contains maximum number of vowels. (a, e, i, o, u).

const n = parseInt(prompt("Enter the length of an array"));
const arr = new Array(n);
function arrayString(n)
{
    for(let i =0; i<n ; i++)
    {
        let s = prompt("Enter ",i+1,"string");
        arr.push(s);
    }
}
arrayString(n);
const vowels = ['a','e','i','o','u','A','E','I','O','U'];

let max = 0;
let str = "";
for(let i of arr)
{
    let c = 0;
    for(let j in i)
    {
        if(vowels.includes(i[j]))
        c++;
    }
    if(c>max)
    {
        max = c;
        str = i;
    }
}
console.log(str);


// Similar to what we did for sum. Do for multiplication but for 3 levels. mul(2)(5)(20);

const multiply = (a) =>
{
    const second = (b) =>
    {
        const third = (c) =>
        {
            console.log(a*b*c);
        }
        return third;
    }
    return second;
}

multiply(2)(5)(20);