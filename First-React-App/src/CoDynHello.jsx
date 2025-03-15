function Hello()
{
  let myName = "Shivendra";
  let randomNNumber = Math.round(Math.random() * 100);
  let fullname=()=>
  {
    return "Shivendra Revale";
  }
  return <h3 style={{'background-color': '#7756'}}>Hello World!. I am {myName} . I am your master . I have taught more than {randomNNumber} number of students. My Full name is {fullname()}. </h3>
}


export default Hello;