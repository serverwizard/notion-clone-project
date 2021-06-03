const CHANGE_COLOR = 'counter/CHANGE_COLOR';
const INCREMENT = 'counter/INCREMENT';
const DECREMENT = 'counter/DECREMENT';

export interface CounterAction {
    type: string;
    color?: string;
}

export interface CounterState {
    color: string;
    number: number;
}

export const changeColor = (color: string) => ({type: CHANGE_COLOR, color});
export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});

const initialState = {
    color: 'red',
    number: 0,
};

export default function counter(state: CounterState = initialState, action: CounterAction) {
    switch (action.type) {
        case CHANGE_COLOR:
            return {
                ...state,
                color: action.color,
            };
        case INCREMENT:
            return {
                ...state,
                number: state.number + 1,
            };
        case DECREMENT:
            return {
                ...state,
                number: state.number - 1,
            };
        default:
            return state;
    }
}