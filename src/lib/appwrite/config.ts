import { Client, Account, Databases, Storage, Avatars } from "appwrite";

export const appwriteConfigs = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_URL,
  databaseId: import.meta.env.VITE_APPWRITE_DB_ID,
  storageId: import.meta.env.VITE_APPWRITE_STORAGE_ID,
  userCollectionId: import.meta.env.VITE_APPWRITE_USERS_COLLECTION_ID,
  postCollectionId: import.meta.env.VITE_APPWRITE_POSTS_COLLECTION_ID,
  savesCollectionId: import.meta.env.VITE_APPWRITE_SAVES_COLLECTION_ID,
};

export const client = new Client();

client.setProject(appwriteConfigs.projectId);
client.setEndpoint(appwriteConfigs.url);

export const account = new Account(client);
export const db = new Databases(client);
export const storage = new Storage(client);
export const avatars = new Avatars(client);
