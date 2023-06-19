'use client'
import { createContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export default function Login() {

  const formik = useFormik({

    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup
      .string()
      .required("Required")
      .matches(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Invalid Email Address"
      ),
      password: Yup
        .string()
        .min(8, 'Atleast 8 characters')
        .max(35, 'Max 35 characters')
        .required('Required'),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setSubmitting(false);
      resetForm();
      alert('Logged in successfully.')
    },
  });


  return (
    <main className="flex flex-col items-center justify-between p-24">

      <h1 className='text-gray-400 text-2xl font-medium mb-8'>Login</h1>

      <form onSubmit={formik.handleSubmit} className='flex flex-col' >


      <div className='mb-4'>
          <h2 className='text-gray-400 text-xl'>Username</h2>
          {formik.touched.username && formik.errors.username ==="Invalid Email Address"
          ? 
          <input
          id="username"
          name="username"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.username}
          className='border-2 p-2 rounded-md w-full text-black border-red-500'
        /> 
          : 
          <input
            id="username"
            name="username"
            type="text"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.username}
            className='border-2 p-2 rounded-md w-full text-black border-gray-300'
          />}
          {formik.touched.username && formik.errors.username ? <div className='pl-0 text-red-500'>{formik.errors.username}</div> : null}
        </div>



        <div className='mb-4'>
          <h2 className='text-gray-400 text-xl'>Password</h2>
          <input
            id="password"
            name="password"
            type="password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
            className='border-2 p-2  rounded-md w-full text-black border-gray-300'
          />
          {formik.touched.password && formik.errors.password ? <div className='pl-0 text-red-500'>{formik.errors.password}</div> : null}
        </div>

        <button
          type="submit"
          className='col-span-2 bg-[#28358c] text-white rounded-md p-2 hover:bg-[#333333] mt-4'
        >
          Submit
        </button>

      </form>
    </main>
  )
}