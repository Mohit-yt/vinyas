import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  MessageCircle, 
  LayoutDashboard, 
  FolderOpen, 
  Bot, 
  BarChart3, 
  FileText,
  Cpu,
  Plus,
  Settings,
  Menu,
  X
} from 'lucide-react';
import { Button } from './ui/button';

interface SidebarProps {
  activeView: string;
  onViewChange: (view: string) => void;
  isMobile?: boolean;
}

export function Sidebar({ activeView, onViewChange, isMobile = false }: SidebarProps) {
  const [isCollapsed, setIsCollapsed] = useState(isMobile);
  const [recentChats] = useState([
    "CMOS Layout Optimization",
    "Verilog Testbench Debug",
    "SPICE Model Analysis",
    "Logic Synthesis Review",
    "Timing Analysis Report"
  ]);

  const navigation = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'assistant', label: 'Assistant', icon: Bot },
    { id: 'visualization', label: 'Visualization', icon: BarChart3 },
    { id: 'reports', label: 'Reports', icon: FileText },
  ];

  return (
    <>
      {isMobile && (
        <Button
          variant="ghost"
          size="icon"
          className="fixed top-4 left-4 z-50 bg-[#0a0f1c] border border-[#00d4ff] text-[#00d4ff] hover:bg-[#00d4ff] hover:text-[#0a0f1c]"
          onClick={() => setIsCollapsed(!isCollapsed)}
        >
          {isCollapsed ? <Menu className="h-4 w-4" /> : <X className="h-4 w-4" />}
        </Button>
      )}

      <motion.div
        className={`fixed left-0 top-0 h-full bg-[#0f1419] border-r border-[#00d4ff]/20 z-40 ${
          isMobile ? 'w-80' : 'w-64'
        }`}
        initial={isMobile ? { x: -320 } : { x: 0 }}
        animate={{ x: isCollapsed && isMobile ? -320 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-6">
          {/* Logo */}
          <div className="flex items-center gap-3 mb-8">
            <div className="relative">
              <Cpu className="h-8 w-8 text-[#00d4ff]" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white">Vinyas</h2>
              <p className="text-xs text-[#00d4ff]">AI Assistant</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="space-y-2 mb-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => onViewChange(item.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 ${
                    activeView === item.id
                      ? 'bg-[#00d4ff]/20 text-[#00d4ff] border border-[#00d4ff]/40'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon className="h-5 w-5" />
                  <span>{item.label}</span>
                </motion.button>
              );
            })}
          </nav>

          {/* Recent Conversations */}
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="text-sm font-medium text-gray-400">Recent Conversations</h3>
              <Button variant="ghost" size="icon" className="h-6 w-6 text-[#00d4ff] hover:bg-[#00d4ff]/20">
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            
            <div className="space-y-1">
              {recentChats.map((chat, index) => (
                <motion.button
                  key={index}
                  className="w-full text-left px-3 py-2 text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded-md transition-colors duration-200 truncate"
                  whileHover={{ x: 4 }}
                >
                  <MessageCircle className="inline h-3 w-3 mr-2" />
                  {chat}
                </motion.button>
              ))}
            </div>
          </div>
        </div>

        {/* Settings at bottom */}
        <div className="absolute bottom-6 left-6 right-6">
          <Button 
            variant="ghost" 
            className="w-full justify-start text-gray-400 hover:text-white hover:bg-gray-800/50"
          >
            <Settings className="h-4 w-4 mr-3" />
            Settings
          </Button>
        </div>
      </motion.div>
    </>
  );
}