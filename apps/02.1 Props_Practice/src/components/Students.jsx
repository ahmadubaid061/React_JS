function Student(props) {
  return (
    <div className="student">
      <h2>{props.name}</h2>
      <p>Age: {props.age}</p>
      <p>Grade: {props.grade}</p>
    </div>
  );
}

export default Student;
