import { IRolePayload } from '../client/Routes/RoleDef/Models';
import { RolesState, RolesPayloadState } from './types';

export const RoleList = (state: RolesState) => state.rolesDefsListReducer.roles;
export const LoadingRoleDefs = (state: RolesState) => state.rolesDefsListReducer.state;
export const RoleDefsListPayload = (state: RolesPayloadState): IRolePayload => state.rolesListPayloadReducer.payload;
