let todo={
  day:'Monday',
  meeting:0,
  meetDone:0,
  addmeeting:function(meet)
  {
    this.meeting=this.meeting+meet;
  },
  display:function()
  {
    console.log(`Meeting left ${this.meeting}`)
  }
}

todo.addmeeting(2)
todo.display()

