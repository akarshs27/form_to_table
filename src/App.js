import { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import Table from "./components/Table";

function App() {
  const [employeeDetails, setEmployeeDetails] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    age: "",
    city: "",
  });

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-10 mx-auto">
        <EmployeeForm
          formData={formData}
          setFormData={setFormData}
          employeeDetails={employeeDetails}
          setEmployeeDetails={setEmployeeDetails}
        />
        {employeeDetails.length > 0 ? (
          <>
            <Table employeeDetails={employeeDetails} />
          </>
        ) : (
          ""
        )}
      </div>
    </section>
  );
}

export default App;
