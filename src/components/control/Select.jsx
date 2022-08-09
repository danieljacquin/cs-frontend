import { FormControl, FormHelperText, InputLabel, MenuItem, Select as MuiSelect } from "@material-ui/core";

function Select(props) {

    const { value, label, name, error=null, onChange, options } = props;

  return (
        <FormControl
          variant="outlined"
          {...(error && {error:true})}
        >
          <InputLabel>{label}</InputLabel>
          <MuiSelect
            label={label}
            name={name}
            value={value}
            onChange={onChange}>

            <MenuItem value="">None</MenuItem>
            {
              options.map(option => (<MenuItem key={option.id} value={option.id}>{option.name}</MenuItem>))
            }
          </MuiSelect>
          {error && <FormHelperText>{error}</FormHelperText>}
        </FormControl>
  )
}

export default Select