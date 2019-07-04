import {
    MENU_OPEN,
    MENU_ITEM_OPEN,
    MENU_CLOSE

} from '../actions/navigationActions';


const initialState = {
    menuOpen: false,
    menuItemOpen: false,
    anchorEl: null,
    anchorItemEl: null,
    clothing: false,
    shoes: false,
    activewear: false,
    clothingItems: [`Hoodies & Sweatshits`, `Jackets & Coats`, 'Jeans', 'Shirts', 'Shorts', 'Loungewear', 'Suits', 'Socks', 'Swimwear', 'Vests', 'Trousers', 'Underwear' ],
    shoesItems: ['View all', 'Boots', 'Loafers', 'Sneakers', 'Sandals', 'Flip-Flops'],
    activewearItems: ['View All', 'Footwear', 'Shorts', 'Swim', 'Tops', 'Tights'],
    items: null,

}

export default function navigationReducer(state = initialState, action) {
    switch(action.type) {
        case MENU_OPEN: 
        if(action.clotheType === 'clothing') {
            return {
                ...state,
                clothing: true,
                shoes: false,
                activewear: false,
                anchorEl: action.event,
                items:  [`Hoodies & Sweatshits`, `Jackets & Coats`, 'Jeans', 'Shirts', 'Shorts', 'Loungewear', 'Suits', 'Socks', 'Swimwear', 'Vests', 'Trousers', 'Underwear' ]
            }
        } else if(action.clotheType=== 'shoes') {
            return {
                ...state,
                clothing: false,
                shoes: true,
                activewear: false,
                anchorEl: action.event,
                items: ['View all', 'Boots', 'Loafers', 'Sneakers', 'Sandals', 'Flip-Flops']
            }
        } else if(action.clotheType === 'activewear') {
            return {
                ...state,
                clothing: false,
                shoes: false,
                activewear: true,
                anchorEl: action.event,
                items: ['View All', 'Footwear', 'Shorts', 'Swim', 'Tops', 'Tights']
            }
        };
        break;
        case MENU_ITEM_OPEN:
        return {
            ...state,
            menuItemOpen: true,
            anchorItemEl: action.event
        };

        case MENU_CLOSE:
            return {
                ...state,
                menuOpen: false
            }
        default: {
            return state
        }
    }
}