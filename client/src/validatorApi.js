import axios from "axios";
axios.defaults.withCredentials = true;

const onLogin = async (loginData) => {
  try {
    const response = await axios.post("http://localhost:3001/", loginData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export { onLogin };
