import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { instance } from "./api";
const getCategories = async () => {
    const response = await instance("/categories/all");
    return response.data;
};


export const usegetCategories = () => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["categories"],
        queryFn: getCategories,
    });

    return { data, isLoading, error };
};

// ------------------------ bitta categoriyani olish -------------
const getCatrgoryId = async ({ queryKey }) => {
    const [_, id] = queryKey
      const response = await instance(`/categories/${id}`);
      return response.data;
};


export const usegetCatrgoryId = (id) => {
    const { data, isLoading, error } = useQuery({
        queryKey: ["category", id],
        queryFn: getCatrgoryId,
    });

    return { data, isLoading, error };
};
