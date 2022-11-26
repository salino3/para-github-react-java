import React, { useContext, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';


const ViewStudent = () => {


   const { loadStudents, student, setSecond } = useContext(GlobalContext);

       const { id } = useParams();

        const {  name, email, course } = student;


        useEffect(() => {
       loadStudents(id);
       setSecond("");
    }, []);


        return (
          <>
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3 border shadow rounded p-4 mt-2">
                  <h2 className="text-center m-4 text-white">
                    Student Details
                  </h2>
                  <div className="shadow  divDetails ">
                    <div className="mt-1 ">
                      <h6 className="text-success">
                        {" "}
                        Details of student student code:{" "}
                        <b className="text-primary">{id}</b>{" "}
                      </h6>
                      <ul className="m-3">
                        <li className="list-group-item">
                          <h6 className="text-primary">
                            <b className="text-success">Name: </b> {name}
                          </h6>
                        </li>
                        <li className="list-group-item">
                          <h6 className="text-primary">
                            <b className="text-success">Email: </b> {email}
                          </h6>{" "}
                        </li>
                        <li className="list-group-item">
                          <h6 className="text-primary">
                            <b className="text-success">Course: </b> {course}
                          </h6>{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                  <Link
                    className="btn btn-outline-info text-white rounded-5 my-5"
                    to="/" >
                    Back to Home
                  </Link>
                </div>
              </div>
            </div>
          </>
        );
}

export default ViewStudent

