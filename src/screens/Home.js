import styles from "../StyleSheet";
import React from "react";
import {
  View,
  Text,
  Button,
  TouchableOpacity
} from "react-native";
import { Row } from "react-native-easy-grid";
import { connect } from "react-redux";
import { getCurrentLocation } from "../actions/locationAction";
import { displayList } from "../actions/bucketAction";
import { getRecommendations, recommendationsToList } from "../actions/recommendAction";
import { ScrollView } from "react-native-gesture-handler";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRegion: {
        latitude: 42.882004,
        longitude: 74.582748,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421
      },
      bucketList: [],
      recommendList: [],
      viewableList: [],
      personData: []
    };
  }

  componentDidMount() {
    this.props.getCurrentLocation();
    this.props.displayList();
  }

  onRecommendations = () => {
    this.state.personData = this.props.personData;
    this.props.getRecommendations(this.state);
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={styles.profileButton}
          onPress={() => {
            this.props.navigation.navigate("Profile");
          }}
        >
          <Text style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
            Profile
          </Text>
        </TouchableOpacity>
        <ScrollView>
          <View style={styles.listContainer}>
            {this.props.viewableList}
          </View>
        </ScrollView>
        <Button
            title="Refresh Recommendations"
            onPress={() => this.onRecommendations()}
        >
        </Button>
      </View>
    );
  }

  componentDidUpdate(prevProps) {
    if(prevProps.recommendList !== this.props.recommendList){
      this.props.recommendationsToList(this.props.recommendList);
    }
    this.props.currentRegion === undefined ? this.props.getCurrentLocation() : this.state.currentRegion = this.props.currentRegion
  }

}

const mapStateToProps = state => {
  return {
    currentRegion: state.location.currentRegion,
    recommendList: state.recommend.recommendList,
    viewableList: state.recommend.viewableList,
    personData : state.bucket.personData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentLocation: () => dispatch(getCurrentLocation()),
    getRecommendations: query => dispatch(getRecommendations(query)),
    recommendationsToList: recommendations => dispatch(recommendationsToList(recommendations)),
    displayList: () => dispatch(displayList())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
