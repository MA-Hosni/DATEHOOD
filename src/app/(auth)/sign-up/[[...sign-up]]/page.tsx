import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return(
    <div className="flex justify-center items-center h-screen w-screen bg-sign-pattern">
      <SignUp />
    </div>
  ) ;
}