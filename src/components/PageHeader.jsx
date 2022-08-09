import { Card, makeStyles, Paper, Typography } from '@material-ui/core'

const styles = makeStyles(theme =>({
    root: {
        backgroundColor: '#f2f2ff'
    },
    pageHeader: {
        padding: theme.spacing(2),
        display: 'flex',
        marginBottom: theme.spacing(2)
    },
    pageIcon: {
        display: 'inline-block',
        padding: theme.spacing(2),
        icon: '#3c44b1'
    },
    pageTitle: {
        paddingLeft: theme.spacing(4),
        '& .MuiTypography-subtitle2': {
            opacity: '0.6'
        },
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    }
}))

function PageHeader(props) {

    const { title, subtitle, icon } = props;
    const classes = styles();

  return (
    <Paper elevation={0} square className={classes.root}>
        <div className={classes.pageHeader}>
            <Card className={classes.pageIcon}>
                {icon}
            </Card> 
            <div className={classes.pageTitle}>
                <Typography   
                    variant="h6"
                    component="div"
                >
                    {title}
                </Typography>
                <Typography   
                    variant="subtitle2"
                >
                    {subtitle}
                </Typography>
            </div>    
        </div>
    </Paper>
  )
}

export default PageHeader