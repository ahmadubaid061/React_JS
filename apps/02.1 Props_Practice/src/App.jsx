import Student from "./components/Students";
import "./App.css";

function App() {
  return (
    <>
      <h1>Students Details</h1>
      <div className="students">
        <Student name="Alice" age={20} grade="A" />
        <Student name="Bob" age={22} grade="B" />
        <Student name="Charlie" age={21} grade="A" />
      </div>
    </>
  );
}

export default App;
