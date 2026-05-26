import "./StudentCard.css";

function StudentCard({ id, name, rollNumber, grade }) {
  return (
    <div className="student_card">
      <h2 className="card_title">Student: {id} Details </h2>
      {/*id for student No*/}
      <div className="details">
        <p>
          <span className="label">Student Name:</span> {name}
        </p>
        <p>
          <span className="label">Roll Number:</span> {rollNumber}
        </p>
        <p>
          <span className="label">Grade:</span> {grade}
        </p>
      </div>
    </div>
  );
}

export default StudentCard;
