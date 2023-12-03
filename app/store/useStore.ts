import { User } from "firebase/auth";
import { create } from "zustand";

type UserStore = {
  user: User | null;
  setUser: (user: User) => void;
  removeUser: () => void;
};

export const useStore = create<UserStore>((set) => ({
  user: null,
  setUser: (user: User) => set(() => ({ user: user })),
  removeUser: () => set(() => ({ user: null })),
}));
