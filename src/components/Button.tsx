'use client';
import * as React from 'react';
import { cn } from '@/lib/utils';
import { FC } from 'react';

export type ButtonProps = React.ComponentProps<'button'>;

const Button: FC<ButtonProps> = ({ className, children, ...props }) => {
  return (
    <button
      className={cn(
        className,
        'bg-primary hover:bg-primary-dark cursor-pointer rounded-full px-5 py-[10px] tracking-wide text-white'
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
