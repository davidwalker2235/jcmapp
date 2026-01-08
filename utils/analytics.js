// Analytics utility - funciona en iOS, Android y Web
import { Platform } from 'react-native';

// Función para registrar eventos de analytics
export const logEvent = async (eventName, params = {}) => {
  try {
    if (Platform.OS === 'web') {
      // Para web, usa Firebase JS SDK
      const { logEvent: webLogEvent } = await import('firebase/analytics');
      const { analytics } = await import('../firebaseConfig');
      if (analytics) {
        webLogEvent(analytics, eventName, params);
      }
    } else {
      // Para iOS/Android, usa React Native Firebase
      const analytics = (await import('@react-native-firebase/analytics')).default;
      await analytics().logEvent(eventName, params);
    }
  } catch (error) {
    console.warn('Analytics error:', error);
  }
};

// Función para registrar pantallas vistas
export const logScreenView = async (screenName, screenClass) => {
  try {
    if (Platform.OS === 'web') {
      const { logEvent: webLogEvent } = await import('firebase/analytics');
      const { analytics } = await import('../firebaseConfig');
      if (analytics) {
        webLogEvent(analytics, 'screen_view', {
          firebase_screen: screenName,
          firebase_screen_class: screenClass,
        });
      }
    } else {
      const analytics = (await import('@react-native-firebase/analytics')).default;
      await analytics().logScreenView({
        screen_name: screenName,
        screen_class: screenClass,
      });
    }
  } catch (error) {
    console.warn('Analytics error:', error);
  }
};

// Función para establecer propiedades de usuario
export const setUserProperty = async (name, value) => {
  try {
    if (Platform.OS === 'web') {
      const { setUserProperties } = await import('firebase/analytics');
      const { analytics } = await import('../firebaseConfig');
      if (analytics) {
        setUserProperties(analytics, { [name]: value });
      }
    } else {
      const analytics = (await import('@react-native-firebase/analytics')).default;
      await analytics().setUserProperty(name, value);
    }
  } catch (error) {
    console.warn('Analytics error:', error);
  }
};

// Función para establecer el ID de usuario
export const setUserId = async (userId) => {
  try {
    if (Platform.OS === 'web') {
      const { setUserId: webSetUserId } = await import('firebase/analytics');
      const { analytics } = await import('../firebaseConfig');
      if (analytics) {
        webSetUserId(analytics, userId);
      }
    } else {
      const analytics = (await import('@react-native-firebase/analytics')).default;
      await analytics().setUserId(userId);
    }
  } catch (error) {
    console.warn('Analytics error:', error);
  }
};

