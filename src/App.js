import "./App.css";
import { useEffect, useState } from "react";
import Students from "./components/Students/index";

function App() {
  const [studentsList, setStudentsList] = useState([]);

  useEffect(() => {
    fetch("http://hp-api.herokuapp.com/api/characters/students")
      .then((response) => response.json())
      .then((response) => setStudentsList(response))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <h2 className="tracking-in-expand">Torneio Tribruxo</h2>
      <Students
        setStudentsList={setStudentsList}
        studentsList={studentsList}
      ></Students>
    </div>
  );
}

export default App;
