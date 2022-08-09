import { Button as MuiButton, makeStyles } from '@material-ui/core';

const styles = makeStyles(theme  => ({
    root: {
        margin: theme.spacing(0.5)
    },
    label: {
        textTransform: 'none'
    }
}))

function Button(props) {

    const { text, size, variant, onClick, color, ...other } = props;
    const classes = styles();

    return (
        <MuiButton
            variant={variant || "contained"}
            size={size  || "large"}
            color={color || "primary"}
            onClick={onClick}
            {...other}
            classes={{root: classes.root, label: classes.label}}
            >
            {text}
        </MuiButton>
    )
}

export default Button