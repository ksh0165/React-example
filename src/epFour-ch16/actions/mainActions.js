export const TOGGLE_SWITCH = 'TOGGLE_SWITCH';
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const toggleSwitch = () => ({type:TOGGLE_SWITCH});
export const increase = (difference) => ({type:INCREASE, difference});
export const decrease = () => ({type:DECREASE });
