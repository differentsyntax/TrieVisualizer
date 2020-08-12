import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { TextField, Button, MenuItem } from '@material-ui/core'
// import countries from '../data/country'
// import majors from '../data/majors'
import swal from 'sweetalert';
import { render } from '@testing-library/react'

const formURL = "http://localhost:5000/searchWord/find"

const GetWord = () => (
	<div id = "input-word">
		<Formik
			initialValues={{
					word: ''
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
						console.log("Hey!")
						
						if (response.target.status === 200) {
							console.log(response.target.response)
							displayDiagram(response.target.response);
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
							<Field fullWidth label = "app" margin = "normal" placeholder="app" variant = "outlined" type="name" name="word" as={TextField}/>
							<div className = "errors">
							<ErrorMessage name="word"/>
							</div>
						</div>
						<div>
							<Button id = "input-words-search" fullWidth variant="outlined" color = "primary" type="submit" disabled={isSubmitting}>
								Search
							</Button>
						</div>
					</div>
				</Form>
      )}
    </Formik>
	</div>
)

function displayDiagram(data) {
	// var data = JSON.parse(data)
	console.log(data)
	document.getElementById("found").innerHTML = "<pre> " + data + "</pre>"
}

const validationSchema = yup.object().shape(
	{
		word: yup
		.string('*should be a string')
		.required('*required field')
	}
)


export default GetWord