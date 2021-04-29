import { useForm } from "react-hook-form";
import { Alert } from 'react-bootstrap';

const firstLetterUpper = iText => {
  if (!iText) { return true; }

  if (iText[0].toUpperCase() === iText[0]) {
    return true;
  }

  return false;
  // return iText[0].toUpperCase() === iText[0];
}

//true -> input is valid
//false -. input is NOT valid

const PortfolioForm = ({onSubmit}) => {
  const { register, handleSubmit, errors } = useForm();
     <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form-group">
        <label htmlFor="title">First Name</label>
        <input
          ref={register({required: true, maxLength: 30, validate: { firstLetterUpper }})}
          name="firstname"
          type="text"
          className="form-control"
          id="title"/>
          { errors.title &&
            <Alert variant="danger">
              { errors.title?.type === "required" && <p>First name is required</p> }
              { errors.title?.type === "firstLetterUpper" && <p>First letter should be uppercased!</p> }
            </Alert>
          }
      </div>

      <div className="form-group">
        <label htmlFor="city">Last Name</label>
        <input
          ref={register({required: true, minLength: 5})}
          name="lastname"
          type="text"
          className="form-control"
          id="lastname"/>
          { errors.lastname &&
            <Alert variant="danger">
              { errors.lastname?.type === "required" && <p>Last name is required</p> }
              { errors.title?.type === "firstLetterUpper" && <p>First letter should be uppercased!</p> }

            </Alert>
          }
      </div>

      <div className="form-group">
        <label htmlFor="city">Email Address</label>
        <input
          ref={register({required: true, pattern: {value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/}})}
          name="emailaddress"
          type="text"
          className="form-control"
          id="emailaddress"/>
          { errors.emailaddress &&
            <Alert variant="danger">
              { errors.emailaddress?.type === "required" && <p>Email is required</p> }
              { errors.emailaddress?.type === "pattern" && <p>Please enter a valid email address</p> }
            </Alert>
          }
      </div>

      <div className="form-group">
        <label htmlFor="description">Your cooking story! (optional)</label>
        <textarea
          ref={register({required: false})}
          name="description"
          rows="5"
          type="text"
          className="form-control"
          id="description">
        </textarea>

      </div>
      <button
        type="submit"
        className="btn btn-primary">Create Account
      </button>
    </form>

};
export default PortfolioForm;
