const numbers=['One','Two','Three','Four','Five']
for(let index=0;index<numbers.length;index++)
{
  console.log(numbers[index]);
}
console.log("Printing loop in reverse")
for(let index=0;index<numbers.length;index++)
{
 console.log(numbers[numbers.length-1-index]);
}