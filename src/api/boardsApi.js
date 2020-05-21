import fetchWrapper from './fetchApi';

// eslint-disable-next-line import/prefer-default-export
export const getBoards = async () => fetchWrapper({ endpoint: '/board' });

export const setFail = () => {

};
