import axios from "axios";

function ValidateAdmin(username) {
  const API = process.env.REACT_APP_API_URL;
  // Should return true of false if user has admin rights
  const result = await axios.get(`${API}/users/${username}`);
  return result;
}

export default ValidateAdmin;
