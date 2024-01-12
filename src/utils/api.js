import axios from "axios";
import dayjs from "dayjs";
import { toast } from "react-toastify";


export const api = axios.create({
  baseURL: "http://localhost:7000/api",
});

export const getAllProperties = async () => {
  try {
    const response = await api.get("/residency/allresidency", {
      timeout: 10 * 1000,
    });
    if (response.status === 400 || response.status === 500) {
      throw response.data;
    }
    return response.data;
  } catch (error) {
    toast.error("something went wrong");
    throw error;
  }
};

export const getProperty = async (id) => {
  // console.log('hello')
    try {
      const response = await api.get(`/residency/${id}`)
      // console.log(response)
      if(response.status === 400 || response.status === 500){
        throw response.data
      }
      return response.data
    // console.log(data)
    } catch (error) {
      // console.log(error)
      toast.error("Something Went Wrong")
     
    }
}

export const createUser = async(email) => {
    try {
      await api.post(`/user/register`, {email})
      // console.log(createUser)
    } catch (error) {
      toast.error('something went wrong, please try again')
      throw error
    }
}

export const bookVisit = async (date, propertyId, email) => {
  try {
 const booking =   await api.post(`/user/bookVisit/${propertyId}`,{
      email,
      id:propertyId,
      date: dayjs(date).format("DD/MM/YYYY")
    })
    console.log(booking)
  } catch (error) {
    toast.error('something went wrong , Please try again')
  }
}