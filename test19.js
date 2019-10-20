let getmarks=function(cmark,tmark)
{
    let pc=(cmark/tmark)*100;
    let mygrade='';
    if (pc>=90)
    {
       mygrade='A';
    }else if(pc>=80)
    {
       mygrade='B';
     }
     else
     {
       mygrade='C';
     }
   console.log(`My grade is ${mygrade}`);
   console.log(`My percent is ${pc}`);
}

getmarks(26,35);