import React, { useState } from "react";
import useUploadModal from "@/hooks/useUploadModal";
import Button from "./button";
import Modal from "./modal";

const UploadModal = () => {
  const [isLoading, setIsLoading] = useState(false);
  const uploadModal = useUploadModal();

  const onChange = (open: boolean) => {
    if (!open) {
      //   reset();
      uploadModal.onClose();
    }
  };

  return (
    <Modal
      title='Add a song'
      description='Upload an mp3 file'
      isOpen={uploadModal.isOpen}
      onChange={onChange}
    >
      <form
        // onSubmit={handleSubmit(onSubmit)}
        className='flex flex-col gap-y-4'
      >
        <div>
          <div className='pb-1'>Select a song file</div>
        </div>
        <div>
          <div className='pb-1'>Select an image</div>
        </div>
        <Button
          disabled={isLoading}
          type='submit'
          className='rounded-md text-white font-semibold'
        >
          Create
        </Button>
      </form>
    </Modal>
  );
};

export default UploadModal;
