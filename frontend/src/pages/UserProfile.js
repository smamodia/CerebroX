import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/userProf.css";
import "font-awesome/css/font-awesome.min.css";
import Vid from "../travelAssets/USER_PROF.mp4";

const UserProfile = () => {
  const [showTab, setShowTab] = useState("account-general");

  useEffect(() => {
    const container = document.querySelector(".container");
    if (container) {
      container.classList.add("show");
    }
  }, []);

  const handleTabClick = (tabId) => {
    setShowTab(tabId);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    const confirmed = window.confirm("Are you sure you want to delete your account?");
    if (confirmed) {
      fetch("/delete-account", { method: "DELETE" })
        .then((response) => {
          if (response.ok) {
            alert("Account deleted successfully!");
            window.location.href = "/";
          } else {
            alert("Failed to delete account. Please try again.");
          }
        })
        .catch((err) => {
          console.error("Error deleting account:", err);
          alert("An error occurred. Please try again.");
        });
    }
  };

  return (
    <div>
      <video autoPlay muted className="background-video">
        <source src={Vid} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <div className="container light-style flex-grow-1 container-p-y">
        <h4 className="font-weight-bold py-3 mb-4">USER PROFILE</h4>
        <div className="card overflow-hidden">
          <div className="row no-gutters row-bordered row-border-light">
            <div className="col-md-3 pt-0">
              <div className="list-group list-group-flush account-settings-links">
                <button
                  className={`list-group-item list-group-item-action ${
                    showTab === "account-general" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("account-general")}
                >
                  General
                </button>
                <button
                  className={`list-group-item list-group-item-action ${
                    showTab === "account-info" ? "active" : ""
                  }`}
                  onClick={() => handleTabClick("account-info")}
                >
                  Info
                </button>
                <button
                  className="list-group-item list-group-item-action"
                  style={{
                    color: "rgb(186, 46, 15)",
                    fontSize: "14px",
                    fontWeight: "bold",
                  }}
                  onClick={handleLogout}
                >
                  <i className="fa fa-sign-out" style={{ fontSize: "15px" }}></i> Log Out
                </button>
              </div>
            </div>

            <div className="col-md-9">
              <div className="tab-content">
                {showTab === "account-general" && (
                  <div className="tab-pane fade active show" id="account-general">
                    <div className="card-body media align-items-center">
                      <img
                        src="https://cdn-icons-png.freepik.com/256/1160/1160622.png?semt=ais_hybrid"
                        alt=""
                        className="d-block ui-w-80"
                      />
                      <div className="media-body ml-4">
                        <label className="btn btn-outline-primary">
                          + 
                          <input type="file" className="account-settings-fileinput" />
                        </label>
                        <button type="button" className="btn btn-default md-btn-flat">
                          Reset
                        </button>
                        <div className="text-light small mt-1"></div>
                      </div>
                    </div>
                    {/*GENERAL INFO */}
                    <hr className="border-light m-0" />
                    <div className="card-body">
                      <div className="form-group">
                        <label className="form-label">Username :</label>
                        <input type="text" className="form-control mb-1" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Name :</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">E-mail:</label>
                        <input type="text" className="form-control mb-1" />
                      </div>
                    </div>
                  </div>
                )}
                {/*ACCOUNT INFO */}
                {showTab === "account-info" && (
                  <div className="tab-pane fade active show" id="account-info">
                    <div className="card-body pb-2">
                      <div className="form-group">
                        <label className="form-label">Bio :</label>
                        <textarea
                          className="form-control"
                          rows="1"
                          placeholder="Write more about yourself..."
                        ></textarea>
                      </div>
                      <div className="form-group">
                        <label className="form-label">Birthday :</label>
                        <input type="text" className="form-control" />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Country :</label>
                        <select className="custom-select">
                          <option selected>none</option>
                          <option>USA</option>
                          <option >Canada</option>
                          <option>Germany</option>
                          <option>India</option>
                        </select>
                      </div>
                    </div>
                    <hr className="border-light m-0" />
                    <div className="card-body pb-2">
                      <h6 className="mb-1">Contacts</h6>
                      <div className="form-group">
                        <label className="form-label">Phone :</label>
                        <input type="text" className="form-control" />
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="text-right mt-0">
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
          <button type="button" className="btn btn-default">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
