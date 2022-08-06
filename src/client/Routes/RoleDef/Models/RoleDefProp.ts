import { RequestStateEnum } from 'Types/Domain';
import { IRoleDef } from './RoleDef';
import { IRolePayload } from './RolePayload';

export interface RoleDefState {
    roles: IRoleDef[];
    loadingState: RequestStateEnum;
    payload?: IRolePayload;
}

export interface RoleDefDispatch {
    loadData: Function,
    searchChanged: Function
}

