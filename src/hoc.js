import React from 'react'
import { menuCloseAction } from './actions/navigationActions'
import { connect } from 'react-redux'

const hoc = (props) => {
    return (
        <div onMouseEnter={() => props.menuCloseAction()} style={{opacity: 0.5, height: '50vh', width: '100vw', marginTop: '35px'}}>
            {props.children}
        </div>
    )
}

const mapDispatchToProps = {
    menuCloseAction
  };

const mapStateToProps = state => ({
  anchorClothing:state.navigation.anchorClothing,
  anchorShoes:state.navigation.anchorShoes,
  anchorActivewear:state.navigation.anchorActivewear,
})

export default connect(mapStateToProps,mapDispatchToProps)(hoc)
