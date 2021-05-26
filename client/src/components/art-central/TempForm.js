import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import SaveIcon from '@material-ui/icons/Save';
import DeleteIcon from '@material-ui/icons/Delete';
import {useState} from 'react'

const AddForm = ({onAdd}) => {
    const[title, setTitle] = useState('');
    const[creator, setCreator] = useState('');
    const[description, setDescription] = useState('');

    const onSave = (e) =>{
        e.preventDefault(); //prevents page reload

        if(!title){         //some text validation
            alert('Please add a title');
            return;
        }
        const impact = 0;
        const starred = false;

        //we want to pass information from this form up App.js to be added to the artInfo array
        onAdd({title,creator,starred,description,impact}); 

        //could make this a "snackbar"
        alert('Your card has been added!');

         //reset values
        setTitle('');                                    
        setCreator('');
        setDescription('');
    }

    const onDiscard = (e) => {
        e.preventDefault();

        setTitle('');                                    
        setCreator('');
        setDescription('');

        alert('Successfully discarded')
    }

    //---Material UI Styles ---
    const useStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
      }));
    const classes = useStyles();


    return (
    <div className="AddForm">
        <h3>Add an art stall</h3>
        <form className={classes.root} noValidate autoComplete="off">
            <div><TextField id="standard-basic" label="Title of Work" value={title} onChange={(e) => setTitle(e.target.value)}/></div>
            <div><TextField id="standard-basic" label="Creator Name" value={creator} onChange={(e) => setCreator(e.target.value)}/></div>
            <div><TextField id="standard-basic" label="Description" value={description} onChange={(e) => setDescription(e.target.value)}/></div>
            
            <div>
                <ButtonGroup variant="contained">
                <Button startIcon={<SaveIcon/>} color="primary" onClick={onSave}>Save</Button>
                <Button startIcon={<DeleteIcon/>} color="secondary" onClick={onDiscard}>Discard</Button>
                </ButtonGroup>
            </div>
        </form>
    </div>

    )
}

export default AddForm;