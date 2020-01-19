import { Todo } from './todos.service';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todosSearch'
})

export class TodosSearchPipe implements PipeTransform {
  transform(todos: Todo[], search: string = ''): Todo[] {
    if(!search.trim()){
      return todos;
    }

    return todos.filter(todo => {
      return todo.title.toLowerCase().indexOf(search.toLowerCase()) !== -1
    })
  }
}