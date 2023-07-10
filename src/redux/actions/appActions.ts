import {SET_IS_LOAD, SET_CURRENT_POST} from '../TYPES';

const setIsLoad = (load: boolean) => ({
  type: SET_IS_LOAD,
  payload: load,
});

const setCurrentPost = (post: number) => ({
  type: SET_CURRENT_POST,
  payload: post,
});

export {setIsLoad, setCurrentPost};
