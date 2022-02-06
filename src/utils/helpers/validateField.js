const validateField = (key, formik) => {
    if (formik.touched[key]) {
        if (formik.errors[key]) {
            return "error"
        } else {
            return 'success'
        }
    } else {
        return ''
    }
}

export default validateField