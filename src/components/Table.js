const Table = ({ employeeDetails }) => {
  return (
    <div className="py-10">
      <div className="lg:w-2/3 w-full mx-auto overflow-auto">
        <table className="table-auto w-full text-left whitespace-no-wrap">
          <thead>
            <tr>
              <th className="header rounded-tl rounded-bl">Firstname</th>
              <th className="header">Lastname</th>
              <th className="header">Age</th>
              <th className="header rounded-tr rounded-br">City</th>
            </tr>
          </thead>
          <tbody>
            {employeeDetails?.map((employee) => (
              <tr>
                <td className="px-4 py-3">{employee.firstname}</td>
                <td className="px-4 py-3">{employee.lastname}</td>
                <td className="px-4 py-3">{employee.age}</td>
                <td className="px-4 py-3">{employee.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
