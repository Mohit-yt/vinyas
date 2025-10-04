import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { PanelRight } from 'lucide-react';
import { Sidebar } from './Sidebar';
import { Dashboard } from './Dashboard';
import { ChatArea } from './ChatArea';
import { RightPanel } from './RightPanel';
import { Header } from './Header';
import { Footer } from './Footer';
import { Button } from './ui/button';

interface UserData {
  email: string;
}

interface ProfileData {
  username: string;
  companyName: string;
  companyBrief: string;
}

interface MainLayoutProps {
  userData?: UserData | null;
  profileData?: ProfileData | null;
  onShowLogin?: () => void;
  onShowProfile?: () => void;
}

export function MainLayout({ userData, profileData, onShowLogin, onShowProfile }: MainLayoutProps) {
  const [activeView, setActiveView] = useState('dashboard');
  const [rightPanelOpen, setRightPanelOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const renderMainContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'assistant':
        return <ChatArea />;
      case 'projects':
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Projects</h2>
            <p className="text-gray-400">Project management interface coming soon...</p>
          </div>
        );
      case 'visualization':
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Visualization</h2>
            <p className="text-gray-400">Design visualization tools coming soon...</p>
          </div>
        );
      case 'reports':
        return (
          <div className="p-8 text-center">
            <h2 className="text-2xl font-semibold text-white mb-4">Reports</h2>
            <p className="text-gray-400">Analysis reports and metrics coming soon...</p>
          </div>
        );
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="h-screen bg-[#0a0f1c] flex overflow-hidden">
      {/* Sidebar */}
      <Sidebar 
        activeView={activeView} 
        onViewChange={setActiveView}
        isMobile={isMobile}
      />

      {/* Main Content Area */}
      <motion.div
        className={`flex-1 flex flex-col ${isMobile ? 'ml-0' : 'ml-64'}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Header */}
        <Header 
          currentView={activeView} 
          userData={userData}
          profileData={profileData}
          onShowLogin={onShowLogin}
          onShowProfile={onShowProfile}
        />

        {/* Main Content with scroll container */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <div className="flex-1 overflow-auto">
            <motion.div
              key={activeView}
              className="min-h-full flex flex-col"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Content */}
              <div className="flex-1">
                {renderMainContent()}
              </div>
              
              {/* Footer */}
              <Footer />
            </motion.div>
          </div>
        </div>

        {/* Right panel toggle (floating button) */}
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setRightPanelOpen(!rightPanelOpen)}
          className={`fixed top-4 right-4 z-40 h-10 w-10 rounded-full shadow-lg transition-all duration-200 ${
            rightPanelOpen 
              ? 'bg-[#00d4ff] text-[#0a0f1c] hover:bg-[#00b8e6]' 
              : 'bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700 border border-gray-600'
          }`}
        >
          <PanelRight className="h-5 w-5" />
        </Button>
      </motion.div>

      {/* Right Panel */}
      <RightPanel 
        isOpen={rightPanelOpen} 
        onClose={() => setRightPanelOpen(false)} 
      />

      {/* Simplified background */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-5">
        <div className="absolute top-10 left-20 w-px h-24 bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent" />
        <div className="absolute top-32 right-32 w-px h-16 bg-gradient-to-b from-transparent via-[#00ff88] to-transparent" />
        <div className="absolute bottom-20 left-1/3 w-px h-20 bg-gradient-to-b from-transparent via-[#ff6b35] to-transparent" />
      </div>
    </div>
  );
}