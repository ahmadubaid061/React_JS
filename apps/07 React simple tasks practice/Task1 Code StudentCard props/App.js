import StudentCard from "./components/StudentCard";
import "./App.css";
//creating student objects
const st_1 = { name: "Ubaid Ahmad", roll: "11", grade: 89 };
const st_2 = { name: "Bakhti Gul", roll: "12", grade: 80 };
const st_3 = { name: "Sonia Shah", roll: "13", grade: 95 };

function App() {
  const students = [st_1, st_2, st_3];
  const studentCards = []; //array for storing cards
  //i will use a loop for cleanness and clearity
  for (let i = 0; i < students.length; i++) {
    studentCards.push(
      <StudentCard
        key={i}
        id={i + 1}
        name={students[i].name}
        rollNumber={students[i].roll}
        grade={students[i].grade}
      />,
    );
  }
  //here studentCards are passed as props
  return <div className="App">{studentCards}</div>;
}

export default App;
