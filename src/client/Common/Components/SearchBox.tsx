import * as React from "react";
import { debounce } from "lodash";
import { Icon, TextField } from 'engage-ui';

interface SearchRuleProps {
    placeholder: string;
    onSearch: (rules: string) => void;
}
interface SearchCriteriaState {
    rules: string;
}

class SearchBox extends React.Component<SearchRuleProps, SearchCriteriaState> {

    constructor(props) {
        super(props);

        this.state = {
            rules: ""
        };
    }

    debounceTypingOnSearch = debounce(() => this.props.onSearch(this.state.rules), 300);

    listenCriteriaChange = (e: React.FormEvent<HTMLInputElement>) => {
        this.setState({ rules: e.toString() }, () => {
            this.debounceTypingOnSearch();
        });
    };

    render() {
        return (
            <TextField
                label={this.props.placeholder}
                suffix={<Icon source="search" componentColor="inkLighter" />}
                value={this.state.rules}
                onChange={this.listenCriteriaChange}
            />
        );
    }
}

export default SearchBox;
