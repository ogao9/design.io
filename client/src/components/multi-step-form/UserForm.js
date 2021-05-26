import React from "react";
import { useState, useEffect } from "react";

import UserFormDetails from "./UserFormDetails";
import PersonalData from "./PersonalData";
import Confirm from "./Confirm";
import Success from "./Success";

const UserForm = ({ addbtn, handleChange, userInput }) => {
    //----------Multi-Step Form Controls---------
    const [step, setStep] = useState(1);

    const nextStep = () => {
        setStep(step + 1);
    };

    const prevStep = () => {
        setStep(step - 1);
    };

    switch (step) {
        case 1:
            return (
                <UserFormDetails
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={userInput}
                />
            );
        case 2:
            return (
                <PersonalData
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={userInput}
                />
            );
        case 3:
            return (
                <Confirm
                    prevStep={prevStep}
                    nextStep={nextStep}
                    handleChange={handleChange}
                    values={userInput}
                    addbtn={addbtn}
                />
            );
        case 4:
            return <Success prevStep={prevStep} />;
        default:
            return <h1>Oops! Something went wrong...</h1>;
    }
};

export default UserForm;

/*
        //used this when we needed to updata a local array 
        //const data = await response.json(); //set data to the card we just created
        // setArtInfo([...artInfo, data]);  
*/