import { Client } from 'react-native-appwrite';

export const config = {
    endpoint: 'https://cloud.appwrite.io/v1',
    platfotm: 'com.jsm.application',
    projectId: '6783b997001e4bf710e9',
    databaseId: '6783bb6a002b43a5f9d5',
    userColectionId: '6783c0d7000d4d258421',
    videoCollectionId: '6783c162003744ecd52a',
    storageId: '6784274f002403b385d6',
}


// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(config.endpoint) // Your Appwrite Endpoint
    .setProject(config.projectId) // Your project ID
    .setPlatform(config.platform) // Your application ID or bundle ID.
    ;

const account = new Account(client);
const avatars = new Avatars(client);
const database = new Database(client);

export const createUser = async (email, password, username) => {
    // Register a new User
    try {
        const newAccount = await account.create(
            Id.unique(),
            email,
            password,
            username

        )
        if (!newAccount) throw Error;
        const avatarUrl = avatars.getIniitials(username)

        await signIn(email, password);

        const newUser = await database.createDocument(
            config.databaseId,
            config.userColectionId,
            Id.unique(),
            {
                name: username,
                email: email,
                avatar: avatarUrl
            }
        )
        return newUser
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const signIn = async (email, password) => {
    try {
        const session = await account.createEmailSession(email, password);
        if (!session) {
            throw Error;
        }
        return session;
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}

export const getCurrentUser = async () => {
    try {
        const currentAccount = await account.get();

        if (!currentAccount) throw Error;

        const currentUser = await database.listDocuments(
            config.databaseId,
            config.userColectionId,
            [Query.equal('accountId', currentAccount.$id)]
        )
        if (!currentUser) throw Error;

        return currentUser.documents[0];
    }
    catch (error) {
        console.log(error);
        throw new Error(error);
    }
}