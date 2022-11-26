import React, { useContext, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { GlobalContext } from "../context/GlobalContext";

const EditStudent = () => {
  
  const { loadStudents, student, setStudent, updateStudent, setSecond } =
    useContext(GlobalContext);

  const navigate = useNavigate();

  const { id } = useParams();

  const {  name, email, course } = student;

  const onInputChange = (event) => {
    setStudent({ ...student, [event.target.name]: event.target.value });
  };

  useEffect(() => {
    loadStudents(id);
       setSecond("");
   
  }, []);


  const handleSubmit = (event) => {
    event.preventDefault();
    updateStudent(id, student);
    navigate("/");

  };

  return (
    <>
      <div className="container text-white  mt-5">
        <div className="row ">
          <div className="col-md-6 offset-md-3 border shadow rounded p-2 pb-5 ">
            <h2 className="text-center m-4">
              Edit Student with code:{" "}
              <span style={{ color: "darkblue" }}>{id}</span>{" "}
            </h2>
            <form onSubmit={(event) => handleSubmit(event)}>
              <div className="mb-3">
                {/*  */}
                <label htmlFor="Name" className=" form-label">
                  <b> Name </b>
                </label>
                <input
                  type={"text"}
                  className="form-control shadow"
                  placeholder="Enter your name.."
                  name="name"
                  required
                  value={name}
                  onChange={(event) => onInputChange(event)}
                />
              </div>{" "}
              {/*  */}
              <div className="mb-3">
                <label htmlFor="Email" className=" text-white form-label">
                  <b> Email </b>
                </label>
                <input
                  type={"email"}
                  className="form-control shadow"
                  placeholder="Enter your email address.."
                  name="email"
                  required
                  value={email}
                  onChange={(event) => onInputChange(event)}
                />
              </div>
              {/*  */}
              <div className="mb-3">
                <label htmlFor="Username" className=" form-label">
                  <b> Course </b>{" "}
                </label>
                <input
                  type={"text"}
                  className="form-control shadow"
                  placeholder="Enter your course of study.."
                  name="course"
                  required
                  value={course}
                  onChange={(event) => onInputChange(event)}
                />
              </div>{" "}
              <button
                type="submit"
                className="btn btn-outline-info text-white rounded-5 ">
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
};

export default EditStudent;
