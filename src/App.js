import Layout from "./containers/Layout/Layout";
import React from "react";
import Button from "@material-ui/core/Button";

const App = () => {
  return (
    <div className='App'>
      <h1>Hello world!</h1>
      <Layout />
      <Button variant='contained' color='primary'>
        Hello World
      </Button>
    </div>
  );
};

export default App;
