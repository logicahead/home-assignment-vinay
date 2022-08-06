import * as React from 'react';
import { connect } from 'react-redux';
import { ThemeContext } from '../../../Context';
import { RoleDefState, RoleDefDispatch } from '../Models';
import RoleListComponent from './RoleList';
import { fetchRoleDefsData, searchChanged, RoleList, LoadingRoleDefs, RoleDefsListPayload } from "../../../../store";
import { SearchTypeEnum, SearchKeyEnum } from 'Types/Domain';

export type RoleDefProp = RoleDefState & RoleDefDispatch;

//
class RoleDefComponent extends React.Component<RoleDefProp, RoleDefState> {

  constructor(props: RoleDefProp) {
    super(props);
  }

  componentDidMount() {
    this.getRolesDefs();
  }

  componentDidUpdate(prevProps) {
    if (this.props.payload !== prevProps.payload) {
      this.props.loadData(this.props.payload);
    }
  }

  filterRolesDefs = (query: any) => {
    if (query)
      this.props.searchChanged({
        ...this.props.payload, query: [{
          type: SearchTypeEnum.query,
          key: SearchKeyEnum.multi_match,
          modelfield: 'fields',
          value: ['name', 'description'],
          options: { 'query': query, 'type': 'phrase_prefix' }
        }]
      });
    else
      this.props.searchChanged({
        ...this.props.payload, query: []
      });
  }

  getRolesDefs = (deleted: boolean = false) => {
    if (deleted)
      this.props.searchChanged({
        ...this.props.payload, filter: [{
          type: SearchTypeEnum.filter,
          key: SearchKeyEnum.terms,
          modelfield: 'entityState.itemID',
          value: ['7'] // Deleted
        }]
      });
    else
      this.props.searchChanged({
        ...this.props.payload, filter: [{
          type: SearchTypeEnum.filter,
          key: SearchKeyEnum.term,
          modelfield: 'entityState.itemID',
          value: '5' // Published
        }]
      });
  }

  render() {
    return (
      <div>
        <ThemeContext.Consumer>
          {
            theme => (
              <RoleListComponent
                theme={theme}
                roleDefs={this.props.roles}
                loadingState={this.props.loadingState}
                onFilter={this.filterRolesDefs}
                onShowDeleted={this.getRolesDefs}
              />
            )
          }
        </ThemeContext.Consumer>
      </div>
    );
  }
}

const mapStateToProps = ({ rolesReducer }: any): RoleDefState => {
  return {
    roles: RoleList(rolesReducer),
    loadingState: LoadingRoleDefs(rolesReducer),
    payload: RoleDefsListPayload(rolesReducer)
  };
};

const mapDispatchToProps = (dispatch: any): RoleDefDispatch => {
  return {
    loadData: payload => dispatch(fetchRoleDefsData(payload)),
    searchChanged: payload => dispatch(searchChanged(payload))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(RoleDefComponent);
