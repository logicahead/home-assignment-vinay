import { Action } from 'redux';
import { RequestStateEnum } from 'Types/Domain';
import { IRoleDef } from './RoleDef';
import { IRolePayload } from './RolePayload';

export enum RolesDefsActionEnum {
    ROLES_DEFS_FETCH = 'ROLES_DEFS_FETCH',
    ROLES_DEFS_FETCH_SUCCESS = 'ROLES_DEFS_FETCH_SUCCESS',
    ROLES_DEFS_FETCH_ERROR = 'ROLES_DEFS_FETCH_ERROR',
    ROLE_PAYLOAD_CHANGE = 'ROLE_PAYLOAD_CHANGE'
}

export interface IActionRolesFetch extends Action {
    type: RolesDefsActionEnum.ROLES_DEFS_FETCH
}

export interface IActionRolesFetchSuccess extends Action {
    type: RolesDefsActionEnum.ROLES_DEFS_FETCH_SUCCESS,
    roles: IRoleDef[]
}

export interface IActionRolesFetchError extends Action {
    type: RolesDefsActionEnum.ROLES_DEFS_FETCH_ERROR,
    errorMessage: string
}

export interface IActionRolePayloadChange extends Action {
    type: RolesDefsActionEnum.ROLE_PAYLOAD_CHANGE,
    payload: IRolePayload
}
