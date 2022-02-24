import Form from "../Components/Form";
import "./New.css";

const New = () => {
  return (
    <div className="New">
      <h2>New Item</h2>
      <Form edit={false} />
    </div>
  );
};

export default New;
