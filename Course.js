const SumStatement = ({arraya}) => {
  
  const numberArray = [];   
  arraya.forEach(item => {
    numberArray.push(item.exercises);
  });
  
  const sum = numberArray.reduce((accumulator,currentValue) => accumulator + currentValue);
  
  return(
    <>
      <h3>There are,in total , {sum} exercises.</h3>
    </>
  )
}



const Course = ({course}) => {
  course.forEach(item => {
  return (
      <div>
          <h1>{item.name}</h1>
          <ul>
              {item.parts.map(subItem => <li key={subItem.id}>{subItem.name} {subItem.exercises}</li>)}
              <SumStatement arraya={item.parts} />
          </ul>
      </div>
    );
  });
}

export default Course