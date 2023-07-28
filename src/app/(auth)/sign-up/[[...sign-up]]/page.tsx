import { SignUp } from "@clerk/nextjs";

const page = () => {
  return (
    <div className='absolute inset-0'>
      <div className='h-full max-w-2xl mx-auto flex flex-col items-center justify-center gap-20'>
        <SignUp
          path='/sign-up'
          routing='path'
          signInUrl='/sign-in'
          redirectUrl='/'
        />
      </div>
    </div>
  );
};

export default page;
