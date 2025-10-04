import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Building, User, FileText, Zap, CheckCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';

interface ProfileSetupPageProps {
  userData: { email: string };
  onComplete: (profileData: {
    username: string;
    companyName: string;
    companyBrief: string;
  }) => void;
}

export function ProfileSetupPage({ userData, onComplete }: ProfileSetupPageProps) {
  const [formData, setFormData] = useState({
    username: '',
    companyName: '',
    companyBrief: ''
  });
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.username.trim() || !formData.companyName.trim()) return;

    setIsLoading(true);
    
    // Simulate API call - reduced time
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    onComplete(formData);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const isFormValid = formData.username.trim() && formData.companyName.trim();

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#0a0f1c] to-[#0f1419] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Enhanced Background Circuit Pattern */}
      <div className="absolute inset-0 opacity-10">
        {/* Main circuit board outline */}
        <motion.div
          className="absolute top-20 left-20 w-64 h-40 border border-[#00d4ff] rounded-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 1.5 }}
        >
          {/* Circuit traces inside */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-px bg-[#00ff88]"
              style={{
                left: '10%',
                right: '10%',
                top: `${20 + i * 12}%`,
              }}
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1, delay: 0.5 + i * 0.2 }}
            />
          ))}
        </motion.div>

        {/* AI Brain illustration */}
        <motion.div
          className="absolute bottom-20 right-20 w-48 h-48"
          initial={{ opacity: 0, rotate: -10 }}
          animate={{ opacity: 0.2, rotate: 0 }}
          transition={{ duration: 2, delay: 1 }}
        >
          {/* Neural network nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-[#00ff88] rounded-full"
              style={{
                left: `${(i % 4) * 25 + 12.5}%`,
                top: `${Math.floor(i / 4) * 25 + 12.5}%`,
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity
              }}
            />
          ))}
          
          {/* Connecting lines */}
          <svg className="absolute inset-0 w-full h-full">
            {[...Array(8)].map((_, i) => (
              <motion.line
                key={i}
                x1={`${25 + (i % 3) * 25}%`}
                y1={`${25 + Math.floor(i / 3) * 25}%`}
                x2={`${50 + ((i + 1) % 3) * 25}%`}
                y2={`${50 + Math.floor((i + 1) / 3) * 25}%`}
                stroke="#ff6b35"
                strokeWidth="1"
                opacity="0.6"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, delay: 1.5 + i * 0.3 }}
              />
            ))}
          </svg>
        </motion.div>

        {/* Floating particles */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-[#00d4ff] rounded-full"
            style={{
              left: `${Math.random() * 80 + 10}%`,
              top: `${Math.random() * 80 + 10}%`,
            }}
            animate={{
              y: [0, -20, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              delay: i * 0.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="w-full max-w-2xl relative z-10">
        <motion.div
          className="bg-gray-900/80 backdrop-blur-sm border border-[#00d4ff]/20 rounded-2xl p-8 shadow-2xl relative"
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Progressive glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 via-[#00ff88]/5 to-[#ff6b35]/5 rounded-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Header */}
          <motion.div
            className="text-center mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[#00ff88] to-[#00d4ff] rounded-xl flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 255, 136, 0.3)',
                    '0 0 30px rgba(0, 255, 136, 0.6)',
                    '0 0 20px rgba(0, 255, 136, 0.3)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <User className="h-6 w-6 text-white" />
              </motion.div>
            </div>
            
            <h1 
              className="text-3xl font-bold mb-2"
              style={{
                background: 'linear-gradient(45deg, #00d4ff, #00ff88)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Complete Your Profile
            </h1>
            <p className="text-gray-400">
              Welcome {userData.email.split('@')[0]}! Set up your workspace
            </p>
          </motion.div>

          {/* Profile Setup Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Username Field */}
            <div className="space-y-2">
              <Label 
                htmlFor="username" 
                className="text-gray-300 font-mono text-sm flex items-center gap-2"
              >
                <User className="h-4 w-4 text-[#00d4ff]" />
                Username
              </Label>
              <div className="relative">
                <Input
                  id="username"
                  type="text"
                  value={formData.username}
                  onChange={(e) => handleInputChange('username', e.target.value)}
                  placeholder="john_doe"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 h-12 pl-4 pr-12 font-mono"
                  required
                />
                {formData.username && (
                  <motion.div
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-4 w-4 text-[#00ff88]" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Company Name Field */}
            <div className="space-y-2">
              <Label 
                htmlFor="companyName" 
                className="text-gray-300 font-mono text-sm flex items-center gap-2"
              >
                <Building className="h-4 w-4 text-[#00ff88]" />
                Company Name
              </Label>
              <div className="relative">
                <Input
                  id="companyName"
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => handleInputChange('companyName', e.target.value)}
                  placeholder="TechCorp Industries"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-[#00ff88] focus:ring-[#00ff88]/20 h-12 pl-4 pr-12"
                  required
                />
                {formData.companyName && (
                  <motion.div
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <CheckCircle className="h-4 w-4 text-[#00ff88]" />
                  </motion.div>
                )}
              </div>
            </div>

            {/* Company Brief Field */}
            <div className="space-y-2">
              <Label 
                htmlFor="companyBrief" 
                className="text-gray-300 font-mono text-sm flex items-center gap-2"
              >
                <FileText className="h-4 w-4 text-[#ff6b35]" />
                Company Brief
                <span className="text-gray-500 font-normal">(optional)</span>
              </Label>
              <Textarea
                id="companyBrief"
                value={formData.companyBrief}
                onChange={(e) => handleInputChange('companyBrief', e.target.value)}
                placeholder="Brief description of your company's focus in semiconductor design..."
                className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-[#ff6b35] focus:ring-[#ff6b35]/20 min-h-[100px] resize-none"
                rows={4}
              />
            </div>

            {/* Submit Button */}
            <motion.div
              className="pt-4"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={!isFormValid || isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#00ff88] to-[#00d4ff] hover:from-[#00e676] hover:to-[#00b8e6] text-[#0a0f1c] font-medium disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <>
                    <motion.div
                      className="w-5 h-5 border-2 border-[#0a0f1c] border-t-transparent rounded-full mr-2"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    />
                    Setting up your workspace...
                  </>
                ) : (
                  <>
                    <Zap className="h-4 w-4 mr-2" />
                    Save & Continue
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Progress Indicator */}
          <motion.div
            className="mt-8 text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-3 h-3 bg-[#00ff88] rounded-full"></div>
              <div className="w-8 h-1 bg-[#00d4ff]"></div>
              <div className="w-3 h-3 bg-[#00d4ff] rounded-full"></div>
            </div>
            <p className="text-xs text-gray-500">
              Step 2 of 2 - Almost ready to revolutionize chip design!
            </p>
          </motion.div>
        </motion.div>

        {/* Side ambient glows */}
        <motion.div
          className="absolute -left-10 top-1/2 -translate-y-1/2 w-20 h-40 bg-[#00ff88] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -right-10 top-1/2 -translate-y-1/2 w-20 h-40 bg-[#00d4ff] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1.2, 0.8, 1.2],
            opacity: [0.1, 0.15, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
}