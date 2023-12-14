// components/SendButton.tsx
import React from 'react';
import { Button } from './ui/button';
import { SendHorizonal } from 'lucide-react';

interface SendButtonProps {
  onClick: () => void;
}

export const SendButton: React.FC<SendButtonProps> = ({ onClick }: SendButtonProps) => {
  return (
    <Button
      onClick={onClick}
      variant="ghost" // Choose the appropriate variant from Shadcn UI
      size="icon"
    >
     <SendHorizonal />
    </Button>
  );
};

