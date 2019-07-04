export const MENU_OPEN = 'MENU_OPEN';
export const MENU_ITEM_OPEN = 'MENU_ITEM_OPEN';
export const MENU_CLOSE = 'MENU_CLOSE'

export const openMenuAction = (event, clotheType) => ({
    type: MENU_OPEN,
    event,
    clotheType
})

export const openMenuItemAction = event => ({
    type: MENU_ITEM_OPEN,
    event
})

export const menuCloseAction = event => ({
    type: MENU_CLOSE,
    event
})