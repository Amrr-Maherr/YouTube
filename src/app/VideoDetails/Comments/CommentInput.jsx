import { Input } from "@/components/ui/input";

function CommentInput() {
  return (
    <div>
      <Input
        placeholder="Add a public comment..."
        className="
          border-b border-gray-300 
          border-t-0 border-l-0 border-r-0 
          !bg-transparent 
          rounded-none 
          focus:outline-none 
          focus:border-blue-500 
          text-sm
          placeholder-gray-500
        "
      />
    </div>
  );
}

export default CommentInput;
