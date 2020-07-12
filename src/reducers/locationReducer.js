const initialState = {
    currentRegion: {
        latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421
    }
}

const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_USER_LOCATION":
            console.log("get current Location");
            return {
                ...state,
                currentRegion: action.currentRegion
            }
        default:
            return state;
    }
};

export default locationReducer;