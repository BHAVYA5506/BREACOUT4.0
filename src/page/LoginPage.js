
export default function LoginPage () {
  const backgroundStyle = {
    background: 'linear-gradient(135deg, #007BFF, #FFA500)',
    height: '100vh',
  };
  return (
    <div>
    <section className="vh-100" style={backgroundStyle}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://images.prismic.io/ieeemuj/52a82eb6-9353-49a8-9e93-e1cdf9d5b370_Breacout.png?auto=compress,format"
                    alt="login form"
                    className="img-fluid"
                    style={{ borderRadius: '1rem 0 0 1rem', height: '600px' }}
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <form>
                      <div className="d-flex align-items-center mb-3 pb-1">
                      <i  class="fas fa-puzzle-piece" style={{ color: '#ff6219' , fontSize: '2rem', letterSpacing:'5px' }}></i>
                        <span className="h1 fw-bold mb-0">Breacout 4.0</span>
                      </div>
                      <h5 className="fw-normal mb-3 pb-3" style={{ letterSpacing: '1px' }}>
                        Sign into your account
                      </h5>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="form2Example17">
                          Email address
                        </label>
                        <input type="email" id="form2Example17" className="form-control form-control-lg" />
                      </div>
                      <div className="mb-4">
                        <label className="form-label" htmlFor="form2Example27">
                          Password
                        </label>
                        <input type="password" id="form2Example27" className="form-control form-control-lg" />
                      </div>
                      <div className="pt-1 mb-4">
                        <button className="btn btn-dark btn-lg btn-block" type="button">
                          Login
                        </button>
                      </div>
                      
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}