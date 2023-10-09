import NavBar from "@/components/navBar/NavBar";
import SignUpBody from "@/components/signUp/SignUpBody";

export default function SignUp() {
  return (
    <>
      {/* Nav bar section */}
      <NavBar />

      {/* SignUp Body section */}
      <SignUpBody />
    </>
  );
}

SignUp.getLayout = function getLayout(page) {
  return <>{page}</>;
};
