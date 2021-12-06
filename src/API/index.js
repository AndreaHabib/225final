import axios from "axios";

export const fetchEmployees = async (setEmployees) => {
  await axios
    .get("https://statenweb.mockable.io/employees")
    .then((response) => {
      setEmployees(response.data);
    })
    .catch((e) => console.log(e.response));
};

export const fetchEmployee = async (setEmployee, id) => {
  await axios
    .get(`https://statenweb.mockable.io/employee/${id}`)
    .then((response) => {
      setEmployee(response.data);
    })
    .catch((e) => console.log(e.response));
};
