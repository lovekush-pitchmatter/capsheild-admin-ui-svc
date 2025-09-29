import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  variant?: "primary" | "secondary";
}

function Button({ children, onClick, className, disabled, variant }: ButtonProps) {
  const baseStyle = "custom-button";
  const variantStyle =
    variant === "secondary"
      ? "bg-gray-200 text-gray-800 hover:bg-gray-300"
      : "w-full bg text-white py-2 rounded-lg";

  return (
    <button onClick={onClick} className={`${baseStyle} ${variantStyle} ${className || 'flex items-center justify-center gap-2 cursor-pointer px-2 w-auto'}`} disabled={disabled}>
      {children}
    </button>
  );
}

export default Button;
