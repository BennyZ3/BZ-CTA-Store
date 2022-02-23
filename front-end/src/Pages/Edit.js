import Form from "../Components/Form";
import "./Edit.css";

const Edit = () => {
  return (
    <div className="Edit">
      <h2>Edit</h2>
      <Form edit={true} />
    </div>
  );
};

export default Edit;
