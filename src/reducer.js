export const initialState = {
    basket: [],
    user: null
};


//Selector   
export const getBasketTotal = (basket) =>
    //reduce iterates through the basket and tally up the total:basket?.reduce
    //initial amount iterates all items: ((amount, item))
    //item price adds to the total amount and the initial amoun is 0:item.price + amount, 0); 
    basket?.reduce((amount, item) =>
        item.price + amount, 0);


const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id == action.id
            );
            let newBasket = [...state.basket];
            if (index >= 0) {
                newBasket.splice(index, 1)

            } else {
                console.warn(
                    "can't remove product (id:${action.id}) as its not in basket!"
                )
            }
            return {
                ...state,
                basket: newBasket
            }
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        default:
            return state;

    }
};

export default reducer;
