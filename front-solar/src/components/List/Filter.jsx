import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import SelectMy from "./SelectMy";

const Filter = (props) => {

  return (
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
      <Grid container style={{paddingBottom: '20px'}}  justify="space-around">
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline-desde"
          label="DESDE"
          value={props.dates.from}
          onChange={props.onFiltered.from}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        <SelectMy grouped={props.grouped} onFiltered={ props.onFiltered.grouped}/>
        <KeyboardDatePicker
          disableToolbar
          variant="inline"
          format="dd/MM/yyyy"
          margin="normal"
          id="date-picker-inline-hasta"
          label="HASTA"
          value={props.dates.hasta}
          onChange={props.onFiltered.hasta}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
        
      </Grid>
    </MuiPickersUtilsProvider>
  );
}
export default Filter;