import React from 'react'
import { Fragment } from 'react'
import { connect } from "react-redux";
import { signInAction, signUpAction } from "../actions/formActions";
import SignIn from './Form/SignIn/SignIn'
import SignUp from './Form/SignUp/SignUp'

const Form = (props) => {
    return (
        <Fragment>
            {props.signIn ? <SignIn /> : <SignUp />}
        </Fragment>
    )
}

const mapStateToProps = state => {
    return {
        signIn: state.form.signIn,
        signUp: state.form.signUp
    }
}

export default connect(mapStateToProps)(Form)
