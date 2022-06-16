import { useState } from 'react';
export const useReadWriteJSON = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = () => userData;

  const writeUserData = async (data) => {
    const fileData = JSON.stringify(data);
    const blob = new Blob([fileData], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'filename.json';
    link.href = url;
    link.click();
  };

  const readUserData = () => {};

  return { getUserData, writeUserData };
};
