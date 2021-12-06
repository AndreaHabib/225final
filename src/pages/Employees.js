import React, { useEffect, useState } from "react";
import * as api from "../API/index";
import EmployeeCard from "../components/EmployeeCard";
import Loading from "../components/Loading";
import SearchBar from "../components/SearchBar";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [searchVal, setSearchVal] = useState("");
  const [isSearch, setSearch] = useState(false);

  const searchCancel = () => {
    setLoading(false);
    api.fetchEmployees(setEmployees);
    setTimeout(() => setLoading(true), 1500);
    setSearch(false);
  };

  const onClick = () => {
    setLoading(false);
    api.fetchEmployee(setEmployees, searchVal);
    setTimeout(() => setLoading(true), 1500);
    setSearch(true);
  };

  useEffect(() => {
    api.fetchEmployees(setEmployees);
    setTimeout(() => setLoading(true), 1500);
  }, []);
  return (
    <div id="employees">
      <div className="header">
        <h1 className="title">(Employees)</h1>
        <h3 className="subheader">XMAS EDITION</h3>
        <div id="background-wrap">
          <div class="x1">
            <div class="cloud"></div>
          </div>

          <div class="x2">
            <div class="cloud"></div>
          </div>

          <div class="x3">
            <div class="cloud"></div>
          </div>

          <div class="x4">
            <div class="cloud"></div>
          </div>

          <div class="x5">
            <div class="cloud"></div>
          </div>
        </div>
      </div>
      <SearchBar onClick={onClick} setSearchVal={setSearchVal} />
      {isLoading === false ? (
        <Loading />
      ) : (
        <>
          <div className="container">
            {isSearch === true ? (
              <div
                style={{
                  height: "100vh",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <EmployeeCard
                  route={true}
                  key={employees.id}
                  id={employees.id}
                  name={employees.name}
                  dept={employees.department}
                />
                <button
                  onClick={searchCancel}
                  style={{ border: "0" }}
                  className="card-link"
                >
                  Back
                </button>
              </div>
            ) : (
              employees.map((data) => {
                return (
                  <EmployeeCard
                    route={true}
                    key={data.id}
                    id={data.id}
                    name={data.name}
                    dept={data.department}
                  />
                );
              })
            )}
          </div>
        </>
      )}
      <div
        className="tree"
        style={{
          position: "absolute",
          left: "0",
          bottom: "40px",
          height: "15vh",
          width: "15vw",
        }}
      >
        <img
          src="https://res.cloudinary.com/andreahabib/image/upload/v1638827798/tree_dwjldb.svg"
          alt="xmas tree"
        />
      </div>
      <div
        className="tree"
        style={{
          position: "absolute",
          right: "0",
          bottom: "40px",
          height: "15vh",
          width: "15vw",
        }}
      >
        <img
          src="https://res.cloudinary.com/andreahabib/image/upload/v1638827798/tree_dwjldb.svg"
          alt="xmas tree"
        />
      </div>
    </div>
  );
}
