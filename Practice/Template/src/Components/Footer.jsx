
export const Footer = () => {
  return <>
        <footer className="bg-dark text-light pt-4 pb-2 mt-5">
      <div className="container">
        <div className="row">
          
          
          <div className="col-md-4 mb-3">
            <h5>Application</h5>
            <p>
              Application created help with Bootstrap..   
            </p>
          </div>

         

         
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: info@myapp.com</p>
            <p>Phone: +91 9876543210</p>
          </div>

        </div>

        <hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            ©  App. All rights reserved.
          </p>
        </div>
      </div>
    </footer>


    </>
};

export default Footer;