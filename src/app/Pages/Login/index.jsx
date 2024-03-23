import Logo from "../../components/Logo/Logo";
import CustomButton from "../Button";
import style from "./style.module.css";

export const LoginPage = () => {
  const { url, navigate } = useNavigate();
  return (
    <section>
      <header className={style.header}>
        <Logo />
      </header>
      <hr />
      <main className={style.main}>
        <h1></h1>
        <CustomButton
          variant="black"
          onCick={() => navigate("home")}
        ><FaFacebook size {1rem}/>&nbsp;Continue with Facebook</CustomButton>
        <CustomButton
          variant="black"
          onCick={() => navigate("playlist")}
        ><FaApple/>Continue with Apple</CustomButton>
        <CustomButton
          variant="black"
          text="GET STARTED"
          onCick={() => navigate("home")}
        ><FaFacebook/>Continue with Google</CustomButton>
      </main>
    </section>
  );
};




