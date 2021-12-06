import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { fetchEmployee } from "../API";
import EmployeeCard from "../components/EmployeeCard";
import Loading from "../components/Loading";
import { Link } from "react-router-dom";

export default function Employees() {
  const { id } = useParams();
  const [employee, setEmployee] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    fetchEmployee(setEmployee, id);
    setTimeout(() => setLoading(true), 1500);
  }, [isLoading, id]);
  return (
    <div id="employee">
      {isLoading === false ? (
        <Loading />
      ) : (
        <div style={{ flexDirection: "column" }} className="container">
          <EmployeeCard
            route={false}
            key={employee.id}
            id={employee.id}
            name={employee.name}
            dept={employee.department}
            role={employee.role}
            startDate={employee.startDate}
            img={employee.photo}
          />
          <Link className="card-link" to="/employees">
            Back
          </Link>
        </div>
      )}
    </div>
  );
}
