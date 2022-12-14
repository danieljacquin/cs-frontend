import { Dialog, DialogContent, DialogTitle, makeStyles, Typography } from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

import controls from '../components/control/controls';
const useStyles = makeStyles(theme => ({
    dialogWrapper: {
        padding: theme.spacing(2),
        position: 'absolute',
        top: theme.spacing(5)
    },
    dialogTitle: {
        paddingRight: '0px',
    }
}))

function Popup(props) {

    const { title, children, openPopup, setOpenPopup } = props;
    const classes = useStyles(); 

  return (
    <Dialog open={openPopup} maxWidth="md" classes={{paper: classes.dialogWrapper}}>
        <DialogTitle className={classes.dialogTitle}>
            <div style={{display:'flex'}}>
                <Typography variant="h6" component="div" style={{flexGrow: 1}}>{title}</Typography>
                <controls.ActionButton
                    color="secondary"
                    text="x"
                    onClick={() => setOpenPopup(false)}
                >
                    <CloseIcon/>
                </controls.ActionButton>
            </div>
        </DialogTitle>
        <DialogContent dividers>
            {children}
        </DialogContent>
    </Dialog>
  )
}

export default Popup