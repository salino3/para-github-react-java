import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../context/GlobalContext';
import { Link } from 'react-router-dom';


const Home = () => {

  const { students, fetchApi, deleteStudent, setSecond } =
    useContext(GlobalContext);


 const handleDeleteStudent =  (id) => {
deleteStudent(id);
   };
// 

useEffect(() => {
  fetchApi()
   setSecond("");

}, [])


  return (
    <>
      <div className=" px-5">
        <table className="table table-striped shadow mt-3">
          <thead>
            <tr className="bg-dark text-white ">
              <th scope="col">Student Code</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Course</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            {!students
              ? "Loading.."
              : students.map((item) => (
                  <tr key={item.id}>
                    <th scope="row">{item.id}</th>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.course}</td>
                    <td>
                      <button
                        onClick={() => handleDeleteStudent(item.id)}
                        className="btn btn-danger rounded-5 m-1 ">
                        <b>Delete</b>
                      </button>
                      <Link to={`/editstudent/${item.id}`} className="btn btn-outline-warning text-white rounded-5 mr-1">
                        <b>Edit</b>
                      </Link>{" "}
                      <Link to={`/viewstudent/${item.id}`} className="btn btn-outline-info text-white rounded-5 ">
                        <b>View info</b>
                      </Link>
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home