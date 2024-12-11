const initialState = {
    items: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD':
            const currentItem1 = state.items.find((item) => item.id === action.data.id);
            if (!currentItem1) {
                return {
                    ...state,
                    items: [...state.items, {...action.data, count: 1}]
                }
            }
            return {
                ...state,
                items: state.items.map((item) => 
                    item.id === action.data.id ?
                    {...item, count: item.count + 1}
                    : item
                )
            }
        
            case 'ADD_COUNT':
                const currentItem2 = state.items.find((item) => item.id === action.idItem);
                if(currentItem2) {
                    return {
                        ...state,
                        items: state.items.map((item) => 
                            item.id === action.idItem ?
                            {...item, count: item.count + 1}
                            : item
                        )
                    }
                }

            case 'REMOVE_COUNT':
                const currentItem3 = state.items.find((item) => item.id === action.idItem);
                if(currentItem3) {
                    return {
                        ...state,
                        items: state.items.map((item) => 
                            item.id === action.idItem ?
                            {...item, count: Math.max(1, item.count - 1)}
                            : item
                        )
                    }
                }

            case 'REMOVE':
                return {
                    items: []
                }

            default:
                return state;
    }
};


export default rootReducer;
