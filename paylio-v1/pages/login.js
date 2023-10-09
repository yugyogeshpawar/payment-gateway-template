import LoginBody from "@/components/login/LoginBody";
import NavBar from "@/components/navBar/NavBar";

export default function Login() {
  return (
    <>
      {/* Nav bar section */}
      <NavBar />

      {/* Login Body  Section */}
      <LoginBody />
    </>
  );
}

Login.getLayout = function getLayout(page) {
  return <>{page}</>;
};
