import React from "react";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import "../../css/FirstHeader.css";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

let WhiteCollectEmails = props => {
  const [value, setValue] = React.useState("female");

  function handleChange(event) {
    setValue(event.target.value);
  }
  return (
    <Box className="whiteBox secondWhiteCollect">
      <h2>
        What about 10% discount for your <br />
        next order ?
      </h2>
      <p>
        Sed ut perspiciatis unde omnis iste natus error sit voluptatem
        accusantium doloremque laudantium,
      </p>
      <h6>Your Email Address</h6>
      <Box>
        <TextField
          id="outlined-email-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="outlined"
          className="inputDetails"
        />
      </Box>
      <Box>
        <FormControl component="fieldset">
          <FormLabel component="legend" />
          <RadioGroup
            aria-label="position"
            name="position"
            value={value}
            onChange={handleChange}
            row
          >
            <FormControlLabel
              value="Woman"
              control={<Radio color="primary" />}
              label="Woman"
              labelPlacement="end"
            />
            <FormControlLabel
              value="Man"
              control={<Radio color="primary" />}
              label="Man"
              labelPlacement="end"
            />
          </RadioGroup>
        </FormControl>
      </Box>

      <Button variant="contained" color="primary">
        Subscribe me !!
      </Button>
      <p>
        <a href="#" className="adetailsOfOrder">
          At vero eos et accusamus et iusto odio dignissimos ducimus qui
          blanditiis ,
        </a>
      </p>
    </Box>
  );
};

export default WhiteCollectEmails;
