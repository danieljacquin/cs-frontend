import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  sideMenu: {
    backgroundColor: '#253053',
    width: '300px',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    position: 'absolute',
    left: '0px'
  }
})

const SideMenu = () => {

    const classes = useStyles()

    return (
        <div className={classes.sideMenu}>
        </div>
    )
}

export default SideMenu;