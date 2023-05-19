import { useContext } from "react";
import { CategoryContext } from "@/contexts/CategoryContext";

export const useCategoriesToProducts = () => useContext(CategoryContext);
