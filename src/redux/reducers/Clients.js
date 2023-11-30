import {DELETE_CLIENTS, FETCH_CLIENTS, GET_CLIENTS, TOGGLE_IS_FETCHING} from "../constants/Clients";
import {clientAPI} from "../../api/apiClients";

const initialState = {
  clients: [],
  isLoading: false,
  client: null
}

const clients = (state = initialState, action) => {
  switch (action.type) {
    case GET_CLIENTS:
      return {
        ...state,
        clients: action.payload
      }
    case DELETE_CLIENTS:
      return {
        ...state,
        clients: state.clients.filter(client => client.id !== action.payload)
      }
    case TOGGLE_IS_FETCHING:
      return {
        ...state, isLoading: action.payload
      }
    case FETCH_CLIENTS:
      return {
        ...state,
        client: action.payload
      }
    default:
      return state
  }
}

export default clients

export const getClientsAC = (payload) => ({type: GET_CLIENTS, payload});
export const deleteClientsAC = (payload) => ({type: DELETE_CLIENTS, payload});
export const toggleIsFetching = (payload) => ({type: TOGGLE_IS_FETCHING, payload});
export const fetchClientsAC = (payload) => ({type: FETCH_CLIENTS, payload});

export const getClient = () => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await clientAPI.getClients();
  dispatch(getClientsAC(data.data));
  dispatch(toggleIsFetching(false));
}

export const fetchClient = (id) => async (dispatch) => {
  dispatch(toggleIsFetching(true));
  let data = await clientAPI.getClient(id);
  dispatch(fetchClientsAC(data.data));
  dispatch(toggleIsFetching(false));
}

export const deleteClient = (id) => (dispatch) => {
  dispatch(deleteClientsAC(id))
}
