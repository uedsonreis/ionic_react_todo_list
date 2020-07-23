import { Task } from './task';

export const CREATE = 'CREATE';
export const UPDATE = 'UPDATE';
export const DELETE = 'DELETE';

type Action = { type: string, payload: Task };

export const creators = {
    createCreate: (task: Task) => ({ type: CREATE, payload: task }),
    createUpdate: (task: Task) => ({ type: UPDATE, payload: task }),
    createDelete: (task: Task) => ({ type: DELETE, payload: task }),
};

const initialState: Task[] = [
    { id: 1, text: 'Desenvolvimento de Apps Mobile', isDone: false },
    { id: 2, text: 'Ferramentas, tecnologias e recomendações', isDone: false },
    { id: 3, text: 'Principais características do React Native', isDone: false },
    { id: 4, text: 'Criar e rodar um projeto com Expo', isDone: false },
    { id: 5, text: 'State e Props', isDone: false },
    { id: 6, text: 'Componentização', isDone: false },
    { id: 7, text: 'Utilizando o React Native Elements', isDone: false },
];

export function reducer(todoList = initialState, action: any) {
    const { type, payload } = action as Action;
    switch(type) {
        case CREATE: {
            const lastId = (todoList.length > 0) ? todoList[todoList.length-1].id! : todoList.length
            const task = { ...payload, id: lastId + 1 };
            return [ ...todoList, task ];
        }
        case UPDATE: {
            const task: Task | undefined = todoList.find(todo => todo.id === payload.id);
            if (task) {
                if (task.text) task.text = payload.text;
                task.isDone = payload.isDone;
                return [...todoList];
            }
            return todoList;
        };
        case DELETE: {
            return todoList.filter(todo => todo.id !== payload.id);
        };
        default: return todoList;
    }
}