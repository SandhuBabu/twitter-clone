import React from 'react'
import { useFormik } from 'formik'
import { Button, Grid, TextField } from '@mui/material'
import { object, string, } from 'yup'
import { blue } from '@mui/material/colors'


const validationSchema = object({
    email: string().email("Invalid Email").required("Email is required"),
    password: string().required("Password is required")
})

const SignInForm = () => {

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validationSchema,
        onSubmit: values => console.log('@FORMIK_VALUES' + values)
    })

    return (
        <form>
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Email"
                        name='email'
                        variant='outlined'
                        size='large'
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.email && Boolean(formik.errors.email)}
                        helperText={formik.touched.email && formik.errors.email}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        fullWidth
                        label="Password"
                        name='password'
                        type='password'
                        variant='outlined'
                        size='large'
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.password && Boolean(formik.errors.password)}
                        helperText={formik.touched.password && formik.errors.password}
                    />
                </Grid>

                <Grid className='mt-20' item xs={12}>
                    <Button
                        sx={{ borderRadius: '30px', py: '15px', bgcolor: blue[500] }}
                        type='submit'
                        fullWidth
                        variant='contained'
                        size='large'
                    >signin</Button>
                </Grid>
            </Grid>
        </form>
    )
}

export default SignInForm