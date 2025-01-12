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

export const createUser = () => {
    // Register User
    account.create(ID.unique(), 'me@example.com', 'password', 'Jane Doe')
        .then(function (response) {
            console.log(response);
        }, function (error) {
            console.log(error);
        });
}


