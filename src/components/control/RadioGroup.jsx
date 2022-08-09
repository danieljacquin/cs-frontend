import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup as MuiRadioGroup } from '@material-ui/core';

function RadioGroup(props) {

    const { value, name, label, onChange, items } = props;

    return (
        <FormControl>
            <FormLabel>{label}</FormLabel>
            <MuiRadioGroup row
                name={name}
                value={value}
                onChange={onChange}
            >
                {
                    items.map(gender => (
                        <FormControlLabel key={gender.id} value={gender.id} control={<Radio />} label={gender.title} />
                    ))
                }
            </MuiRadioGroup>
        </FormControl>
    )
}

export default RadioGroup