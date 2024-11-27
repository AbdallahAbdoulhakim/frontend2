import { createContext } from "react";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const email = "secretariat@inseed-comores.org";
  const telephone = "+269 373 87 32";
  const socials = {
    twitter: "https://x.com/FCBarcelona",
    facebook: "https://www.facebook.com/fcbarcelona",
    instagram: "https://www.instagram.com/fcbarcelona",
    linkedin: "https://www.linkedin.com/in/abdallah-abdoulhakim-6bb75b95",
  };
  return (
    <DataContext.Provider value={{ email, telephone, socials }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
