"use client";
import { Button } from "@/components/ui/Button";
import { XIcon } from "lucide-react";
import { useRouter } from "next/navigation";

const CloseModal = () => {
  const router = useRouter();
  return (
    <Button
      variant={"subtle"}
      className='p-0 w-6 h-6 rounded-md'
      aria-label='close modal'
      onClick={() => router.back()}
    >
      <XIcon className='h-4 w-4' />
    </Button>
  );
};

export default CloseModal;
