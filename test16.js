const todo=[]
todo.push('Write test')
todo.push('Sent mail')
todo.push('Raise ticket')

todo.forEach(function(todo,index)
{
  console.log(`Your task no ${index} is :${todo}`);
})