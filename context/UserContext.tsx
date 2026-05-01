import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";

export type UserProfile = {
  name: string;
  email: string;
  career: string;
  semester: string;
  photo: string;
};

type UserContextType = {
  user: UserProfile;
  isLoading: boolean;
  saveUser: (value: UserProfile) => Promise<void>;
  clearUser: () => Promise<void>;
};

const STORAGE_KEY = "user_profile";

const emptyUser: UserProfile = {
  name: "",
  email: "",
  career: "",
  semester: "",
  photo: "",
};

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserProviderProps = {
  children: ReactNode;
};

export const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserProfile>(emptyUser);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const loadStoredUser = async () => {
      try {
        const savedUser = await AsyncStorage.getItem(STORAGE_KEY);

        if (savedUser) {
          setUser({ ...emptyUser, ...(JSON.parse(savedUser) as Partial<UserProfile>) });
        }
      } catch (error) {
        console.log("Error al recuperar usuario:", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadStoredUser();
  }, []);

  const saveUser = async (value: UserProfile) => {
    setUser(value);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(value));
  };

  const clearUser = async () => {
    setUser(emptyUser);
    await AsyncStorage.removeItem(STORAGE_KEY);
  };

  return (
    <UserContext.Provider value={{ user, isLoading, saveUser, clearUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useUser must be used inside UserProvider");
  }

  return context;
};
