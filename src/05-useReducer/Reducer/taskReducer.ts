import * as z from "zod";


interface Todo {
    id:        number;
    text:      string;
    completed: boolean;
}

interface taskState {
    todos:     Todo[],
    length:    number,
    completed: number,
    pending:   number,
}

export type taskAction =   
    |   {type: 'ADD_TODO';    payload: string}
    |   {type: 'TOGGLE_TODO'; payload: number}
    |   {type: 'DELETE_TODO'; payload: number}


const TodoSchema = z.object({
    id:        z.number(),
    text:      z.string(),
    completed: z.boolean(),
});

const TaskStateChema = z.object({
    todos:     z.array(TodoSchema),
    length:    z.number(),
    completed: z.number(),
    pending:   z.number(),
})

export const getTaskInitialState = (): taskState => {

    
    const localStorageState = localStorage.getItem('task-state');
    
    if (!localStorageState) {
        return  {
            todos:     [],
            length:    0,
            completed: 0,
            pending:   0
        }
        
    }
    
    const result = TaskStateChema.safeParse(JSON.parse(localStorageState));
    
    if (result.error) {
        console.log(result.error);
        return  {
            todos:     [],
            length:    0,
            completed: 0,
            pending:   0
        }
    }
    return result.data;
}

export const taskReducer = (state:taskState, action:taskAction):taskState => {

    switch (action.type) {
        
        case "ADD_TODO":{

        const newTodo: Todo = {
            id:        Date.now(),
            text:      action.payload,
            completed: false
        }
            return {
                ...state,
                todos:   [...state.todos, newTodo],
                length:  state.todos.length + 1,
                pending: state.pending + 1
            }
        }

        case 'DELETE_TODO':{
            const currentTodos = state.todos.filter( (todo) => todo.id != action.payload)
                return {
                    ...state,
                    todos:     currentTodos,
                    length:    currentTodos.length,
                    completed: currentTodos.filter(todos => todos.completed).length,
                    pending:   currentTodos.filter(todos => !todos.completed).length
                }
            }

        case 'TOGGLE_TODO':
            const updateTodos = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed }   
                }
                return todo;
            })

            return {
                ...state, 
                todos:     updateTodos,
                completed: updateTodos.filter(todos => todos.completed).length,
                pending:   updateTodos.filter(todos => !todos.completed).length
            }

        default:
            return state
    }
}
