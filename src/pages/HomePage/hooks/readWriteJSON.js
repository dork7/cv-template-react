import { useState } from 'react';

export const useReadWriteJSON = () => {
  const [userData, setUserData] = useState(null);

  const getUserData = () => userData;

  const writeUserData = (data) => {};

  const readUserData = () => {};

  return { getUserData, writeUserData };
};
