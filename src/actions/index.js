export const ADD_FEATURE = 'ADD_FEATURE';
export const REM_FEATURE = 'REM_FEATURE';

export const addFeature = (feature) => {
    return { type: ADD_FEATURE, payload: feature };
};
export function remFeature(feature, index) {
    return {
        type: REM_FEATURE,
        payload: feature,
        index,
    };
}
