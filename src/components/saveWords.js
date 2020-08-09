import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'
import { TextField, Button, MenuItem } from '@material-ui/core'
// import Autocomplete from '@material-ui/lab/Autocomplete'
// import countries from '../data/country'
// import majors from '../data/majors'
import swal from 'sweetalert';

const formURL = "https://q4c0oh5zd6.execute-api.us-east-1.amazonaws.com/Prod/submitForm"

const SaveWords = () => (
	<h1>Hey!</h1>
)

export default SaveWords