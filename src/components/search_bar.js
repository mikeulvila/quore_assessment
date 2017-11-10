import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { searchTerm : '' };
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    value={this.state.searchTerm}
                    onChange={event => this.onInputChange(event.target.value)}
                    placeholder="Search Tasks"
                />
            </div>
        );
    }

    onInputChange(searchTerm) {
        this.setState({searchTerm});
        this.props.onSearchTermChange(searchTerm);
    }
}

export default SearchBar;