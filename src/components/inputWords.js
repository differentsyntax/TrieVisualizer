import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { TextField, Button, MenuItem } from '@material-ui/core'
// import countries from '../data/country'
// import majors from '../data/majors'
import swal from 'sweetalert';
import { render } from '@testing-library/react'
import { Link } from 'react-router-dom'

const formURL = "http://localhost:5000/addWords/save"

const InputWords = () => (
	<div id = "input-word">
		<Formik
			initialValues={{
					wordsArray: ''
			}}
			validationSchema={validationSchema}
			onSubmit={(data, {setSubmitting, resetForm }) => {
					
					setSubmitting(true)
					// make async call
					// alert(JSON.stringify(data, null, 2));
					var xhr = new XMLHttpRequest()
					xhr.open('post', formURL, true)
					xhr.setRequestHeader('Accept', 'application/json; charset=utf-8')
					xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
					xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
					xhr.send(JSON.stringify(data))

					xhr.onloadend = response => {
						
						if (response.target.status === 200) {
							console.log(response.target.response);
						}
						// 	resetForm();
						//  swal("Your info is in! We'll reach out to you soon!")
						// } else {
						// 	swal("There was some error! Please try again!")
						// 	console.error(JSON.parse(response));
						// }
					}

					setSubmitting(false)
        }}
    >
      {({isSubmitting, errors, touched, setFieldValue}) => (
        <Form>
					<div>
						<div className = "input-words-field">
							<Field fullWidth label = "app, application, shop, shopper, awe, awesome..." margin = "normal" placeholder="app, application, shop, shopper, awe, awesome" variant = "outlined" type="name" name="wordsArray" as={TextField}/>
							<div className = "errors">
							<ErrorMessage name="wordsArray"/>
							</div>
						</div>
						<div>
							<Button id = "input-words-submit" fullWidth variant="outlined" color = "primary" type="submit" disabled={isSubmitting}>
								Enter
							</Button>
						</div>
					</div>
				</Form>
      )}
    </Formik>
	</div>
)

const validationSchema = yup.object().shape(
	{
		wordsArray: yup
		.string('*should be a string')
		.required('*required field')
	}
)


export default InputWords