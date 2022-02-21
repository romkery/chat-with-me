const validateField = (key: string, formik: any) => {
    if (formik.touched[key]) {
        if (formik.errors[key]) {
            return 'error';
        } else {
            return 'success';
        }
    } else {
        return '';
    }
};

export default validateField;
