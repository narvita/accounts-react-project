import axios from "axios";
import { endpointUrl } from "../envariments";
import { UserInterface } from '../interfaces/UserInteface';

export const getUsers = async (): Promise<UserInterface[]> => {
  const response = await axios.get(endpointUrl);
  return response.data;
}


export const getUser = async (id: string | undefined): Promise<UserInterface> => {
  const response = await axios.get(`${endpointUrl}/${id}`);
  return response.data;
}
