import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyN2I2OWJjODU5MGFiMjJkZWM1MDMwMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1MjMzOTM0MiwiZXhwIjoxNjUyNTk4NTQyfQ.NQuQ2VnUYgMT_GVchTlB-_Oe3UmWftspYif0oJQtxCE"

export const publicRequest = axios.create({
  baseURL: BASE_URL,
})

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` }
})