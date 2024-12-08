import Form from "../components/Form"
import PatientList from "../components/PatientList"

const Admin = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 lg:w-2/5">
          <Form />
        </div>
        <div className="md:w-1/2 lg:w-2/5">
          <PatientList />
        </div>
      </div>
    </> 
  )
}

export default Admin