import {
    IActionRolesFetch,
    IActionRolesFetchSuccess,
    IActionRolesFetchError,
    IActionRolePayloadChange,
    IRoleDefsListState,
    IRolesListPayloadState,
    RoleDefState,
    RoleDefDispatch
} from "../client/Routes/RoleDef/Models";

export type RolesActions = IActionRolesFetch | IActionRolesFetchSuccess | IActionRolesFetchError | IActionRolePayloadChange;
export type RolesState = {
    readonly rolesDefsListReducer: IRoleDefsListState;
};
export type RolesPayloadState = {
    readonly rolesListPayloadReducer: IRolesListPayloadState;
};
export type RoleDefProp = RoleDefState & RoleDefDispatch;