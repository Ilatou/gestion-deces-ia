import api from "./api";


export const getDashboardStats = async () => {
    const response = await api.get("analytics/dashboard/");
    return response.data;
};


export const getTopCauses = async () => {
    const response = await api.get("analytics/causes/");
    return response.data;
};


export const getRegions = async () => {
    const response = await api.get("analytics/regions/");
    return response.data;
};


export const getSexes = async () => {
    const response = await api.get("analytics/sexes/");
    return response.data;
};
