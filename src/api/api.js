import * as axios from 'axios';

const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0/',
  withCredentials: true,
  header: {
    "API-KEY": "bfe706e6-6fdf-4778-8cc8-3332cc379a73",
  }
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
      .then(response => {
        return response.data;
      });
  }
};

export const followAPI = {
  followUser(userId) {
    return instance.post(`follow/${userId}`).then(response => {
      return response.data;
    });
  },
  unfollowUser(userId) {
    return instance.delete(`follow/${userId}`).then(response => {
      return response.data;
    });
  }
};

export const authAPI = {
  authMe() {
    return instance.get(`auth/me`).then(response => {
      return response.data;
    });
  }
};