// AvatarComponent.jsx
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AvatarComponent({ photo }) {
  return (
    <Avatar className="w-10 h-10">
      {photo ? (
        <AvatarImage src={photo} alt="Avatar" />
      ) : (
        <AvatarFallback>CN</AvatarFallback>
      )}
    </Avatar>
  );
}
