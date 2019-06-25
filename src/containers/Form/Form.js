import React, { Component,Fragment } from 'react'
import TextField from '@material-ui/core/TextField';
 class Form extends Component {
    render() {
        return (
            <Fragment>
                <form onClick={(e) => e.preventDefault()}> 
                    <TextField type='text' variant='outlined' placeholder='username'/>
                    <TextField type='text' variant='outlined' placeholder='password'/>

                </form>
            </Fragment>
        )
    }
}

export default Form
