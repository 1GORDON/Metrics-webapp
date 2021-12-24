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
  const finalData = await fetch('https://financialmodelingprep.com/api/v3/gainers?apikey=70b9bd945b8252537780413eb681a7d1', requestOptions);
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
