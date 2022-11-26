import React, { useEffect, useState } from 'react';
import { GlobalContext } from './GlobalContext';
import axios from 'axios';

const MyProvider = ({children}) => {
  
  const [students, setStudents] = useState([]);
const [student, setStudent] = useState({});
 const [second, setSecond] = useState();


  //* API call
  const myapi = "http://localhost:8080/students";

  const fetchApi = async () => {
    const response = await fetch(myapi);

    const JsonResponse = await response.json();
    setStudents(JsonResponse);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //* Delete a student
  const deleteStudent = async (id) => {
    await axios.delete(`http://localhost:8080/students/${id}`);
    fetchApi();
  };

  //* Add a student
  const addStudent = async (studentsData) => {
    await axios.post("http://localhost:8080/students", studentsData);
    fetchApi();
  };

  //* View student info
  const loadStudents = async ( id) => {
    try {
          const result = await axios.get(
            `http://localhost:8080/students/${id}`
          );
          console.log(result);
          setStudent(result.data);
    } catch (error) {
      console.log(error);
            alert("Student with this code is not in the database");

    }

  };

  //* Modify data student
  const updateStudent = async (id, student) => {
    try {
         await axios.put(`http://localhost:8080/students/${id}`, student);
         fetchApi();
    } catch (error) {
            alert("Student with this code is not in the database");
             console.log(error);
    }
  };

  return (
    <>
      <GlobalContext.Provider
        value={{
          students,
          fetchApi,
          deleteStudent,
          addStudent,
          student,
          setStudent,
          loadStudents,
          updateStudent,
          //
          second,
          setSecond,
        }}
      >
        {children}
      </GlobalContext.Provider>
    </>
  );
}

export default MyProvider
