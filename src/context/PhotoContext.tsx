import React, { createContext, useContext, useState, useEffect } from 'react';

interface PhotoState {
  deskPhoto: string | null;
  workingPhoto: string | null;
  profilePhoto: string | null;
  contactPhoto: string | null;
  setPhoto: (type: 'desk' | 'working' | 'profile' | 'contact', url: string) => void;
  resetPhotos: () => void;
}

const PhotoContext = createContext<PhotoState | undefined>(undefined);

function safeGetStorage(key: string, fallback: string): string {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem(key) || fallback;
    }
  } catch {
    // Sandboxed iframe or cookies disabled
  }
  return fallback;
}

function safeSetStorage(key: string, value: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.setItem(key, value);
    }
  } catch {
    // Sandboxed iframe or quota exceeded
  }
}

function safeRemoveStorage(key: string): void {
  try {
    if (typeof window !== 'undefined' && window.localStorage) {
      localStorage.removeItem(key);
    }
  } catch {
    // Sandboxed iframe
  }
}

export const PhotoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [deskPhoto, setDeskPhoto] = useState<string | null>(() => {
    return safeGetStorage('asif_photo_desk', '/assets/ooo 3.png');
  });

  const [profilePhoto, setProfilePhoto] = useState<string | null>(() => {
    return safeGetStorage('asif_photo_profile', '/assets/My fivver profile photo.png');
  });

  const [contactPhoto, setContactPhoto] = useState<string | null>(() => {
    return safeGetStorage('asif_photo_contact', '/assets/My fivver profile photo.png');
  });

  useEffect(() => {
    if (deskPhoto && deskPhoto.startsWith('data:')) {
      safeSetStorage('asif_photo_desk', deskPhoto);
    }
  }, [deskPhoto]);

  useEffect(() => {
    if (profilePhoto && profilePhoto.startsWith('data:')) {
      safeSetStorage('asif_photo_profile', profilePhoto);
    }
  }, [profilePhoto]);

  useEffect(() => {
    if (contactPhoto && contactPhoto.startsWith('data:')) {
      safeSetStorage('asif_photo_contact', contactPhoto);
    }
  }, [contactPhoto]);

  const setPhoto = (type: 'desk' | 'working' | 'profile' | 'contact', url: string) => {
    if (type === 'desk' || type === 'working') setDeskPhoto(url);
    if (type === 'profile') setProfilePhoto(url);
    if (type === 'contact') setContactPhoto(url);
  };

  const resetPhotos = () => {
    safeRemoveStorage('asif_photo_desk');
    safeRemoveStorage('asif_photo_profile');
    safeRemoveStorage('asif_photo_contact');
    setDeskPhoto('/assets/ooo 3.png');
    setProfilePhoto('/assets/My fivver profile photo.png');
    setContactPhoto('/assets/My fivver profile photo.png');
  };

  return (
    <PhotoContext.Provider
      value={{
        deskPhoto,
        workingPhoto: deskPhoto,
        profilePhoto,
        contactPhoto,
        setPhoto,
        resetPhotos,
      }}
    >
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotos = () => {
  const context = useContext(PhotoContext);
  if (!context) {
    throw new Error('usePhotos must be used within a PhotoProvider');
  }
  return context;
};
