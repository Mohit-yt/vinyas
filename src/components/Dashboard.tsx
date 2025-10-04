import { motion } from 'motion/react';
import { 
  Plus, 
  Upload, 
  BarChart3, 
  Cpu, 
  Zap, 
  Clock, 
  CheckCircle,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

export function Dashboard() {
  const quickActions = [
    {
      title: "Start New Project",
      description: "Begin a new semiconductor design project",
      icon: Plus,
      color: "from-[#00d4ff] to-[#0099cc]",
      action: () => console.log("Start new project")
    },
    {
      title: "Import Design",
      description: "Upload Verilog, VHDL, or layout files",
      icon: Upload,
      color: "from-[#00ff88] to-[#00cc66]",
      action: () => console.log("Import design")
    },
    {
      title: "View Reports",
      description: "Access analysis and simulation reports",
      icon: BarChart3,
      color: "from-[#ff6b35] to-[#cc5429]",
      action: () => console.log("View reports")
    }
  ];

  const stats = [
    { label: "Errors Fixed", value: "247", icon: CheckCircle, color: "#00ff88" },
    { label: "Time Saved", value: "156h", icon: Clock, color: "#00d4ff" },
    { label: "Projects Active", value: "12", icon: Cpu, color: "#ff6b35" }
  ];

  return (
    <div className="p-8 space-y-8">
      {/* Welcome Section */}
      <motion.div
        className="text-center py-12"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="inline-block mb-6">
          <Sparkles className="h-16 w-16 text-[#00d4ff] mx-auto mb-4" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4">
          Hello, I'm Vinyas
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          Let's simplify semiconductor design. I'm here to help with layout optimization, 
          simulation analysis, and design verification.
        </p>
      </motion.div>

      {/* Quick Actions */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Quick Actions</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <motion.div
                key={action.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-700 hover:border-[#00d4ff]/50 transition-all duration-300 cursor-pointer group">
                  <CardContent className="p-6">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </motion.div>
                    
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-[#00d4ff] transition-colors">
                      {action.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {action.description}
                    </p>
                    
                    <Button 
                      variant="ghost" 
                      className="p-0 h-auto text-[#00d4ff] hover:text-white group-hover:translate-x-1 transition-transform"
                      onClick={action.action}
                    >
                      Get Started
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Stats Panel */}
      <motion.div
        className="space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-white mb-6">Your Impact</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <Card className="bg-gray-900/50 border-gray-700">
                  <CardContent className="p-6 text-center">
                    <motion.div
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-4"
                      style={{ backgroundColor: `${stat.color}20`, border: `1px solid ${stat.color}40` }}
                      whileHover={{ scale: 1.1 }}
                    >
                      <Icon className="h-6 w-6" style={{ color: stat.color }} />
                    </motion.div>
                    
                    <motion.div
                      className="text-3xl font-bold text-white mb-2"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.8, delay: 0.8 + index * 0.1, type: "spring" }}
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-gray-400">{stat.label}</p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Recent Activity Placeholder */}
      <motion.div
        className="bg-gray-900/30 border border-gray-700 rounded-lg p-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h3 className="text-lg font-semibold text-white mb-4">Ready to Start?</h3>
        <p className="text-gray-400 mb-4">
          Click "Assistant" in the sidebar to begin a conversation, or use one of the quick actions above.
        </p>
        <div className="flex gap-2">
          <div className="w-2 h-2 bg-[#00d4ff] rounded-full opacity-60" />
          <div className="w-2 h-2 bg-[#00ff88] rounded-full opacity-60" />
          <div className="w-2 h-2 bg-[#ff6b35] rounded-full opacity-60" />
        </div>
      </motion.div>
    </div>
  );
}