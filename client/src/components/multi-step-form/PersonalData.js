import React from "react";
import { useState } from "react";

const PersonalData = ({ nextStep, prevStep, handleChange, values }) => {
    const [ageError, setAgeError] = useState(false);
    const [cityError, setCityError] = useState(false);
    const [expError, setExpError] = useState(false);

    //Check Fields
    const onNext = () => {
        setAgeError(!values.age);
        if (values.age) {
            setAgeError(!Number(values.age));
        }
        setCityError(!values.city);
        setExpError(!values.experience);

        if (values.age && values.city && values.experience) nextStep();
    };

    const handleNext = () => {
        nextStep();
    };

    return (
        <div className="form-container">
            <form>
                <label for="age">Age</label>
                <input
                    id="age"
                    type="text"
                    placeholder="Enter Your Age"
                    value={values.age}
                    onChange={e => handleChange("age", e)}
                ></input>
                <label for="city">City</label>
                <input
                    id="city"
                    type="text"
                    placeholder="City of Origin"
                    value={values.city}
                    onChange={e => handleChange("city", e)}
                ></input>
                <label for="exp">Experience Class</label>
                <select
                    id="exp"
                    value={values.experience}
                    onChange={e => handleChange("experience", e)}
                >
                    <option value="Junior">Junior</option>
                    <option value="Senior">Senior</option>
                    <option value="Pro">Pro</option>
                </select>
                <button onClick={prevStep}>Back</button>
                <button onClick={handleNext}>Next</button>
            </form>
        </div>
    );
};

export default PersonalData;

/*
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Typography from'@material-ui/core/Typography'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';


    const useStyles = makeStyles((theme) => ({
        root: {
            '& > *': {
            margin: theme.spacing(1),
            width: '25ch'
            },
        },
        formControl: {
            display: 'block'
        },
        }));
    const classes = useStyles();


        <div className="MultiForm">
            <Typography variant="h5" align="center">Tell us about yourself</Typography>
            <form className={classes.root} noValidate autoComplete="off">
                <TextField 
                        error={ageError}
                        variant="filled" 
                        type="number"
                        label="Your Age" 
                        margin="normal"
                        value={values.age} 
                        onChange={(e) => handleChange('age',e)}
                />
                <TextField 
                        error={cityError}
                        variant="filled"
                        label="City of Origin" 
                        margin='normal'
                        value={values.city} 
                        onChange={(e) => handleChange('city',e)}
                />
                <TextField 
                        error={expError}
                        variant="outlined"
                        select
                        label="Experience Class" 
                        margin='normal'
                        value={values.experience} 
                        onChange={(e) => handleChange('experience',e)}
                >
                    <MenuItem value={'Junior'}>Junior</MenuItem>
                    <MenuItem value={'Senior'}>Senior</MenuItem>
                    <MenuItem value={'Pro'}>Pro</MenuItem>
                </TextField>
            </form>
        </div>
        
        <div className="ButtonGroup">
            <ButtonGroup variant="outlined">
                    <Button startIcon={<ArrowBackIosIcon/>} color="primary" onClick={prevStep}>Back</Button>
                    <Button endIcon={<ArrowForwardIosIcon/>} color="primary" onClick={onNext}>Next</Button>
            </ButtonGroup>
        </div>


*/