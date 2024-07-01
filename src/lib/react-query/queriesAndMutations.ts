import {
  // useQuery,
  useMutation,
  // useQueryClient,
  // useInfiniteQuery,
} from "@tanstack/react-query";
import {
  createUserAccount,
  signInAccount,
  signOutAccount,
} from "../appwrite/services/auth_service";
import { INewUser } from "@/types/types";

export const useCreateUserAccountMutation = () => {
  return useMutation({
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};

export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
export const useSignOutAccount = () => {
  return useMutation({
    mutationFn: signOutAccount,
  });
};
