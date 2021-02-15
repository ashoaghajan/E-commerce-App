import React from 'react';
import { Grid, InputLabel, Select, MenuItem } from '@material-ui/core';

export interface CurrencyBarProps {
    label: string,
    value: string,
    options: { id: string, label: string }[],
    onChange: (optionId: any) => void
}
 
const CurrencyBar: React.SFC<CurrencyBarProps> = ({ label, value, options, onChange }) => {

    const handleSelect = (e: React.ChangeEvent<{ value: unknown }>) => {
        onChange(e.target.value)
    }

    return ( 
        <Grid item xs={12} sm={6}>
        <InputLabel>{label}</InputLabel>
        <Select value={value}  onChange={handleSelect} required>
            {options.map(option => (
                <MenuItem value={option.id} key={option.id}>{option.label}</MenuItem>
            ))}
        </Select>
    </Grid>
     );
}
 
export default CurrencyBar;
