const initialState = {
    currentRegion: { latitude: 42.882004, longitude: 74.582748, latitudeDelta: 0.0922, longitudeDelta: 0.0421 },
    bucketList: [],
    recommendList: [],
    viewableList: []
}

const recommendReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_RECOMMENDATIONS":
            console.log("Getting Recommendations");
            return {
                ...state,
                recommendList: action.recommendList
            };
        case "RECOMMENDATIONS_TO_LIST":
            console.log("Putting Recommendations Into Viewable List");
            return {
                ...state,
                viewableList: action.viewableList
        };
        case "RECOMMENDATIONS_ERROR":
            console.log("Recommendations Failed");
            return {
                ...state,
                err: action.err
            };
        default:
            return state;
    }
};

export default recommendReducer;