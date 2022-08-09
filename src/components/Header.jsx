import { AppBar, Badge, Grid, IconButton, InputBase, makeStyles, Toolbar } from "@material-ui/core";
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import PowerSettingsNewIcon from '@material-ui/icons/PowerSettingsNew';
import SearchIcon from '@material-ui/icons/Search';
import Users from "../pages/user/Users";

const useStyles = makeStyles(theme => ({
    header: {
        paddingLeft: '300px',
        width: '100%'
    },
    root: {
        backgroundColor: '#fff',
        transform: 'translateZ(0)'
    },
    seaerchInput: {
        opacity: '0.6',
        padding: `0px ${theme.spacing(1)}px`,
        fontSize: '0.8rem',
        '&:hover': {
            backgroundColor: '#f2f2f2'
        },
        '& .MuiSvgIcon-root': {
            marginRight: theme.spacing(1)
        }
    }

}))

const Header = () => {

    const classes = useStyles();

    return (
        <div className={classes.header}>
            <AppBar position="static" className={classes.root}>
                <Toolbar>
                    <Grid container alignItems="center">
                        <Grid item>
                            <InputBase
                            className={classes.seaerchInput}
                            placeholder="Search topics"
                            startAdornment={<SearchIcon fontSize="small" />}
                            />
                        </Grid>
                        <Grid item sm></Grid>
                        <Grid item>
                            <IconButton>
                                <Badge badgeContent={4} color="secondary">
                                    <NotificationsNoneIcon fontSize="small"/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge badgeContent={3} color="primary">
                                    <ChatBubbleOutlineIcon fontSize="small"/>
                                </Badge>
                            </IconButton>
                            <IconButton>
                                <Badge>
                                    <PowerSettingsNewIcon fontSize="small"/>
                                </Badge>
                            </IconButton>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
            <Users/>
        </div>
    )
}

export default Header;