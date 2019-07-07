import {
  MENU_OPEN,
  MENU_ITEM_OPEN,
  MENU_CLOSE,
  TOGGLE_SIDE_DRAWER,
  GO_BACK
} from "../actions/navigationActions";

const initialState = {
  menuOpen: false,
  menuItemOpen: false,
  anchorClothing: null,
  anchorShoes: null,
  anchorActivewear: null,
  anchorEl: null,
  anchorItemEl: null,
  clothing: false,
  shoes: false,
  activewear: false,
  clothingItems: [
    `Hoodies & Sweatshits`,
    `Jackets & Coats`,
    "Jeans",
    "Shirts",
    "Shorts",
    "Loungewear",
    "Suits",
    "Socks",
    "Swimwear",
    "Vests",
    "Trousers",
    "Underwear"
  ],
  shoesItems: ["Loafers", "Heels", "Sandals", "Sperrys", "Flip-Flops"],
  activewearItems: ["View All", "Footwear", "Shorts", "Swim", "Tops", "Tights"],
  items: null,
  sideDrawer: false
};

export default function navigationReducer(state = initialState, action) {
  switch (action.type) {
    case GO_BACK: {
      return {
        ...state,
        items: null,
        clothing: false,
        activewear: false,
        shoes: false
      };
    }
    case TOGGLE_SIDE_DRAWER: {
      return {
        ...state,
        sideDrawer: action.open
      };
    }
    case MENU_CLOSE:
      return {
        ...state,
        menuOpen: false,
        clothing: false,
        shoes: false,
        activewear: null,
        anchorClothing: null,
        anchorShoes: null
      };
    case MENU_OPEN:
      if (action.clotheType === "clothing") {
        return {
          ...state,
          clothing: true,
          shoes: false,
          activewear: false,
          anchorClothing: action.event,
          anchorShoes: null,
          anchorActivewear: null,
          items: [
            `Hoodies & Sweatshits`,
            `Jackets & Coats`,
            "Jeans",
            "Shirts",
            "Shorts",
            "Loungewear",
            "Suits",
            "Socks",
            "Swimwear",
            "Vests",
            "Trousers",
            "Underwear"
          ]
        };
      } else if (action.clotheType === "footwear") {
        return {
          ...state,
          clothing: false,
          shoes: true,
          activewear: false,
          anchorClothing: null,
          anchorShoes: action.event,
          anchorActivewear: null,
          items: ["Loafers", "Heels", "Trainers", "Sperrys", "Plimsoll"]
        };
      } else if (action.clotheType === "activewear") {
        return {
          ...state,
          clothing: false,
          shoes: false,
          activewear: true,
          anchorClothing: null,
          anchorShoes: null,
          anchorActivewear: action.event,
          items: ["View All", "Footwear", "Shorts", "Swim", "Tops", "Tights"]
        };
      }
      break;
    case MENU_ITEM_OPEN:
      return {
        ...state,
        menuItemOpen: true,
        anchorItemEl: action.event
      };

    default: {
      return state;
    }
  }
}
