import PortfolioForm from './components/signUpForm';

const PortfolioNew = () => {

  const handleRegister = data => {
    alert(JSON.stringify(data));
  }

  return (
    <div className="bwm-form mt-5">
      <div className="row">
        <div className="col-md-5 mx-auto">
          <h1 className="page-title">Create New Account</h1>
          <PortfolioForm />
          <PortfolioForm
            onSubmit={handleRegister}
          />
        </div>
      </div>
    </div>
  )
}
export default PortfolioNew;
