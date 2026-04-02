import { useEffect, useState } from "react";

export const useStudents = (trainer) => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  setLoading(true);

  fetch("/students.json")
    .then(res => res.json())
    .then(data => {
      console.log("Full Data:", data);

      const filteredStudents = data.students.filter(
        (s) => s.trainer === trainer
      );

      setStudents(filteredStudents);
      setLoading(false);
    })
    .catch(err => {
      console.log(err);
      setLoading(false);
    });

}, [trainer]);

  return { students, loading };
};