import { combineReducers } from 'redux';
import { RequestStateEnum } from 'Types/Domain';
import { IRoleDefsListState, IRolesListPayloadState, RolesDefsActionEnum } from '../client/Routes/RoleDef/Models';
import { RolesActions } from './types';

const rolesDefultListState: IRoleDefsListState = {
  state: RequestStateEnum.INIT,
  roles: []
}

const rolesDefultPayloadState: IRolesListPayloadState = {
  payload: {
    from: 0,
    size: 20,
    filter: [],
    query: []
  }
}

export default combineReducers<IRoleDefsListState>({
  rolesDefsListReducer: (state: IRoleDefsListState = rolesDefultListState, action: RolesActions): IRoleDefsListState => {
    switch (action.type) {
      case RolesDefsActionEnum.ROLES_DEFS_FETCH:
        return { ...state, state: RequestStateEnum.LOADING };
      case RolesDefsActionEnum.ROLES_DEFS_FETCH_SUCCESS:
        return { ...state, roles: [...action.roles], state: RequestStateEnum.SUCCESS };
      case RolesDefsActionEnum.ROLES_DEFS_FETCH_ERROR:
        return { ...state, errorMessage: action.errorMessage, state: RequestStateEnum.ERROR };
      default:
        return { ...state, state: RequestStateEnum.INIT };
    }
  },
  rolesListPayloadReducer: (state: IRolesListPayloadState = rolesDefultPayloadState, action: RolesActions): IRolesListPayloadState => {
    switch (action.type) {
      case RolesDefsActionEnum.ROLE_PAYLOAD_CHANGE:
        return { ...state, payload: { ...action.payload } };
      default:
        return state;
    }
  }
});
