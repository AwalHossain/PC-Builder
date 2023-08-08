import { AiFillLeftCircle } from "react-icons/ai";
import { useRouter } from 'next/router';

export default function PreviousBtn() {
    const router = useRouter();

  return (
    <div
      onClick={() => router.back()}
      className="w-32 py-2 rounded-md flex gap-2 justify-center items-center mt-8 bg-slate-800 text-slate-50 cursor-pointer shadow-md"
    >
      <AiFillLeftCircle /> Go Back
    </div>
  );
}