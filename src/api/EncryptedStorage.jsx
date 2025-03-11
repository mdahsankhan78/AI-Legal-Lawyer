import React from 'react';
import { EncryptStorage } from 'encrypt-storage';

const encryptStorage = new EncryptStorage('pookie-sigma-alpha-beta', {
    prefix: 'app_'
});

const useEncryptedLocalStorage = () => {
    // Function to set encrypted data in localStorage
    const setEncryptedItem = (key, value) => {
        encryptStorage.setItem(key, value);
    };

    // Function to get encrypted data from localStorage
    const getEncryptedItem = (key) => {
        return encryptStorage.getItem(key);
    };

    // Function to remove encrypted data from localStorage
    const removeEncryptedItem = (key) => {
        return encryptStorage.removeItem(key);
    };

    return { setEncryptedItem, getEncryptedItem, removeEncryptedItem };
};

export default useEncryptedLocalStorage;
