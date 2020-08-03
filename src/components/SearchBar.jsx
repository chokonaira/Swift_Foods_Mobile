import { SearchBar } from "react-native-elements";
import React, { Component } from "react";
import { GlobalStyles } from "../styles/globalStyles";
import { View } from "react-native";

class Search extends Component {
  state = {
    search: "",
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
      <View>
        <SearchBar
          style={GlobalStyles.searchBar}
          lightTheme
          inputStyle={{
            backgroundColor: "transparent",
            color: "black",
            fontWeight: "bold",
            letterSpacing: 1,
            fontSize: 12,
            padding: 6,
          }}
          showLoading={false}
          containerStyle={{
            backgroundColor: "transparent",
            borderBottomColor: "transparent",
            width: "100%",
            // height: '15%'
          }}
          round
          placeholder="Type Here..."
          placeholderTextColor={"black"}
          onChangeText={this.updateSearch}
          value={search}
        />
       </View>
    );
  }
}

export default Search;
