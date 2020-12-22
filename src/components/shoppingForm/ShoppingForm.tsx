import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';
import { FormProvider } from 'react-hook-form';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { useShoppingForm } from '../../hooks/useShoppingForm';

export interface ShoppingFormProps {
    
}
 
const ShoppingForm: React.SFC<ShoppingFormProps> = () => {

    const { methods, countries, country, subdivisions, subdivision, options, option,
        selectCountry, selectSubdivision, selectShippingOptions, goToCheckout, backToCart } = useShoppingForm();

    return ( 
        <>
            <Typography variant='h6' gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit={methods.handleSubmit((data) => goToCheckout(data))}>
                    <Grid container spacing={3}>
                        <FormInput name='firstName' label='First name'/>
                        <FormInput name='lastName' label='Last name'/>
                        <FormInput name='address1' label='Address'/>
                        <FormInput name='email' label='Email'/>
                        <FormInput name='city' label='City'/>
                        <FormInput name='zip' label='ZIP / Postal code'/>
                        <FormSelect value={country} label='Shipping Country' 
                            options={countries} onChange={selectCountry}/>
                        <FormSelect value={subdivision} label='Shipping Subdivision' 
                            options={subdivisions} onChange={selectSubdivision}/>
                        <FormSelect value={option} label='Shipping Options' 
                            options={options} onChange={selectShippingOptions}/>
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button variant='outlined' onClick={backToCart} type='button'>Back to Cart</Button>
                        <Button type='submit' color='primary' variant='contained'>Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
     );
}
 
export default ShoppingForm;