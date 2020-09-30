import {TodoActionTypesEnum} from '../shared/enums/todo-action-types.enum';
import { ActionParent} from '../actions/todo.action';
import {Todo} from '../models/todo';
 export const initialState: Todo[] = [
{title : 'Todo 1'},
  {title : 'Todo 2'},
  {title : 'Todo 3'}
];
export function TodoReducer( state = initialState , action: ActionParent): Todo[] {
   switch (action.type){
     default: return state;
   }
 }
