import { motion } from 'motion/react';
import { useState } from 'react';
import { ArrowRight, Cpu, Mail, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface LoginPageProps {
  onComplete: (userData: { email: string }) => void;
}

export function LoginPage({ onComplete }: LoginPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsLoading(true);
    
    // Simulate API call - reduced time
    await new Promise(resolve => setTimeout(resolve, 800));
    
    onComplete({ email });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#000000] via-[#0a0f1c] to-[#0f1419] flex items-center justify-center p-4 overflow-hidden relative">
      {/* Background Circuit Pattern - Simplified */}
      <div className="absolute inset-0 opacity-10">
        {/* Static horizontal lines */}
        <div className="absolute h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent top-1/4 left-0 right-0" />
        <div className="absolute h-px bg-gradient-to-r from-transparent via-[#00ff88] to-transparent top-3/4 left-0 right-0" />
        
        {/* Static vertical lines */}
        <div className="absolute w-px bg-gradient-to-b from-transparent via-[#00d4ff] to-transparent left-1/4 top-0 bottom-0" />
        <div className="absolute w-px bg-gradient-to-b from-transparent via-[#00ff88] to-transparent right-1/4 top-0 bottom-0" />

        {/* Static circuit nodes */}
        <div className="absolute w-2 h-2 bg-[#00d4ff] rounded-full top-1/4 left-1/4 transform -translate-x-1 -translate-y-1" />
        <div className="absolute w-2 h-2 bg-[#00ff88] rounded-full top-3/4 right-1/4 transform translate-x-1 translate-y-1" />
      </div>

      {/* Static microchips - Simplified */}
      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute border border-[#00d4ff] rounded w-10 h-7 left-[15%] top-[20%]">
          <div className="absolute w-1 h-2 bg-[#00d4ff] -left-1 top-1" />
          <div className="absolute w-1 h-2 bg-[#00d4ff] -right-1 top-1" />
        </div>
        <div className="absolute border border-[#00ff88] rounded w-10 h-7 right-[15%] bottom-[30%]">
          <div className="absolute w-1 h-2 bg-[#00ff88] -left-1 bottom-1" />
          <div className="absolute w-1 h-2 bg-[#00ff88] -right-1 bottom-1" />
        </div>
      </div>

      {/* Main Login Card */}
      <motion.div
        className="w-full max-w-md relative z-10"
        initial={{ opacity: 0, y: 50, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <div className="bg-gray-900/80 backdrop-blur-sm border border-[#00d4ff]/20 rounded-2xl p-8 shadow-2xl relative">
          {/* Card glow effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#00ff88]/5 rounded-2xl"
            animate={{
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />

          {/* Header */}
          <motion.div
            className="text-center mb-8 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <motion.div
                className="w-12 h-12 bg-gradient-to-br from-[#00d4ff] to-[#00ff88] rounded-xl flex items-center justify-center"
                animate={{
                  boxShadow: [
                    '0 0 20px rgba(0, 212, 255, 0.3)',
                    '0 0 30px rgba(0, 212, 255, 0.6)',
                    '0 0 20px rgba(0, 212, 255, 0.3)'
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Cpu className="h-6 w-6 text-white" />
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
              Vinyas Login
            </h1>
            <p className="text-gray-400">
              Enter the future of semiconductor design
            </p>
          </motion.div>

          {/* Login Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6 relative z-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="space-y-2">
              <Label 
                htmlFor="email" 
                className="text-gray-300 font-mono text-sm flex items-center gap-2"
              >
                <Mail className="h-4 w-4 text-[#00d4ff]" />
                Email or Phone Number
              </Label>
              <div className="relative">
                <Input
                  id="email"
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="user@company.com"
                  className="bg-gray-800/50 border-gray-600 text-white placeholder-gray-500 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 h-12 pl-4 pr-12 font-mono"
                  required
                />
                <motion.div
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Phone className="h-4 w-4 text-gray-500" />
                </motion.div>
              </div>
            </div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Button
                type="submit"
                disabled={!email.trim() || isLoading}
                className="w-full h-12 bg-gradient-to-r from-[#00d4ff] to-[#00b8e6] hover:from-[#00b8e6] hover:to-[#0099cc] text-white font-medium disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <motion.div
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  />
                ) : (
                  <>
                    Continue to Vinyas
                    <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </motion.div>
          </motion.form>

          {/* Footer */}
          <motion.div
            className="mt-8 text-center relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <p className="text-xs text-gray-500 mb-2">
              By continuing, you agree to our Terms of Service
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-gray-600">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              <span>Secure AI-powered authentication</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom ambient glow */}
        <motion.div
          className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-40 h-20 bg-[#00d4ff] rounded-full opacity-10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </motion.div>
    </div>
  );
}