import React from 'react'
import { Container } from 'react-bootstrap'
import { ImArrowUpRight2 } from "react-icons/im";
import { Formik } from 'formik';
import { BiRightArrow } from "react-icons/bi";




function Contact() {
    return (
        <div className="contact-main" id="contact">
            <Container>
                <div className="main-con">
                    <div className="con1">
                        <h5>Feel free to reach out to me. I'm always open to discuss new projects </h5>
                        <div className='stay'>
                            <h6>STAY UP TO DATE</h6>
                            <p>+91-9653364287</p>
                            <p>devanshrajpurohit1@gmail.com</p>
                        </div>
                        <div className='stay'>
                            <h6>ADDRESS</h6>
                            {/* <p className='pp'>223 Thatcher Road St, Brooklyn, Manhattan, NY 10463</p> */}
                            <div className="link-b">
                                <a href="https://www.facebook.com/jitesh.rajpurohit.140">
                                    <div className="icon-con rightt">Facebook <ImArrowUpRight2 className='some' /></div>
                                </a>
                                <a href="https://www.linkedin.com/in/devansh-rajpurohit/">
                                <div className="icon-con">Linkedin <ImArrowUpRight2 className='some' /></div>

                                </a>
                            </div>
                            {/* <div className="link-b">
                                <div className="icon-con rightt">Behance <ImArrowUpRight2 className='some' /></div>
                                <div className="icon-con">Dribbble <ImArrowUpRight2 className='some' /></div>
                            </div> */}


                        </div>

                    </div>
                    <div className="con2">
                        <div className="con-in">
                            <div className='contact-flex'>
                                <Formik
                                    initialValues={{ Name: '', Email: '', Subject: '', Phone: '', Message: '', Pincode: '' }}
                                    validate={values => {
                                        const errors = {};
                                        if (!values.Email) {
                                            errors.Email = ' Email Required';
                                        } else if (
                                            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.Email)
                                        ) {
                                            errors.Email = 'Invalid Email address';
                                        }
                                        if (!values.Name) {
                                            errors.Name = ' Name Required';
                                        }
                                        if (!values.Subject) {
                                            errors.Subject = '  Subject Required';
                                        }
                                        if (!values.Phone) {
                                            errors.Phone = '  Phone Required';
                                        }
                                        if (!values.Message) {
                                            errors.Message = ' Message Required';
                                        }
                                        if (!values.Pincode) {
                                            errors.Pincode = ' Pincode Required';
                                        }
                                        return errors;
                                    }}
                                    onSubmit={(values, { setSubmitting }) => {
                                        setTimeout(() => {
                                            const userdata = {
                                                Name: values.Name,
                                                Email: values.Email,
                                                Subject: values.Subject,
                                                Phone: values.Phone,
                                                Message: values.Message,
                                                Pincode: values.Pincode,


                                            };
                                            console.log(userdata)
                                        }, 400);
                                    }}
                                >
                                    {({
                                        values,
                                        errors,
                                        touched,
                                        handleChange,
                                        handleBlur,
                                        handleSubmit,
                                        isSubmitting,
                                        /* and other goodies */
                                    }) => (


                                        <form onSubmit={handleSubmit}>


                                            <input
                                                placeholder='Name'
                                                type="Name"
                                                name="Name"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Name}
                                            />

                                            <p className='error'> ~{errors.Name && touched.Name && errors.Name}</p>



                                            <input
                                                placeholder='Email'
                                                type="Email"
                                                name="Email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Email}
                                            />

                                            <p className='error'> ~  {errors.Email && touched.Email && errors.Email}</p>



                                            <input
                                                placeholder='Subject'
                                                type="Subject"
                                                name="Subject"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Subject}
                                            />
                                            <p className='error'> ~
                                                {errors.Subject && touched.Subject && errors.Subject}</p>




                                            <input
                                                placeholder='Phone'
                                                type="Phone"
                                                name="Phone"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Phone}
                                            />
                                            <p className='error'> ~
                                                {errors.Phone && touched.Phone && errors.Phone}</p>



                                            <textarea
                                                placeholder='Message'
                                                type="Message"
                                                name="Message"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.Message}
                                            />
                                            <p className='error'> ~
                                                {errors.Message && touched.Message && errors.Message}</p>


                                            <div className="input-last">

                                                <input
                                                    placeholder='Pincode'
                                                    type="Pincode"
                                                    name="Pincode"
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.Pincode}
                                                />
                                                <p className='error'> ~
                                                    {errors.Pincode && touched.Pincode && errors.Pincode}</p>

                                            </div>



                                            <div className="butt">
                                                <button type="submit" disabled={isSubmitting}>
                                                    Submit <span className='arrowww'>
                                                        <BiRightArrow className='arroww' /></span>
                                                </button>
                                            </div>
                                        </form>
                                    )}
                                </Formik>
                            </div>
                        </div>
                    </div>
                </div>

            </Container>

        </div>
    )
}

export default Contact
