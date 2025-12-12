import Cookies from 'js-cookie'
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { instance } from "./api";
const getUser = async () => {
  const response = await instance("/user/me");
  return response.data;
};
const token = Cookies.get('token')

export const useGetUser = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    enabled:!!token
  });

  return { data, isLoading, error };
};
