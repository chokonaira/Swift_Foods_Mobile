import { SearchBar } from "react-native-elements";
import React, { Component } from "react";
import { GlobalStyles } from "../styles/globalStyles";


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
      <SearchBar
        style={GlobalStyles.searchBar}
        lightTheme
        inputStyle={{backgroundColor: 'transparent', color: 'black', fontWeight:'bold', letterSpacing:1, fontSize:12, padding:6}}
        showLoading={false}
        containerStyle={{backgroundColor: 'transparent', borderBottomColor: 'transparent'}}
        round
        placeholder="Type Here..."
        placeholderTextColor={'black'}
        onChangeText={this.updateSearch}
        value={search}
      />
    );
  }
}

export default Search;
