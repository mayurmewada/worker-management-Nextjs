import Link from "next/link";
import { useState, useEffect } from "react";
import React from "react";
import ReactDOM from "react";
import fetch from "isomorphic-unfetch";
import { Form, Button, Loader, TextArea, Input } from "semantic-ui-react";
import { useRouter } from "next/router";
import { route } from "next/dist/next-server/server/router";

const NewWorker = () => {
  const [form, setForm] = useState({
    fullName: "",
    gender: "",
    role: "",
    phoneNo: "",
    alternateNo: "",
    address: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState({});
  const router = useRouter();

  useEffect(() => {
    if (isSubmitting) {
      if (Object.keys(error).length === 0) {
        createWorker();
        // alert("Success");
      } else {
        setIsSubmitting(false);
      }
    }
  }, [error]);

  const createWorker = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/workers/test1", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });
      router.push("http://localhost:3000/");
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let errs = validate();
    setError(errs);
    setIsSubmitting(true);
  };
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let err = {};

    if (!form.fullName) {
      err.fullName = "FullName is required";
    }
    if (!form.gender) {
      err.gender = "Gender is required";
    }
    if (!form.role) {
      err.role = "Role is required";
    }
    if (!form.phoneNo) {
      err.phoneNo = "Phone Number is required";
    }
    if (!form.address) {
      err.address = "Valid Address is required";
    }

    return err;
  };

  return (
    <div className="form-container">
      <h1>Create Worker</h1>
      <div>
        {isSubmitting ? (
          <Loader active inline="centered" />
        ) : (
          <Form onSubmit={handleSubmit}>
            <Form.Input
              fluid
              label="Fullname"
              placeholder="Fullname"
              name="fullName"
              error={
                error.fullName
                  ? { content: "Please Enter Fullname", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Gender"
              placeholder="M/F"
              name="gender"
              error={
                error.gender
                  ? { content: "Please Enter Gender", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Role"
              placeholder="Role/Position"
              name="role"
              error={
                error.role
                  ? {
                      content: "Please Enter Role/Position of Working",
                      pointing: "below",
                    }
                  : null
              }
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Phone No."
              placeholder="Phone Number"
              name="phoneNo"
              error={
                error.phoneNo
                  ? { content: "Please Enter Phone Number", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <Form.Input
              fluid
              label="Alternate No."
              placeholder="Alternate/Emergency Number"
              name="alternateNo"
              onChange={handleChange}
            />
            <Form.TextArea
              fluid
              label="Address"
              placeholder="Address"
              name="address"
              error={
                error.address
                  ? { content: "Please Enter Valid Address", pointing: "below" }
                  : null
              }
              onChange={handleChange}
            />
            <Button type="submit">Add</Button>
          </Form>
        )}
      </div>
    </div>
  );
};

export default NewWorker;
