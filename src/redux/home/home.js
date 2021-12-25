const COMPANIES = 'app/home/FETCH-COMPANIES';

const initialState = [];

const fetchData = (payload) => (
  {
    type: COMPANIES,
    payload,
  }
);

export const listAPIcall = () => async (dispatch) => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const finalData = await fetch('https://financialmodelingprep.com/api/v3/gainers?apikey=d93053dfe1909a2395cd527d59b36884', requestOptions);
  const data = await finalData.json();
  dispatch(fetchData(data));
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COMPANIES:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
