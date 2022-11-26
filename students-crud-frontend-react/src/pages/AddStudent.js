import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalContext';

const AddStudent = () => {

     const { addStudent, setSecond } = useContext(GlobalContext);

  const navigate = useNavigate();

  const [student, setStudent] = useState({
    name: "",
    course: "",
    email: "",
  });

  useEffect(() => {
  setSecond("");
  }, [])
  

  const { name, email, course } = student;

  const onInputChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
    // console.log({ student });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    addStudent(student);
    navigate("/");
  };

  return (
    <>
      <div className="container text-white px-1">
        <div className="row ">
          <div className="col-md-6 offset-md-3 border shadow rounded pb-5 mt-5  w-50">
            <h2 className="text-center m-4">Register User</h2>
            <form onSubmit={(event) => onSubmit(event)}>
              <div className="mb-3">
                {/*  */}
                <label htmlFor="Name" className="form-label">
                  <b> Name </b>
                </label>
                <input
                  type={"text"}
                  className="form-control shadow "
                  placeholder="Enter your name.."
                  name="name"
                  value={name}
                  onChange={(event) => onInputChange(event)}
                  required
                />
              </div>{" "}
              {/*  */}
              <div className="mb-3">
                <label htmlFor="Email" className="form-label">
                  <b> Email </b>
                </label>
                <input
                  type={"email"}
                  className="form-control shadow"
                  placeholder="Enter your email address.."
                  name="email"
                  value={email}
                  onChange={(event) => onInputChange(event)}
                  required
                />
              </div>
              {/*  */}
              <div className="mb-3">
                <label htmlFor="Course" className="form-label">
                  <b> Course </b>
                </label>
                <input
                  type={"text"}
                  className="form-control shadow"
                  placeholder="Enter your course of study.."
                  name="course"
                  value={course}
                  onChange={(event) => onInputChange(event)}
                  required
                />
              </div>{" "}
              {/*  */}
              <button
                type="submit"
                className="btn btn-outline-info text-white rounded-5 "
              >
                Submit
              </button>
              <Link to="/" className="btn btn-outline-danger mx-2">
                Cancel action
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AddStudent