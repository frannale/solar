import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 140,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SelectMy = (props) => {
  const classes = useStyles();

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-age-native-simple">Agrupado</InputLabel>
        <Select
          native
          value={props.groupedS}
          onChange={props.onFiltered}
          label="Agrupado"
          inputProps={{
            name: 'Agrupado',
            id: 'outlined-age-native-simple',
          }}
        >
          <option value={'no'}>NO</option>
          <option value={'dia'}>DIA</option>
          <option value={'mes'}>MES</option>
          <option value={'hora'}>HORA</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default SelectMy;