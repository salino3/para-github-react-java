import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ second, setSecond, students, setStudents }) => {


  function serchTerm(term) {
    return function (x) {

      let tlc = x.name.toLowerCase();
      if (term === x.id.toString() ) {
        tlc = x.id.toString();
      }

     if(term !== ""){
         return tlc.includes(term) || !term;
     };
    };
  };

     const handleClick = () => {
        setSecond("");
        setStudents("");
     };

      
  return (
    <>
      {!students
        ? "Loading.."
        : students.filter(serchTerm(second)).map((item) => (
            <Link
              to={`/viewstudent/${item.id}`}
              onClick={handleClick}
              key={item.id}
            >
              <div className="divCard rounded-4 m-3">
                {" "}
                {item.name} <span> - code: </span> {item.id}
              </div>
            </Link>
          ))}
    </>
  );
};;

export default Card


