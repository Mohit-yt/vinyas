import { useState, useEffect } from 'react';
import { SplashScreen } from './components/SplashScreen';
import { LoginPage } from './components/LoginPage';
import { ProfileSetupPage } from './components/ProfileSetupPage';
import { MainLayout } from './components/MainLayout';

type AppState = 'loading' | 'splash' | 'login' | 'profile' | 'main' | 'error';

interface UserData {
  email: string;
}

interface ProfileData {
  username: string;
  companyName: string;
  companyBrief: string;
}

export default function App() {
  const [appState, setAppState] = useState<AppState>('loading');
  const [userData, setUserData] = useState<UserData | null>(null);
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    // Quick load with fallback - only run once
    const timer = setTimeout(() => {
      setAppState('splash');
    }, 50);
    
    // Fallback to skip splash if it takes too long
    const fallbackTimer = setTimeout(() => {
      setAppState(prev => {
        if (prev === 'loading' || prev === 'splash') {
          return 'login'; // Skip to login if splash times out
        }
        return prev;
      });
    }, 8000); // Fallback timeout

    return () => {
      clearTimeout(timer);
      clearTimeout(fallbackTimer);
    };
  }, []); // Remove appState dependency to prevent infinite re-renders

  const handleSplashComplete = () => {
    setAppState('login');
  };

  const handleLoginComplete = (loginData: UserData) => {
    setUserData(loginData);
    setAppState('profile');
  };

  const handleProfileComplete = (profile: ProfileData) => {
    setProfileData(profile);
    setAppState('main');
  };

  const handleSkipToMain = () => {
    // Emergency fallback to skip onboarding
    setUserData({ email: 'demo@vinyas.ai' });
    setProfileData({ 
      username: 'Demo User', 
      companyName: 'Demo Company', 
      companyBrief: 'Demo semiconductor company' 
    });
    setAppState('main');
  };

  if (appState === 'loading') {
    return (
      <div className="size-full dark bg-[#0a0f1c] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="text-[#00d4ff] text-lg">Loading Vinyas...</div>
          <div className="flex gap-2">
            <button 
              onClick={handleSkipToMain}
              className="text-sm text-gray-500 hover:text-[#00d4ff] underline"
            >
              Skip to Dashboard
            </button>
            <span className="text-gray-600">|</span>
            <button 
              onClick={() => setAppState('login')}
              className="text-sm text-gray-500 hover:text-[#00ff88] underline"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="size-full dark">
      {appState === 'splash' && (
        <SplashScreen onComplete={handleSplashComplete} />
      )}
      
      {appState === 'login' && (
        <LoginPage onComplete={handleLoginComplete} />
      )}
      
      {appState === 'profile' && userData && (
        <ProfileSetupPage 
          userData={userData} 
          onComplete={handleProfileComplete} 
        />
      )}
      
      {appState === 'main' && (
        <MainLayout 
          userData={userData} 
          profileData={profileData}
          onShowLogin={() => setAppState('login')}
          onShowProfile={() => setAppState('profile')}
        />
      )}
    </div>
  );
}