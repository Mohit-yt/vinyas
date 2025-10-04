import { motion } from 'motion/react';
import { useState } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  File, 
  Folder, 
  Play, 
  Zap, 
  Settings, 
  Upload,
  X,
  Cpu,
  BarChart3
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';

interface RightPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RightPanel({ isOpen, onClose }: RightPanelProps) {
  const [expandedFolders, setExpandedFolders] = useState<string[]>(['src']);

  const fileTree = [
    {
      name: 'src',
      type: 'folder',
      children: [
        { name: 'cpu_core.v', type: 'file', language: 'verilog' },
        { name: 'alu.v', type: 'file', language: 'verilog' },
        { name: 'memory_ctrl.v', type: 'file', language: 'verilog' },
      ]
    },
    {
      name: 'testbench',
      type: 'folder',
      children: [
        { name: 'cpu_tb.v', type: 'file', language: 'verilog' },
        { name: 'alu_tb.v', type: 'file', language: 'verilog' },
      ]
    },
    {
      name: 'constraints',
      type: 'folder',
      children: [
        { name: 'timing.sdc', type: 'file', language: 'sdc' },
        { name: 'floorplan.tcl', type: 'file', language: 'tcl' },
      ]
    }
  ];

  const quickActions = [
    { label: 'Optimize Layout', icon: Zap, color: '#00d4ff' },
    { label: 'Run Testbench', icon: Play, color: '#00ff88' },
    { label: 'Timing Analysis', icon: BarChart3, color: '#ff6b35' },
    { label: 'Upload Verilog', icon: Upload, color: '#9333ea' },
  ];

  const toggleFolder = (folderName: string) => {
    setExpandedFolders(prev => 
      prev.includes(folderName) 
        ? prev.filter(f => f !== folderName)
        : [...prev, folderName]
    );
  };

  const renderFileTree = (items: any[], depth = 0) => {
    return items.map((item, index) => (
      <div key={item.name} style={{ marginLeft: `${depth * 16}px` }}>
        {item.type === 'folder' ? (
          <div>
            <button
              onClick={() => toggleFolder(item.name)}
              className="flex items-center gap-2 w-full p-2 text-left text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded"
            >
              {expandedFolders.includes(item.name) ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
              <Folder className="h-4 w-4 text-[#00d4ff]" />
              {item.name}
            </button>
            {expandedFolders.includes(item.name) && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.2 }}
              >
                {renderFileTree(item.children, depth + 1)}
              </motion.div>
            )}
          </div>
        ) : (
          <button className="flex items-center gap-2 w-full p-2 text-left text-sm text-gray-400 hover:text-white hover:bg-gray-800/50 rounded">
            <File className="h-4 w-4 text-gray-500" />
            {item.name}
            <Badge variant="outline" className="ml-auto text-xs text-gray-500 border-gray-600">
              {item.language}
            </Badge>
          </button>
        )}
      </div>
    ));
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed right-0 top-0 h-full w-80 bg-[#0f1419] border-l border-gray-700 z-30 overflow-y-auto"
      initial={{ x: 320 }}
      animate={{ x: 0 }}
      exit={{ x: 320 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white">Project Panel</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Project Info */}
        <Card className="mb-6 bg-gray-900/50 border-gray-700">
          <CardHeader className="pb-3">
            <div className="flex items-center gap-2">
              <Cpu className="h-5 w-5 text-[#00d4ff]" />
              <CardTitle className="text-base text-white">RISC-V Core</CardTitle>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-400">Status:</span>
                <Badge className="bg-[#00ff88]/20 text-[#00ff88] border-[#00ff88]/40">
                  Active
                </Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Technology:</span>
                <span className="text-white">28nm</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-400">Last Modified:</span>
                <span className="text-white">2 hours ago</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Quick Actions</h3>
          <div className="space-y-2">
            {quickActions.map((action, index) => {
              const Icon = action.icon;
              return (
                <motion.button
                  key={action.label}
                  className="w-full flex items-center gap-3 p-3 text-left text-sm text-gray-300 hover:text-white hover:bg-gray-800/50 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Icon 
                    className="h-4 w-4" 
                    style={{ color: action.color }}
                  />
                  {action.label}
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* File Tree */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-400 mb-3">Project Files</h3>
          <div className="space-y-1 bg-gray-900/30 rounded-lg p-3 border border-gray-700">
            {renderFileTree(fileTree)}
          </div>
        </div>

        {/* AI Suggestions */}
        <Card className="bg-gradient-to-br from-[#00d4ff]/10 to-[#00ff88]/10 border-[#00d4ff]/20">
          <CardHeader className="pb-3">
            <CardTitle className="text-sm text-[#00d4ff]">AI Suggestions</CardTitle>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="space-y-3 text-sm">
              <div className="p-2 bg-gray-900/50 rounded border border-gray-700">
                <p className="text-gray-300 mb-1">⚡ Optimize critical path</p>
                <p className="text-xs text-gray-500">Detected 2.1ns slack violation</p>
              </div>
              <div className="p-2 bg-gray-900/50 rounded border border-gray-700">
                <p className="text-gray-300 mb-1">🔧 Update testbench</p>
                <p className="text-xs text-gray-500">Add coverage for edge cases</p>
              </div>
              <div className="p-2 bg-gray-900/50 rounded border border-gray-700">
                <p className="text-gray-300 mb-1">📊 Run power analysis</p>
                <p className="text-xs text-gray-500">Estimated 15% power savings</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </motion.div>
  );
}