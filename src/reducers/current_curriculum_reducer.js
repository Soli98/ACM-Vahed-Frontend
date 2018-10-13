const FETCH_CURRICULUM = "FETCH_CURRICULUM";
const SEARCH_OFFERING = "SEARCH_OFFERING";
const ADD_OFFERING_TO_CURRICULUM = "ADD_OFFERING_TO_CURRICULUM";
const DEL_OFFERING_FROM_CURRICULUM = "DEL_OFFERING_FROM_CURRICULUM";

export default function (state = null, action = {}) {
  switch (action.type) {
    case FETCH_CURRICULUM:
      return {...state, curr: action.curriculum};
    case SEARCH_OFFERING:
      return {...state, searchResults: action.results};
    case ADD_OFFERING_TO_CURRICULUM:
      return {...state, curr: action.curriculum};
    case DEL_OFFERING_FROM_CURRICULUM:
      return {...state, curr: {...state.curr, offers: state.curr.offers.filter(offer => offer.id !== action.oid)}}
    default:
      return state;
  }
}