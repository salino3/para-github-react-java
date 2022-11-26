import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { GlobalContext } from '../context/GlobalContext';
import Card from './Card';

const Navbar = () => {

 const { students, second, setSecond } = useContext(GlobalContext);

 
   const handleChange = (event) => {
     let words = event.target.value.toLowerCase();

     setSecond(words);
   };

   useEffect(() => {
   setSecond("");
   }, []);

   
  return (
    <>
      <nav className="navbar  bg-success">
        <div>
          <Link className="btn btn-warning mx-5 p-2 " to={"/"}>
            <b className="text-primary">Home</b>
          </Link>
          <Link to={"/addstudent"} className="btn btn-primary ">
            {" "}
            Add Student
          </Link>
        </div>

        <div >
          <form className="gridFormNav ">
            <h6 className="text-white mt-2">
              Look for student using name or code:
            </h6>

            <input
              className="mx-2 rounded mx-5  w-60 "
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleChange}
              name="words"
            />
          </form>
          <div className="divCardNav">
            <Card second={second} setSecond={setSecond} students={students} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar