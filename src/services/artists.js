import api from "./apiConfing.js";

export const getArtists = async () => {
  try {
    const response = await api.get("/artists");

    return response.data;
  } catch (error) {
    console.error("Error Getting all Artists:", error);
  }
};


export const getArtistById = async (id) => {
    try{
     const response = await api.get(`/artists/id/${id}`)
     return response.data
    } catch(error){
     console.error("Error Getting the Artist:", error)
    }
 }

 export const createArtist = async (artistData) => {
    try{
     const response = await api.post(`/artists/`, artistData)
     return response.data
    } catch(error){
     console.error("Error", error)
    }
 }

 export const editArtist = async (id , artistData) => {
    try{
     const response = await api.put(`/artists/${id}`, artistData)
     return response.data
    } catch(error){
     console.error("Error", error)
    }
 }

 export const deleteArtist = async (id) => {
    try{
     const response = await api.delete(`/artists/${id}`)
     return response.data
    } catch(error){
     console.error("Error", error)
    }
 }
