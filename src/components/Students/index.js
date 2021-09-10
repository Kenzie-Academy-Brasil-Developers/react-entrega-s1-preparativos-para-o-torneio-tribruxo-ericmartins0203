import StudentCard from "../StudentCard/index";
import { useState } from "react";

function Students({ studentsList, setStudentsList }) {
  const [tournamentList, setTournamentList] = useState([]);

  function numberGenerator() {
    return Math.floor(Math.random() * studentsList.length);
  }

  function competitors() {
    if (tournamentList.length === 3) {
      return;
    }
    let student = studentsList[numberGenerator()];
    let arr = [];
    let filteredStudents = studentsList;
    arr.push(student);
    let lasthouse = arr[arr.length - 1].house;
    for (let i = 1; i < 3; i++) {
      lasthouse = arr[arr.length - 1].house;
      filteredStudents = filteredStudents.filter(
        (element) => element.house !== lasthouse
      );
      student =
        filteredStudents[Math.floor(Math.random() * filteredStudents.length)];
      arr.push(student);
    }
    setTournamentList([...arr]);
  }

  return (
    <div className="button">
      <p>Torneio para ser o Bruxão.</p>
      <button className="myButton" onClick={() => competitors()}>
        Escolhidos
      </button>
      <div className="flex">
        {tournamentList.map((element, index) => (
          <StudentCard key={index} element={element} />
        ))}
      </div>
    </div>
  );
}

export default Students;
