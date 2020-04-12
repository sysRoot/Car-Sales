import { initialState } from '../state';
import { ADD_FEATURE, REM_FEATURE } from '../actions';

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FEATURE: {
            const nextState = {
                ...state,
                additionalPrice: state.additionalPrice + action.payload.price,
                car: {
                    ...state.car,
                    features: [
                        ...state.car.features,
                        state.additionalFeatures.filter(
                            (item) => item.id === action.payload.id
                        )[0],
                    ],
                },
            };
            return nextState;
        }
        case REM_FEATURE: {
            const nextState = {
                ...state,
                additionalPrice: state.additionalPrice - action.payload.price,

                car: {
                    ...state.car,
                    features: [
                        ...state.car.features.filter(
                            (item, index) => index !== action.index
                        )
                    ]
                }
            };
            return nextState
        }
        default: {
            return state;
        }
    }
};
