import { Action} from '@ngrx/store';
import { TodoActionTypesEnum} from '../shared/enums/todo-action-types.enum';

export class  ActionParent implements Action {
  type: any;
  payload: any;
}
export class TodoAction implements ActionParent{
  type: TodoActionTypesEnum.Add;
  constructor(public payload: any) {
  }
}
