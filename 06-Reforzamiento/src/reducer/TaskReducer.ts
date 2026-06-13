interface Todo {
    id: number;
    text: string;
    completed: boolean;
}

interface TaskState {
    todos: Todo[];
    length: number;
    completed: number;
    peding: number;
}

export type TaskAction =
    | { type: 'ADD_TODO'; payload: string }
    | { type: 'TOGGLE_TODO'; payload: number }
    | { type: 'DELETE_TODO'; payload: number };

export const getTaskInitialState = (): TaskState => {
    return {
        todos: [],
        completed: 0,
        peding: 0,
        length: 0,
    };
};

export const taskReducer = (
    state: TaskState,
    action: TaskAction
): TaskState => {
    switch (action.type) {
        case 'ADD_TODO': {
            const newTodo: Todo = {
                id: Date.now(),
                text: action.payload,
                completed: false,
            };

            return {
                ...state,
                length: state.todos.length + 1,
                peding: state.peding + 1,
                todos: [...state.todos, newTodo],
            };
        }
        case 'TOGGLE_TODO': {
            const updatedTodo = state.todos.map((todo) => {
                if (todo.id === action.payload) {
                    return { ...todo, completed: !todo.completed };
                }

                return todo;
            });

            return {
                ...state,
                todos: updatedTodo,
                completed: updatedTodo.filter((todo) => todo.completed).length,
                peding: updatedTodo.filter((todo) => !todo.completed).length,
            };
        }
        case 'DELETE_TODO': {
            const updatedTodo = state.todos.filter(
                (todo) => todo.id != action.payload
            );

            return {
                ...state,
                todos: updatedTodo,
                length: updatedTodo.length,
                completed: updatedTodo.filter((todo) => todo.completed).length,
                peding: updatedTodo.filter((todo) => !todo.completed).length,
            };
        }
        default:
            return state;
    }
};
