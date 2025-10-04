import { motion } from 'motion/react';
import { useState, useEffect, useRef } from 'react';
import { Send, Paperclip, Mic, Code, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { ScrollArea } from './ui/scroll-area';

interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant';
  timestamp: Date;
  hasCode?: boolean;
  hasChart?: boolean;
}

export function ChatArea() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      content: "Hello! I'm Vinyas, your AI assistant for semiconductor design. How can I help you today?",
      type: 'assistant',
      timestamp: new Date(),
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    const timer = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
    return () => clearTimeout(timer);
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      type: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Simulate AI response
    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: "I understand you're working on semiconductor design. Let me help you with that. Would you like me to analyze your Verilog code, optimize your layout, or review simulation results?",
        type: 'assistant',
        timestamp: new Date(),
        hasCode: Math.random() > 0.7,
        hasChart: Math.random() > 0.8,
      };
      setMessages(prev => [...prev, aiResponse]);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#0a0f1c]">
      {/* Chat Messages */}
      <div className="flex-1 min-h-0">
        <ScrollArea className="h-full">
          <div className="max-w-4xl mx-auto space-y-6 p-6">
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-6 py-4 ${
                    message.type === 'user'
                      ? 'bg-[#00d4ff] text-[#0a0f1c] ml-auto'
                      : 'bg-gray-800/60 text-white border border-gray-700'
                  }`}
                >
                <p className="leading-relaxed">{message.content}</p>
                
                {/* Code block placeholder */}
                {message.hasCode && message.type === 'assistant' && (
                  <motion.div
                    className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-600"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <Code className="h-4 w-4 text-[#00d4ff]" />
                      <span className="text-sm text-gray-400">Verilog Code</span>
                    </div>
                    <pre className="text-sm text-[#00ff88] font-mono">
{`module example_design (
  input  clk,
  input  reset,
  output reg [7:0] data_out
);
  // Your optimized design here
endmodule`}
                    </pre>
                  </motion.div>
                )}

                {/* Chart placeholder */}
                {message.hasChart && message.type === 'assistant' && (
                  <motion.div
                    className="mt-4 p-4 bg-gray-900 rounded-lg border border-gray-600"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <BarChart3 className="h-4 w-4 text-[#ff6b35]" />
                      <span className="text-sm text-gray-400">Timing Analysis</span>
                    </div>
                    <div className="h-32 bg-gradient-to-r from-[#00d4ff]/20 to-[#ff6b35]/20 rounded flex items-center justify-center">
                      <span className="text-gray-500">Interactive chart would appear here</span>
                    </div>
                  </motion.div>
                )}

                <div className="flex items-center justify-between mt-2">
                  <span className="text-xs opacity-60">
                    {message.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
          {/* Invisible element to scroll to */}
          <div ref={messagesEndRef} />
        </div>
        </ScrollArea>
      </div>

      {/* Input Area */}
      <motion.div
        className="border-t border-gray-700 p-6 bg-gray-900/50"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <div className="max-w-4xl mx-auto">
          <div className="flex items-end gap-4">
            <div className="flex-1 relative">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask about semiconductor design, Verilog, layout optimization..."
                className="min-h-[52px] pr-20 bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:border-[#00d4ff] focus:ring-[#00d4ff]/20 resize-none"
              />
              
              {/* Input actions */}
              <div className="absolute right-2 top-1/2 -translate-y-1/2 flex gap-1">
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-[#00d4ff] hover:bg-[#00d4ff]/10"
                >
                  <Paperclip className="h-4 w-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-[#00ff88] hover:bg-[#00ff88]/10"
                >
                  <Mic className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <Button
              onClick={handleSend}
              disabled={!inputValue.trim()}
              className="h-[52px] px-6 bg-[#00d4ff] hover:bg-[#00b8e6] text-[#0a0f1c] font-medium disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
          
          <p className="text-xs text-gray-500 mt-2 text-center">
            Vinyas can help with Verilog, VHDL, layout design, and simulation analysis.
          </p>
        </div>
      </motion.div>
    </div>
  );
}