import api from "./api";

export const getDeces = async () => {
    const response = await api.get("deces/");
    return response.data;
};

export const createDeces = async (data) => {
    const response = await api.post("deces/", data);
    return response.data;
};

export const updateDeces = async (id, data) => {
    const response = await api.put(`deces/${id}/`, data);
    return response.data;
};

export const deleteDeces = async (id) => {
    return await api.delete(`deces/${id}/`);
};

export const getPersonnes = async () => {
    const response = await api.get("personnes/");
    return response.data;
};

export const getCauses = async () => {
    const response = await api.get("causes/");
    return response.data;
};

export const getLieux = async () => {
    const response = await api.get("lieux/");
    return response.data;
};

export const getDecesById = async (id) => {
    const response = await api.get(`deces/${id}/`);
    return response.data;
};
