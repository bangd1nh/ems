import axios from "axios"

const REST_API_BASE_URL = 'http://localhost:8080/api/departments'

export const getAllDepartment = () => axios.get(REST_API_BASE_URL)

export const addNewDepartment = (department) => axios.post(REST_API_BASE_URL, department)

export const getDepartmentById = (id) => axios.get(REST_API_BASE_URL + '/' + id)

export const updateDepartment = (department, id) => axios.put(REST_API_BASE_URL + '/' + id, department)

export const deleteDepartment = (id) => axios.delete(REST_API_BASE_URL + '/' + id)