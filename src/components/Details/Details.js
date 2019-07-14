import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Slide } from "react-slideshow-image";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Grid } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Paper from "@material-ui/core/Paper";
import { CardActions, CardHeader, CardContent } from "@material-ui/core/";
import Swal from "sweetalert2";

import {
  fetchProductByID,
  addItemToBasket
} from "../../actions/productActions";
import { connect } from "react-redux";
//properties for slideshow
const properties = {
  duration: 5000,
  transitionDuration: 400,
  infinite: true,
  indicators: true,
  arrows: true
};
// style for size input select
const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing(2)
  },
  paper: {
    paddingBottom: theme.spacing(4),
    width: "90vw",
    textAlign: "center",
    height: "90vh",
    [theme.breakpoints.down("xs")]: {
      height: "100%"
    }
  },
  MuiCardActions: {
    justifyContent: "center"
  },
  slide: {
    margin: "0 auto",
    width: 314,
    [theme.breakpoints.down("xs")]: {
      width: 290
    },
    [theme.breakpoints.down('sm')]: {

    }
  },

  slideImage: {
    width: 314,
    height: 400,
    margin: "0 auto",
    [theme.breakpoints.down("xs")]: {
      width: 290,
      height: 400
    },

    [theme.breakpoints.down("sm")]: {
      width: 290,
      height: 290
    },
  }
}));


const Details = props => {
  const classes = useStyles();
  //when component did mount it fetches product by ID passed before by clicking Card
  React.useEffect(() => {
    props.dispatch(fetchProductByID(props.id));
    // eslint-disable-next-line
  }, []);

  const [values, setValues] = React.useState({
    size: "Select size",
    sizeType: ""
  });

  function handleChange(event) {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  }

  const { loading, error, item } = props;
  if (error) {
    return <div>Error! {error.message}</div>;
  }

  if (loading) {
    return (
      <Grid
        container
        justify='center'
        style={{ height: "83vh", alignItems: "center" }}
      >
        <CircularProgress className='progress' color='secondary' size={80} />{" "}
      </Grid>
    );
  }

  return (
    <div className={classes.root}>
      <Paper component='div' className={classes.paper}>
        <CardHeader title={item.name} className={classes.cardHeader} />

        <div className='slideshow'>
          <Slide {...properties} className={classes.slide}>
            <div className='each-slide'>
              <div
                className={classes.slideImage}
                style={{
                  backgroundImage: `url('https://${item.media.images[0].url}')`,
                  
                }}
              />
            </div>
            <div className='each-slide'>
              <div
                className={classes.slideImage}
                style={{
                  backgroundImage: `url('https://${item.media.images[1].url}')`,
                  
                }}
              />
            </div>
            <div className='each-slide'>
              <div
                className={classes.slideImage}
                style={{
                  backgroundImage: `url('https://${item.media.images[2].url}')`,
                  
                }}
              />
            </div>
          </Slide>
        </div>

        <CardContent>
          <Typography variant='body2' gutterBottom>
            Price: {item.price.current.text}
          </Typography>

          <Typography variant='button' display='block' gutterBottom>
            Brand: {item.brand.name}
          </Typography>
        </CardContent>
        <CardActions className={classes.MuiCardActions}>
          <form className={classes.root} autoComplete='off'>
            <FormControl className={classes.formControl}>
              <Select
                value={values.size}
                onChange={handleChange}
                name='size'
                displayEmpty
                className={classes.selectEmpty}
              >
                <MenuItem value='Select size' disabled>
                  Select size
                </MenuItem>
                {item.variants.map(variant => {
                  return (
                    <MenuItem value={variant.brandSize}>
                      {variant.brandSize}
                    </MenuItem>
                  );
                })}
              </Select>
              <FormHelperText>Select your size</FormHelperText>
            </FormControl>
          </form>
          <Button
            variant='contained'
            color='primary'
            onClick={() => {
              props.dispatch(addItemToBasket());
              Swal.fire({
                position: "top",
                type: "success",
                title: "Item added to basket!",
                showConfirmButton: false,
                timer: 1300
              });
            }}
          >
            Add to cart
          </Button>
        </CardActions>
      </Paper>
    </div>
  );
};

const mapStateToProps = state => ({
  products: state.products.items,
  loading: state.products.loading,
  error: state.products.error,
  item: state.products.item,
  id: state.products.id
});

export default connect(mapStateToProps)(Details);
