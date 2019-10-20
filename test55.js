let useremail='mn@gmail.com'
let password ='1234'

let userchecker=function(myString)
{
  if((myString.includes(123)) && (myString.length>6))
  {
      return true
  }
  else
  {
      return false
  }
}

console.log(userchecker(useremail))
console.log(userchecker(password))
