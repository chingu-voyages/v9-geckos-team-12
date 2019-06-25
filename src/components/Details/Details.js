import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";
import { Slide } from "react-slideshow-image";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";
import FormHelperText from "@material-ui/core/FormHelperText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { fetchProductByID, addCartCount } from "../../actions/productActions";
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
    return <CircularProgress className='progress' color='secondary' />;
  }

  return (
    <div>
      <Typography variant='h4' gutterBottom>
        {item.name}
      </Typography>
      <Typography variant='h5' gutterBottom>
        Price: {item.price.current.text}
      </Typography>
      <Button
        variant='contained'
        color='primary'
        onClick={() => props.dispatch(addCartCount())}
      >
        Add to cart
      </Button>
      <Typography variant='button' display='block' gutterBottom>
        Brand: {item.brand.name}
      </Typography>

      <div className='slideshow'>
        <Slide {...properties} style={{ width: "314px", margin: "0 auto" }}>
          <div className='each-slide'>
            <div
              style={{
                backgroundImage: `url('https://${item.media.images[0].url}')`,
                height: "400px",
                width: "314px",
                margin: "0 auto"
              }}
            />
          </div>
          <div className='each-slide'>
            <div
              style={{
                backgroundImage: `url('https://${item.media.images[1].url}')`,
                height: "400px",
                width: "314px",
                margin: "0 auto"
              }}
            />
          </div>
          <div className='each-slide'>
            <div
              style={{
                backgroundImage: `url('https://${item.media.images[2].url}')`,
                height: "400px",
                width: "314px",
                margin: "0 auto"
              }}
            />
          </div>
        </Slide>
      </div>

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
