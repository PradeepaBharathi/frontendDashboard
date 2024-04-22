import axios from 'axios'

const BASE_URL = "http://localhost:5000";

export const registerUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
      `${BASE_URL}/api/user/register`,
      userData
    );
    if (!response.data) {
      throw new Error("Unable to register");
    }
      dispatch({ type: "REGISTER_USER", payload: response.data });
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("name", response.data.name);
    console.log(response.data);
  } catch (error) {
    dispatch({ type: "REGISTER_ERROR", payload: error.message });
    console.log(error.message);
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    const response = await axios.post(
        `${BASE_URL}/api/user/login`,
       
      userData
    );
    if (!response.data) {
      throw new Error("Unable to register");
    }
    dispatch({ type: "LOGIN_USER", payload: response.data });
   localStorage.setItem("token", response.data.token);
   localStorage.setItem("name", response.data.name);
    console.log(response.data);
  } catch (error) {
    dispatch({ type: "LOGIN_ERROR", payload: error.response.data.message });
    console.log(error.message);
    throw error;
  }
};
export const getUser = () => async (dispatch) => {
    try {
      
    
    const response = await axios.get(
      `${BASE_URL}/api/user/allUser`,
      {
        headers: {
          "x-auth-token": localStorage.getItem("token"),
        },
      }
        );
        
    if (!response.data) {
      throw new Error("Unable to get data");
    }
    dispatch({ type: "GET_USER", payload: response.data });

    console.log(response.data);
  } catch (error) {
    dispatch({ type: "GET_ERROR", payload: error.response.data.message });
    console.log(error.message);
    throw error;
  }
};