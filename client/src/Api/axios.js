import axios from "axios";

export default axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
// https://jsonplaceholder.typicode.com/posts
