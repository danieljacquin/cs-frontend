import { TextField } from "@material-ui/core"

function Input(props) {

    const { value, name,  label, error=null, onChange, ...other } = props;

    return (
        <TextField
            variant="outlined"
            label={label}
            name={name}
            value={value}
            onChange={onChange}
            {...other}
            {...(error && {error:true, helperText: error})}
        />

    )
}

export default Input