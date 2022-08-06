import { RequestStateEnum } from 'Types/Domain';
import { IRoleDef } from './RoleDef';

export interface RoleDefsListProp {
  roleDefs: IRoleDef[];
  loadingState: RequestStateEnum,
  onFilter: Function,
  onShowDeleted: Function,
  theme?: any;
}
