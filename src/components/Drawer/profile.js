import React from "react";

export const Profile = () => {
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-md-12 col-xl-4">
              <div className="card" style={{ borderRadius: 15 }}>
                <div className="card-body text-center">
                  <div className="mt-3 mb-4">
                    <img
                      class="rounded-circle mt-5"
                      width="100px"
                      src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                    />
                  </div>
                  <h4 className="mb-2">Julie L. Arsenault</h4>
                  <p className="text-muted mb-4">
                    @Programmer <span className="mx-2">|</span>{" "}
                    <a href="#!">mdbootstrap.com</a>
                  </p>
                  <div className="mb-4 pb-2">
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-floating"
                    >
                      <i className="fab fa-facebook-f fa-lg" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-floating"
                    >
                      <i className="fab fa-twitter fa-lg" />
                    </button>
                    <button
                      type="button"
                      className="btn btn-outline-primary btn-floating"
                    >
                      <i className="fab fa-skype fa-lg" />
                    </button>
                  </div>
                  <button
                    type="button"
                    className="btn btn-primary btn-rounded btn-lg"
                  >
                    Message now
                  </button>
                  <div className="d-flex justify-content-between text-center mt-5 mb-2">
                    <div>
                      <p className="mb-2 h5">8471</p>
                      <p className="text-muted mb-0">Wallets Balance</p>
                    </div>
                    <div className="px-3">
                      <p className="mb-2 h5">8512</p>
                      <p className="text-muted mb-0">Income amounts</p>
                    </div>
                    <div>
                      <p className="mb-2 h5">4751</p>
                      <p className="text-muted mb-0">Total Transactions</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
