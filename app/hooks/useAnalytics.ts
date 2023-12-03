import { Analytics, getAnalytics } from "firebase/analytics";
import { FirebaseApp } from "firebase/app";

export const useAnalytics = () => {
  const getGoogleAnalytics = (app: FirebaseApp): Analytics => {
    const analytics = getAnalytics(app);
    return analytics;
  };
  return { getGoogleAnalytics };
};
