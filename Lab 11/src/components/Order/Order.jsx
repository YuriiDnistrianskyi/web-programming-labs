import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import "./styleOrder.css"

function Order() {

    const validationSchema = Yup.object().shape({
        firstName: Yup.string().required("First Name is required"),
        lastName: Yup.string().required("Last Name is required"),
        email: Yup.string().email("Not valid email format").required("Email is required"),
        phone: Yup.string().min(10, "Not valid phone (very small)").max(13, "Not valid phone (very long)").required("Phone is required"),
        address: Yup.string().required("Address is required")
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const controllerSubmit = () => {
        dispatch({type: "REMOVE"});
        navigate("/success");
    }

    return (
        <Formik
            initialValues={{ 
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                address: "",
            }}
            validationSchema={validationSchema}
            onSubmit={controllerSubmit}
        >
            {() => (
                <Form>
                    <h1 className="order-text">Checkout</h1>
                    <div className="order__box">
                        <div className="order__box-1">

                            <div className="box-1-element">
                                <label className="box-1-label" htmlFor="firstName">First Name</label>
                                <Field
                                    className="box-1-field"
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    placeholder="First Name"
                                />
                                <ErrorMessage name="firstName" component="div" className="error" />
                            </div>
                            <div className="box-1-element">
                                <label className="box-1-label" htmlFor="lastName">Last Name</label>
                                <Field
                                    className="box-1-field"
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    placeholder="Last Name"
                                />
                                <ErrorMessage name="lastName" component="div" className="error" />
                            </div>
                            
                        </div>
                        <div className="order__box-1">

                            <div className="box-1-element">
                                <label className="box-1-label" htmlFor="email">Email</label>
                                <Field
                                    className="box-1-field"
                                    type="text"
                                    id="email"
                                    name="email"
                                    placeholder="Email"
                                />
                                <ErrorMessage name="email" component="div" className="error" />
                            </div>
                            <div className="box-1-element">
                                <label className="box-1-label" htmlFor="phone">Phone</label>
                                <Field
                                    className="box-1-field"
                                    type="text"
                                    id="phone"
                                    name="phone"
                                    placeholder="Phone"
                                />
                                <ErrorMessage name="phone" component="div" className="error" />
                            </div>

                        </div>

                        <div className="order__box-2">
                            <label className="box-1-label" htmlFor="Address">Address</label>
                            <Field
                                className="box-1-field"
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                            />
                            <ErrorMessage name="address" component="div" className="error" />
                        </div>
                    </div>
                    <div className="order__menu">
                        <NavLink to="/card" className="order__menu-nl">
                            <button className="order-page-button">Go Back</button>
                        </NavLink>
                        <button type="submit" className="order-page-button order-continue">Continue</button>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Order;
