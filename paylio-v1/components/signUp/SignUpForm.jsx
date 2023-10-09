const SignUpForm = () => {
  return (
    <form action="#">
      <div className="row">
        <div className="col-12">
          <div className="single-input">
            <label htmlFor="logemail">Your Email</label>
            <input
              type="text"
              id="logemail"
              placeholder="Enter Your Email"
              required
            />
          </div>
          <div className="single-input">
            <label htmlFor="logpassword">Your Password</label>
            <input
              type="text"
              id="logpassword"
              placeholder="Enter Your Password"
              required
            />
          </div>
          <button className="cmn-btn w-100">Submit</button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
