export const MENU_OPEN = 'MENU_OPEN';
export const MENU_ITEM_OPEN = 'MENU_ITEM_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE'
export const TOGGLE_SIDE_DRAWER = 'TOGGLE_SIDE_DRAWER'
export const  GO_BACK = ' GO_BACK'

export const openMenuAction = (event, clotheType) => {
    console.log('open menu action called')
    return dispatch => {
        dispatch(menuCloseAction())
        setTimeout(() => {
            dispatch(menuOpen(event,clotheType))
        },250)
        
    }
  
}

export const openMenuItemAction = event => ({
    type: MENU_ITEM_OPEN,
    event
})

export const menuCloseAction = event => ({
    type: MENU_CLOSE,
})

export const menuOpen = (event,clotheType) => ({
    type: MENU_OPEN,
    event,
    clotheType
})

export const toggleSideDrawerAction = (open) => ({
    type: TOGGLE_SIDE_DRAWER,
    open,
})

export const goBackAction = () => ({
    type:  GO_BACK
})