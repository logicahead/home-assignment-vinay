import { ActionCreator } from 'react-redux';
import { ThunkAction } from 'redux-thunk';
import {
  IActionRolesFetch,
  IActionRolesFetchError,
  IActionRolesFetchSuccess,
  IActionRolePayloadChange,
  IRoleDefsListState,
  RolesDefsActionEnum
} from '../client/Routes/RoleDef/Models';

import roleHttpService from "../client/Services/role.http.service";

// Action Creators
export const searchChanged = (payload): IActionRolePayloadChange => {
  return {
    type: RolesDefsActionEnum.ROLE_PAYLOAD_CHANGE,
    payload
  }
}

export const fetchRoleDefsData: ActionCreator<ThunkAction<
  Promise<IActionRolesFetchSuccess>,
  any,
  IActionRolesFetchSuccess
>> = (payload?: any) => {
  console.log("dispatch......")
  return async (dispatch: any) => {

    const rolesFetchAction: IActionRolesFetch = {
      type: RolesDefsActionEnum.ROLES_DEFS_FETCH,
    };

    dispatch(rolesFetchAction);

    try {

      const roles = await roleHttpService.fetchRoleDefsData(payload);

      const rolesFetchSuccessAction: IActionRolesFetchSuccess = {
        type: RolesDefsActionEnum.ROLES_DEFS_FETCH_SUCCESS,
        roles: roles.hits.hits.map(role => role._source),
      };

      return dispatch(rolesFetchSuccessAction);
    } catch (error) {

      const rolesFetchErrorAction: IActionRolesFetchError = {
        type: RolesDefsActionEnum.ROLES_DEFS_FETCH_ERROR,
        errorMessage: error.message,
      };

      return dispatch(rolesFetchErrorAction);
    }
  };
};