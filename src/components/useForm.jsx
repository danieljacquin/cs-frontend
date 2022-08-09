import { makeStyles } from "@material-ui/core";
import { useState } from "react";

function useForm(initialValues, validationOnChange=false, validate) {

    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setValues({
            ...values,
            [name]: value
        })
        if(validationOnChange)
        validate({[name]: value})
    }

    const resetForm = () => {
        setValues(initialValues);
        setErrors({});
    }

  return {
    values,
    handleInputChange,
    errors,
    setErrors,
    resetForm,
    setValues
  }
}

export default useForm

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiFormControl-root ': {
            width: '80%',
            margin: theme.spacing(1)
        }
    }
}))


export function FormContainer(props){

    const classes = useStyles();
    const { children, ...other} = props;

    return (
        <form className={classes.root} autoComplete="off" {...other}>
            {children}
        </form>
    )
}