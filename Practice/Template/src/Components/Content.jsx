


export const Content = () => {
  return <>
        <div className="container mt-4">
      <div className="row">
        
        
        <div className="col-md-3 mb-3">
          <div className="bg-light p-3 shadow-sm rounded">
            <h5>Sidebar</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-decoration-none">Dashboard</a></li>
              <li><a href="#" className="text-decoration-none">Profile</a></li>
              
            </ul>
          </div>
        </div>

       
        <div className="col-md-9">
          <div className="bg-white p-4 shadow-sm rounded">
            <h2>Main Content</h2>
            <p>
              This is your main content area. 
            </p>

            
            <div className="row">
              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5>Card 1</h5>
                  <p>Some quick content</p>
                </div>
              </div>

              <div className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5>Card 2</h5>
                  <p>Some quick content</p>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </>
};

export default Content;