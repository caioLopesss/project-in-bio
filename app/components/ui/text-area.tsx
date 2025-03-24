import { cn } from "@/app/lib/utils";

export default function TextArea(
  props: React.TextareaHTMLAttributes<HTMLTextAreaElement>
) {
  return (
    <textarea
      {...props}
      className={cn(
        ` w-full p3 bg-secondary text-white placeholder:text-content-placeholder rounded-xl
    border border-transparent hover:border-secondary hover:text-body active:border-tertiary`,
        props.className
      )}
    />
  );
}
