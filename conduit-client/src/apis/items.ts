import axios from "axios";
import { GetItemParams } from "../types/item";

export const getItems = async (params?: GetItemParams) => {
  // packed = true => http://localhost:3000/items?packed=true
  // packed = false => http://localhost:3000/items?packed=false
  const { packed } = params ?? {};
  const response = await axios.get("http://localhost:3000/items", {
    params: { packed },
  });
  if (response.data.success) return response.data.data;

  return response.data;
};

export const createItem = async ({
  name,
  packed,
}: {
  name: string;
  packed?: boolean;
}) => {
  const response = await axios.post("http://localhost:3000/items", {
    name,
    packed,
  });

  return response.data;
};

export const updatePackedItem = async (id: number, packed: boolean) => {
  const response = await axios.patch(
    `http://localhost:3000/items/update-packed/${id}`,
    {
      packed,
    }
  );

  return response.data;
};

export const deleteItem = async (id: number) => {
  const response = await axios.delete(`http://localhost:3000/items/${id}`);

  return response.data;
};
