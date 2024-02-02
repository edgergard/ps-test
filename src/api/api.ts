import { Album, Post, User } from "../types";

const BASE_URL = 'https://jsonplaceholder.typicode.com/users';

export const getUsers = async (): Promise<User[]> => {
  const response = await fetch(BASE_URL);

  return await response.json();
};

export const getPosts = async (userId: number): Promise<Post[]> => {
  const response = await fetch(`${BASE_URL}/${userId}/posts`);

  return await response.json();
};

export const getAlbums = async (userId: number): Promise<Album[]> => {
  const response = await fetch(`${BASE_URL}/${userId}/albums`);

  return await response.json();
};