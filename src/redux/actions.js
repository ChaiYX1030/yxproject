const REPOS = 'REPOSITORY';

export const SET_LIST = `${REPOS}/SET_LIST`;
export const GET_LIST = `${REPOS}/GET_LIST`;

export const setList = (value) => ({
  type: SET_LIST,
  value,
});

export const getList = () => ({
  type: GET_LIST,
});
