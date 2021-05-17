import React from 'react'

import { makeStyles } from '@material-ui/core/styles';
import Typography from'@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'


const Confirm = ({nextStep, prevStep, values, addbtn}) => {

    const submitClicked = () => {
        addbtn(); //send data to db and clear form
        nextStep();
    }

    const useStyles = makeStyles((theme) => ({
        root: {
          width: '100%',
          maxWidth: 360,
          backgroundColor: theme.palette.background.paper,
        },
    }));
    const classes = useStyles();

    return (
        <div className="flex-container">
            <div className="MultiForm">
                <Typography variant="h5" align='center'>Confirmation</Typography>
                <List className={classes.root}>
                    <ListItem>
                        <ListItemText primary="Title" secondary={values.title}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Creator Name" secondary={values.creator}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="Description" secondary={values.description}/>
                    </ListItem>
                    <ListItem>
                        <ListItemText primary="File Uploaded" secondary="File name"/>
                    </ListItem>
                </List>
            </div>
            
            <div className="ButtonGroup">
                <ButtonGroup variant="outlined">
                        <Button startIcon={<ArrowBackIosIcon/>} color="primary" onClick={prevStep}>Back</Button>
                        <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={submitClicked}>Submit</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Confirm
