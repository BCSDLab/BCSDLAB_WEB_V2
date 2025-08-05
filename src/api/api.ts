import axios from 'axios/index';

const API_PATH = process.env.ROOT_API;

export function getMembers() {
  return axios.get(`${API_PATH}members`);
}

export function getActivites(year: string) {
  return axios.get(`${API_PATH}activities?year=${year}`);
}

export function getTrackInfo(id: number) {
  return axios.get(`${API_PATH}tracks/${id}`);
}

export function getTotalTrackInfo() {
  return axios.get(`${API_PATH}tracks`);
}
