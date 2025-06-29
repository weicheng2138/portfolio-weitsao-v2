'use client';

import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Component({
  className,
  email = 'contact@example.com',
}: {
  className?: string;
  email: string;
}) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);

      // Reset the copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <button
      onClick={copyToClipboard}
      className={cn(
        'text-secondary04 hover:text-primary cursor-pointer rounded-full tracking-wide transition-colors',
        'flex w-fit items-center gap-2 font-bold',
        className
      )}
    >
      {copied ? (
        <Check className="size-5 text-green-600" />
      ) : (
        <Copy className="size-5" />
      )}
      {email}
    </button>
  );
}
