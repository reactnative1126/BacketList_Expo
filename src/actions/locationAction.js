import {
  GET_USER_LOCATION
} from "./types";

var initialRegion;

export const getCurrentLocation = () => {
  return async (dispatch, getState) => {
    navigator.geolocation.getCurrentPosition( async (position) => {
      var lat = await parseFloat(position.coords.latitude)
      var long = await parseFloat(position.coords.longitude)
      initialRegion = {
        latitude: lat,
        longitude: long,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      }
      dispatch({ type: GET_USER_LOCATION, currentRegion: initialRegion });
    },
        (error) => console.log("Location Error:", error),
        { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 });
  };
};