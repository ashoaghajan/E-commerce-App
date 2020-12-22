import React from 'react';
import { TextField, Grid } from '@material-ui/core';
import { useFormContext, Controller } from 'react-hook-form';

export interface FormInputProps {
    name: string,
    label: string,
}
 
const FormInput: React.SFC<FormInputProps> = ({ name, label }) => {

    const { control } = useFormContext();

    return ( 
        <Grid item xs={12} sm={6}>
            <Controller as={TextField} defaultValue='' control={control} fullWidth
              name={name} label={label} required/>
        </Grid>
     );
}
 
export default FormInput;
