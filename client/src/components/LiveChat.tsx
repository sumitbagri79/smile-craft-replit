import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const initialMessages: Message[] = [
  {
    id: 1,
    text: "Hi there! Welcome to Smile Craft Dental. How can I help you today?",
    isBot: true,
    timestamp: new Date()
  }
];

const quickReplies = [
  "What are your hours?",
  "Do you accept my insurance?",
  "How do I book an appointment?"
];

const botResponses: Record<string, string> = {
  "what are your hours?": "We're open Monday-Thursday 8am-6pm, Friday 8am-4pm, and Saturday 9am-2pm. We're closed on Sundays.",
  "do you accept my insurance?": "We accept most major dental insurance including Delta Dental, Aetna, Cigna, MetLife, and more. Please call us at (908) 481-4882 to verify your specific plan.",
  "how do i book an appointment?": "You can book an appointment by filling out our online form, or call us directly at (908) 481-4882. We typically respond within 24 hours!",
  "default": "Thanks for your question! For the best assistance, please call us at (908) 481-4882 or fill out our appointment request form. We're here to help!"
};

export default function LiveChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>(initialMessages);
  const [inputValue, setInputValue] = useState("");

  const handleSend = (text?: string) => {
    const messageText = text || inputValue;
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: messageText,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    setTimeout(() => {
      const lowerText = messageText.toLowerCase();
      const response = botResponses[lowerText] || botResponses["default"];
      
      const botMessage: Message = {
        id: Date.now() + 1,
        text: response,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };

  return (
    <>
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          size="lg"
          className="fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full shadow-lg"
          data-testid="button-open-chat"
        >
          <MessageCircle className="h-6 w-6" />
          <span className="sr-only">Open chat</span>
        </Button>
      )}

      {isOpen && (
        <Card className="fixed bottom-4 right-4 z-50 w-[350px] sm:w-[400px] shadow-xl" data-testid="chat-widget">
          <CardHeader className="flex flex-row items-center justify-between gap-4 space-y-0 pb-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary">
                <MessageCircle className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <CardTitle className="text-sm">Chat with us</CardTitle>
                <p className="text-xs text-muted-foreground">For general questions only</p>
              </div>
            </div>
            <Button 
              variant="ghost" 
              size="icon" 
              onClick={() => setIsOpen(false)}
              data-testid="button-close-chat"
            >
              <X className="h-4 w-4" />
            </Button>
          </CardHeader>
          <CardContent className="p-0">
            <ScrollArea className="h-[300px] px-4">
              <div className="space-y-4 pb-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.isBot ? "" : "flex-row-reverse"}`}
                  >
                    <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                      message.isBot ? "bg-primary/10" : "bg-secondary"
                    }`}>
                      {message.isBot ? (
                        <Bot className="h-4 w-4 text-primary" />
                      ) : (
                        <User className="h-4 w-4" />
                      )}
                    </div>
                    <div
                      className={`rounded-lg px-3 py-2 max-w-[80%] text-sm ${
                        message.isBot
                          ? "bg-muted"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      {message.text}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="border-t p-4 space-y-3">
              <div className="flex flex-wrap gap-2">
                {quickReplies.map((reply) => (
                  <Button
                    key={reply}
                    variant="outline"
                    size="sm"
                    className="text-xs"
                    onClick={() => handleSend(reply)}
                    data-testid={`button-quick-reply-${reply.toLowerCase().replace(/\s+/g, "-").replace("?", "")}`}
                  >
                    {reply}
                  </Button>
                ))}
              </div>
              <div className="flex gap-2">
                <Input
                  placeholder="Type a message..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  data-testid="input-chat-message"
                />
                <Button size="icon" onClick={() => handleSend()} data-testid="button-send-message">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
}
