import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { CharacterList } from "../components";
import { getCharacters } from "../actions/index";

class CharacterListView extends React.Component {
  componentDidMount() {
    this.props.getCharacters();
  }

  render() {
    if (this.props.fetching) {
      return (
        <h2>Fetching...</h2>
      );
    }
    return (
      <div className="CharactersList_wrapper">
        <CharacterList characters={this.props.characters} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    characters: state.charsReducer.characters,
    fetching: state.charsReducer.fetching
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    getCharacters
  }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(CharacterListView);
