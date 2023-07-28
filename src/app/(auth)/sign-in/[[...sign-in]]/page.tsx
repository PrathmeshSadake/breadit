import { SignIn } from "@clerk/nextjs";

const page = () => {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
        <SignIn path='/sign-in' routing='path' signUpUrl='/sign-up' />
      </div>
    </div>
  );
};

export default page;
