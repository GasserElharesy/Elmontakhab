// Corrected file name casing
import GenderPicker from "./genderpicker"; // Corrected file name casing
import FileUpload from "./FileUpload"; // Assuming FileUpload.jsx is the name of your component file

export default function orgregpg() {
  return (
    <div>
      {" "}
      <div>
        {" "}
        <p>first name</p> <textbox />
      </div>
      <div>
        {" "}
        <p>last name</p> <textbox />
      </div>
      <div>
        {" "}
        <p>pick your gender</p>
        <GenderPicker />
      </div>
      <div>
        {" "}
        <p> email,</p> <textbox />
      </div>
      <div>
        {" "}
        <p>password </p> <textbox />
      </div>
      <div>
        {" "}
        <p>first name</p> <textbox />
      </div>
      <div>
        {" "}
        <p>contact number</p> <textbox />
      </div>
      <div>
        {" "}
        <p>Organiztion Name </p> <textbox />
      </div>
      <div>
        {" "}
        <p>Organiztion address </p> <textbox />
      </div>
      <div>
        {" "}
        <p>Organiztion area </p> <textbox />
      </div>
      <div>
        {" "}
        <p>Organiztion governate </p> <textbox />
      </div>
      <div>
        {" "}
        <p>Organiztion documents </p> <FileUpload />
      </div>
    </div>
  );
}
