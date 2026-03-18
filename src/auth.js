import { auth } from "./firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

document.getElementById("loginBtn").onclick = async () => {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  try {
    await signInWithEmailAndPassword(auth, email, senha);
    window.location.href = "/dashboard.html";
  } catch (e) {
    alert("Erro: " + e.message);
  }
};
