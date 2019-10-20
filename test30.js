let todo={
   day:'Monday',
   meeting:0,
   meetDone:0
}

let addMeet=function(todo,meet=0)
{
  todo.meeting=todo.meeting+meet;
}

let meetDone=function(todo,meet=0)
{
  todo.meeting=todo.meeting-meet;
  todo.meetDone=todo.meetDone+meet;
}

let reset=function(todo)
{
  todo.meeting=0,
  todo.meetDone=0
}

let getsummary=function(todo)
{
  console.log(`You have ${todo.meeting} today`);
}


addMeet(todo,2)
meetDone(todo,1)
console.log(todo)
getsummary(todo)

