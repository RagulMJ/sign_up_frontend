import axios from 'axios';
import { Formik } from 'formik';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './login.scss';

function Profile() {
  const navigate = useNavigate();

  const initialValues = {
    age: '',
    gender: '',
    dob: '',
    mobile: '',
    address: '',
  };

  const validate = (values) => {
    let errors = {};
    return errors;
  };

  const submitForm = async (values) => {
    console.log(values);
    await axios.put(
      'https://signupbackend-production.up.railway.app/api/users/profile',
      values
    );
    navigate('/login');
    // console.log(userData.data)
  };

  return (
    <Formik
      initialValues={initialValues}
      validate={validate}
      onSubmit={submitForm}
    >
      {(formik) => {
        const {
          values,
          handleChange,
          handleSubmit,
          errors,
          touched,
          handleBlur,
          isValid,
          dirty,
        } = formik;
        return (
          <div className="container">
            <h1 className="text-center">Additional Details</h1>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <label htmlFor="age">Age</label>
                <input
                  type="number"
                  name="age"
                  id="age"
                  value={values.age}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.age && touched.age ? 'input-error' : null}
                />
                {errors.age && touched.age && (
                  <span className="error">{errors.age}</span>
                )}
              </div>

              <div className="form-row">
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  value={values.gender}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.gender && touched.gender ? 'input-error' : null
                  }
                />
                {errors.gender && touched.gender && (
                  <span className="error">{errors.gender}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="dob">Date Of Birth</label>
                <input
                  type="text"
                  name="dob"
                  id="dob"
                  value={values.dob}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={errors.dob && touched.dob ? 'input-error' : null}
                />
                {errors.dob && touched.dob && (
                  <span className="error">{errors.dob}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  type="number"
                  name="mobile"
                  id="mobile"
                  value={values.mobile}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.mobile && touched.mobile ? 'input-error' : null
                  }
                />
                {errors.mobile && touched.mobile && (
                  <span className="error">{errors.mobile}</span>
                )}
              </div>
              <div className="form-row">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  value={values.address}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.address && touched.address ? 'input-error' : null
                  }
                />
                {errors.address && touched.address && (
                  <span className="error">{errors.address}</span>
                )}
              </div>
              <Link to="/login">
                <button
                  type="submit"
                  className={!(dirty && isValid) ? 'disabled-btn' : ''}
                  disabled={!(dirty && isValid)}
                >
                  Submit
                </button>
              </Link>
            </form>
            <Link to="/login">
              <h3 className="text-center">Signup</h3>
            </Link>
          </div>
        );
      }}
    </Formik>
  );
}

export default Profile;
