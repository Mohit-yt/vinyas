import { motion } from 'motion/react';
import { Cpu, Zap, Settings, Bell, User } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

interface UserData {
  email: string;
}

interface ProfileData {
  username: string;
  companyName: string;
  companyBrief: string;
}

interface HeaderProps {
  currentView: string;
  userData?: UserData | null;
  profileData?: ProfileData | null;
  onShowLogin?: () => void;
  onShowProfile?: () => void;
}

export function Header({ currentView, userData, profileData, onShowLogin, onShowProfile }: HeaderProps) {
  return (
    <motion.header
      className="h-16 bg-[#0f1419] border-b border-[#00d4ff]/20 flex items-center justify-between px-6 relative z-50"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Left: Logo and current view */}
      <div className="flex items-center gap-6">
        <motion.div
          className="flex items-center gap-3"
          whileHover={{ scale: 1.02 }}
        >
          <div className="relative">
            <Cpu className="h-8 w-8 text-[#00d4ff]" />
            <motion.div
              className="absolute inset-0 bg-[#00d4ff] rounded opacity-20"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Vinyas</h1>
            <p className="text-xs text-[#00d4ff] opacity-80">AI Assistant</p>
          </div>
        </motion.div>

        {/* Current view indicator */}
        <div className="flex items-center gap-2">
          <div className="w-px h-6 bg-gray-600" />
          <Badge variant="outline" className="text-[#00ff88] border-[#00ff88]/40 bg-[#00ff88]/10">
            {currentView.charAt(0).toUpperCase() + currentView.slice(1)}
          </Badge>
        </div>
      </div>

      {/* Right: Status and actions */}
      <div className="flex items-center gap-4">
        {/* System status */}
        <div className="flex items-center gap-2">
          <motion.div
            className="w-2 h-2 bg-[#00ff88] rounded-full"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-sm text-gray-400">AI Online</span>
        </div>

        {/* User info and action buttons */}
        <div className="flex items-center gap-4">
          {/* User welcome */}
          {profileData ? (
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm text-white font-medium">
                  Welcome, {profileData.username}
                </div>
                <div className="text-xs text-gray-400">
                  {profileData.companyName}
                </div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
            </div>
          ) : (
            <div className="flex items-center gap-3">
              <div className="text-right">
                <div className="text-sm text-white font-medium">
                  Demo Mode
                </div>
                <div className="text-xs text-gray-400">
                  Guest User
                </div>
              </div>
              <div className="w-px h-8 bg-gray-600" />
            </div>
          )}

          {/* Action buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-[#ff6b35] hover:bg-[#ff6b35]/10"
            >
              <Bell className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10"
            >
              <Settings className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-gray-400 hover:text-white hover:bg-gray-700"
            >
              <User className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Subtle animated background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent opacity-10"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#00ff88] to-transparent opacity-10"
          animate={{ opacity: [0.05, 0.15, 0.05] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
      </div>
    </motion.header>
  );
}