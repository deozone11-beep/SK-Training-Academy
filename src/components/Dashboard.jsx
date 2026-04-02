// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// function Dashboard() {

//   const [students, setStudents] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const trainer = localStorage.getItem("trainer");

//   useEffect(() => {
//     setLoading(true);

//     fetch("http://localhost:3000/students")
//       .then(res => res.json())
//       .then(data => {
//         console.log("All Data:", data);

//         const filteredStudents = data.filter(
//           (s) => s.trainer === trainer
//         );

//         console.log("Filtered:", filteredStudents);

//         setTimeout(() => {
//           setStudents(filteredStudents);
//           setLoading(false);
//         }, 1000);
//       })
//       .catch(err => {
//         console.log(err);
//         setLoading(false);
//       });

//   }, [trainer]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2 className="logout">
//         <Link to="/officialLogin">Logout</Link>
//       </h2>

//       <h2 className="trainer-header">
//         Trainer Name: {trainer}
//       </h2>

//       {/* 👇 LOADING UI */}
//       {loading ? (
//         <h3>⏳ Loading students...</h3>
//       ) : students.length === 0 ? (
//         <p>No students found 😢</p>
//       ) : (
//         <center>
//           <table border="1" className="student-table">
//             <thead>
//               <tr>
//                 <th>Student ID</th>
//                 <th>First Name</th>
//                 <th>Last Name</th>
//                 <th>Degree</th>
//                 <th>Branch</th>
//                 <th>Year</th>
//                 <th>College</th>
//                 <th>Phone No</th>
//                 <th>Course</th>
//                 <th>Time</th>
//               </tr>
//             </thead>

//             <tbody>
//               {students.map((s) => (
//                 <tr key={s.id}>
//                   <td>{s.id}</td>
//                   <td>{s.firstName}</td>
//                   <td>{s.lastName}</td>
//                   <td>{s.degree}</td>
//                   <td>{s.branch}</td>
//                   <td>{s.year}</td>
//                   <td>{s.college}</td>
//                   <td>{s.phone}</td>
//                   <td>{s.course}</td>
//                   <td>{s.time}</td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </center>
//       )}
//     </div>
//   );
// }

// export default Dashboard;


import { Link } from "react-router-dom";
import { useStudents } from "./useStudents";


function Dashboard() {

  const trainer = localStorage.getItem("trainer");

  const { students, loading } = useStudents(trainer);

  return (
    <div style={{ padding: "20px" }}>
      <h2 className="logout">
        <Link to="/officialLogin">Logout</Link>
      </h2>

      <h2 className="trainer-header">
        Trainer Name: {trainer}
      </h2>

      {loading ? (
        <h3>⏳ Loading students...</h3>
      ) : students.length === 0 ? (
        <p>No students found 😢</p>
      ) : (
        <center>
          <table border="1" className="student-table">
          <thead>
              <tr>
                <th>Student ID</th>
                 <th>First Name</th>
                 <th>Last Name</th>
                 <th>Degree</th>
                 <th>Year</th>
                 <th>College</th>
                 <th>Branch</th>
                 <th>Phone No</th>
                 <th>Course</th>
                 <th>Time</th>
               </tr>
             </thead>
             <tbody>
               {students.map((s) => (
                <tr key={s.id}>
                  <td>{s.id}</td>
                  <td>{s.firstName}</td>
                  <td>{s.lastName}</td>
                  <td>{s.degree}</td>
                  <td>{s.branch}</td>
                  <td>{s.year}</td>
                  <td>{s.college}</td>
                  <td>{s.phone}</td>
                  <td>{s.course}</td>
                  <td>{s.time}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </center>
      )}
    </div>
  );
}

export default Dashboard;