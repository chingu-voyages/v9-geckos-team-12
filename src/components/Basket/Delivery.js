import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    width: 200
  },
  dense: {
    marginTop: 19
  },
  menu: {
    width: "100%"
  }
}));

const shipment = [
  {
    value: 8,
    label: "Standard +8€"
  },
  {
    value: 15,
    label: "Next-working-day +15€"
  }
];

export default function TextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    value: 8
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
    props.setValues(event.target.value);
  };

  return (
    <form className={classes.container} noValidate autoComplete='off'>
      <TextField
        id='standard-select-currency'
        select
        className={classes.textField}
        value={values.value}
        onChange={handleChange("value")}
        SelectProps={{
          MenuProps: {
            className: classes.menu
          }
        }}
        margin='normal'
      >
        {shipment.map(option => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
    </form>
  );
}
