"use client";
import { ButtonHTMLAttributes, FC, useState } from "react";
import Button from "./ui/Button";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";
import { Loader2, LogOut } from "lucide-react";

interface SingOutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const SingOutButton: FC<SingOutButtonProps> = ({ ...props }) => {
  const [isSigningOut, setIsSigningOut] = useState(false);

  const handleClick = async () => {
    setIsSigningOut(true);
    try {
      await signOut();
    } catch (error) {
      toast.error("There was a problem signing out");
    } finally {
      setIsSigningOut(false);
    }
  };

  return (
    <Button {...props} variant="ghost" onClick={handleClick}>
      {isSigningOut ? (
        <Loader2 className="animate-spin h-4 w-4" />
      ) : (
        <LogOut className="h-full aspect-square" />
      )}
    </Button>
  );
};

export default SingOutButton;
