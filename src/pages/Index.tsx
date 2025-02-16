
import { Mail, Cpu } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const Index = () => {
  const [copied, setCopied] = useState(false);
  const email = "sagolubev@outlook.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-muted p-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="glass-card rounded-lg overflow-hidden">
          {/* Header Section */}
          <div className="p-6 text-center border-b border-border/50">
            <div className="inline-flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-primary/10">
              <Cpu className="w-6 h-6 text-primary" />
            </div>
            <h1 className="text-2xl font-semibold mb-2">Sergei Golubev</h1>
            <p className="text-muted-foreground">IT Engineer</p>
          </div>

          {/* Contact Section */}
          <div className="p-6">
            <button
              onClick={copyEmail}
              className="w-full group flex items-center justify-center gap-3 p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 border border-border/50"
            >
              <Mail className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              <span className="text-foreground/90 group-hover:text-foreground transition-colors duration-300">
                {email}
              </span>
            </button>

            {/* Additional Info */}
            <p className="text-sm text-muted-foreground text-center mt-6">
              Available for DevOps and Cloud Transformation projects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
