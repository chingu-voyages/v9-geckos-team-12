import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { styled } from "@material-ui/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";

const MyStyledList = styled(List)({
  /*   -webkit-column-count: 3; /* Chrome, Safari, Opera */
  /* -moz-column-count: 3; /* Firefox */

  columnCount: 4,
  marginBottom: "2rem"
});

const MyListItemText = styled(ListItemText)({
  /*   -webkit-column-count: 3; /* Chrome, Safari, Opera */
  /* -moz-column-count: 3; /* Firefox */
  fontSize: "10",
  textAlign: "center"
});

export default function PopularBrands() {
  return (
    <Box>
      <Typography variant='h5' gutterBottom align='center' color='primary'>
        Our Popular Brands
      </Typography>
      <Box>
        <MyStyledList component='nav' aria-label='Our Popular Marks'>
          <ListItem button>
            <MyListItemText primary='adidas' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Clarks' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Dr. Martens' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Guess' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Michael Kors' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Ray Ban' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Timberland' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Wrangler' />
          </ListItem>

          <ListItem button>
            <MyListItemText primary='ASICS' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Converse' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='ecco' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Jack Wolfskim' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='New Balance' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Reebok' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Tommy Hilfiger' />
          </ListItem>

          <ListItem button>
            <MyListItemText primary='Benetton' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Esprit' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Lacoste' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='New Look' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='River Island' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Topshop' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Crocs' />
          </ListItem>

          <ListItem button>
            <MyListItemText primary='Calvin Klein' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Desigual' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='GAP' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Lee' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Nike' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Tamaris' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Triumph' />
          </ListItem>

          <ListItem button>
            <MyListItemText primary='Chi Chi London' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Dorothy Perkins' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Geox' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary="Levi's" />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Pepe Jeans' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='The North Face' />
          </ListItem>
          <ListItem button>
            <MyListItemText primary='Vans' />
          </ListItem>
        </MyStyledList>
      </Box>
    </Box>
  );
}
