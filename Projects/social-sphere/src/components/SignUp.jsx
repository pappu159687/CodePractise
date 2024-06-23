import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    userName: "",
    password: "",
    avatar: null,
    // coverImage: null,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", formData.fullName);
    data.append("email", formData.email);
    data.append("userName", formData.userName);
    data.append("password", formData.password);
    data.append("avatar", formData.avatar);
    // data.append("coverImage", formData.coverImage);

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/users/register",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("User Registered Successfully");

      navigate("/login");
    } catch (error) {
      // console.error("Error during signup:", error.response.data);
      // alert();

      if (error.response && error.response.status === 408) {
        alert("Email Already Exist");
      } else if (error.response && error.response.status === 409) {
        alert("Username Already Exist");
      } else {
        console.error("Error during signup:", error.response.data);
        alert("An error occurred during sign-up. Please try again.");
      }
    }
  };

  return (
    <section
      className="vh-70 bg-image"
      style={{
        backgroundImage:
          "url('https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp')",
      }}
    >
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: "15px" }}>
                <div className="card-body p-5">
                  <h2 className="text-uppercase text-center mb-5">
                    Create an account
                  </h2>

                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="userName"
                        name="userName"
                        value={formData.userName}
                        className="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="userName">
                        Username
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="name"
                        name="fullName"
                        value={formData.fullName}
                        className="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="fullName">
                        Full Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        className="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="email">
                        Your Email
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        className="form-control form-control-lg"
                        onChange={handleChange}
                      />
                      <label className="form-label" htmlFor="password">
                        Password
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="file"
                        id="avatar"
                        name="avatar"
                        className="form-control form-control-lg"
                        onChange={handleFileChange}
                      />
                      <label className="form-label" htmlFor="avatar">
                        Avatar Image
                      </label>
                    </div>

                    {/* <div className="form-outline mb-4">
                      <input
                        type="file"
                        id="coverImage"
                        name="coverImage"
                        className="form-control form-control-lg"
                        onChange={handleFileChange}
                      />
                      <label className="form-label" htmlFor="avatar">
                        Cover Image
                      </label>
                    </div> */}

                    <div className="form-check d-flex justify-content-center mb-5">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example3cg"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example3g"
                      >
                        I agree all statements in{" "}
                        <a href="#!" className="text-body">
                          <u>Terms of service</u>
                        </a>
                      </label>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                      >
                        Register
                      </button>
                    </div>
                    <p className="text-center text-muted mt-5 mb-0">
                      Have already an account?{" "}
                      <a href="#!" className="fw-bold text-body">
                        <u>Login here</u>
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
