"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import useAuthModal from "@/hooks/useAuthModal";
import { useUser } from "@/hooks/useUser";

interface ListItemProps {
  image: string;
  name: string;
  href: string;
}

const ListItem: React.FC<ListItemProps> = ({ image, name, href }) => {
  const router = useRouter();
  const authModal = useAuthModal();
  const { user } = useUser();

  const onClick = () => {
    if (!user) {
      return authModal.onOpen();
    }

    router.push(href);
  };

  return (
    <button
      onClick={onClick}
      className='relative group flex items-center rounded-md overflow-hidden gap-x-4 bg-neutral-100/10 cursor-pointer hover:bg-neutral-100/20 transition pr-4'
    >
      <div className='relative min-h-[64px] min-w-[64px]'>
        <Image className='object-cover' src={image} fill alt='Image' />
      </div>
      <p className='font-medium truncate py-5'>{name}</p>
    </button>
  );
};

export default ListItem;
