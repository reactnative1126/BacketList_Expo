const initialState = {
    bucketList: [],
    loading: true,
    newItem: '',
    bucketListError: "",
    personData: [],
}

const bucketReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_ALL_ITEMS":
            console.log("get all bucket items");
            return {
                ...state,
                bucketList: action.bucketList,
                loading: action.loading
            }
        case "ITEM_ADDED":
            console.log("bucket item added!");
            let list = state.bucketList;
            console.log(list);
            return {
                ...state,
                // bucketList: list.push(action.newItem)
                newItem: action.newItem.itemText,
                res: 'item Added'
            };


            case "ADD_ITEM_SUCCESS":
            
                return {
                    ...state,
                    bucketList: action.newItem
                }
            case "ADD_ITEM_ERROR":
                return {
                    ...state,
                    bucketListError: action.err.message
                }
            case "DISPLAY_ITEMS":
                return{
                    ...state,
                    personData: action.personData
                }
            case "DELETE_ITEM":
                return{
                    ...state
                    
                }                
        
        default:
            return state;
    }

    
};

export default bucketReducer;