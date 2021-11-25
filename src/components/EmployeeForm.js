import { uuid } from "uuidv4";

const EmployeeForm = ({
  formData,
  setFormData,
  employeeDetails,
  setEmployeeDetails,
}) => {
  const onAddFormChange = (e) => {
    e.preventDefault();
    const fieldName = e.target.getAttribute("name");
    const fieldValue = e.target.value;
    const newFormData = { ...formData };
    newFormData[fieldName] = fieldValue;
    setFormData(newFormData);
  };

  const onSubmitData = (e) => {
    e.preventDefault();
    let newDetail = {
      id: uuid(),
      firstname: formData.firstname,
      lastname: formData.lastname,
      age: formData.age,
      city: formData.city,
    };

    const newDetails = [...employeeDetails, newDetail];
    setEmployeeDetails(newDetails);
  };

  return (
    <div>
      <div className="flex flex-col text-center w-full mb-12">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
          Employee Details
        </h1>
      </div>
      <form
        className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end"
        onSubmit={onSubmitData}
      >
        <div className="relative flex-grow w-full">
          <label for="firstname" className="form-label">
            Firstname
          </label>
          <input
            type="text"
            name="firstname"
            className="form-input"
            onChange={onAddFormChange}
          />
        </div>
        <div className="relative flex-grow w-full">
          <label for="text" className="form-label">
            Lastname
          </label>
          <input
            type="text"
            name="lastname"
            className="form-input"
            onChange={onAddFormChange}
          />
        </div>
        <div className="relative flex-grow w-full">
          <label for="text" className="form-label">
            Age
          </label>
          <input
            type="number"
            name="age"
            className="form-input"
            onChange={onAddFormChange}
          />
        </div>
        <div className="relative flex-grow w-full">
          <label for="text" className="form-label">
            City
          </label>
          <input
            type="text"
            name="city"
            className="form-input"
            onChange={onAddFormChange}
          />
        </div>
        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          Add
        </button>
      </form>
    </div>
  );
};

export default EmployeeForm;
