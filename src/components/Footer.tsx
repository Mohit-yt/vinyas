import { motion } from 'motion/react';
import { Github, Twitter, Linkedin, Mail, Heart, Zap } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Support', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  const socialLinks = [
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Contact' },
  ];

  return (
    <motion.footer
      className="bg-[#0f1419] border-t border-[#00d4ff]/20 relative"
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {/* Main footer content */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Company info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-[#00d4ff] to-[#00ff88] rounded-lg flex items-center justify-center">
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Vinyas</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Redefining chip design with AI. Empowering semiconductor engineers 
                with intelligent design optimization and analysis tools.
              </p>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span>Built with</span>
                <Heart className="h-4 w-4 text-[#ff6b35]" />
                <span>for the semiconductor community</span>
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Quick Links</h3>
              <div className="space-y-2">
                {footerLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    className="block text-gray-400 hover:text-[#00d4ff] transition-colors text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social and stats */}
            <div className="space-y-4">
              <h3 className="text-white font-medium">Connect & Stats</h3>
              
              {/* Social links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.div 
                      key={social.label}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-gray-400 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10"
                      >
                        <Icon className="h-4 w-4" />
                      </Button>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mini stats */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-center p-2 bg-gray-800/30 rounded border border-gray-700">
                  <div className="text-[#00d4ff] font-semibold">1,247</div>
                  <div className="text-gray-500 text-xs">Designs Optimized</div>
                </div>
                <div className="text-center p-2 bg-gray-800/30 rounded border border-gray-700">
                  <div className="text-[#00ff88] font-semibold">98.7%</div>
                  <div className="text-gray-500 text-xs">Success Rate</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700/50 px-6 py-4">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-gray-500">
            © {currentYear} Vinyas AI. All rights reserved.
          </div>
          
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <span>Version 1.0.0</span>
            <div className="w-px h-4 bg-gray-600" />
            <span>Last updated: Today</span>
            <div className="w-px h-4 bg-gray-600" />
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-[#00ff88] rounded-full animate-pulse" />
              <span>All systems operational</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative circuit traces */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <motion.div
          className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#00d4ff] to-transparent"
          animate={{ opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#00ff88] to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-0 right-1/3 w-px h-full bg-gradient-to-b from-transparent via-[#ff6b35] to-transparent"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>
    </motion.footer>
  );
}