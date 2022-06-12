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
  return (
      <div>
          <h1>{course.name}</h1>
          <ul>
              {course.parts.map(item => <li key={item.id}>{item.name} {item.exercises}</li>)}
              <SumStatement arraya={course.parts} />
          </ul>
      </div>
    );
  };

export default Course