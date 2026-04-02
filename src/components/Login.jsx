import { useState } from 'react';
import styles from '../css/Login.module.css'
import { Link, useNavigate } from 'react-router-dom'


function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const trainers = [
  { trainerId: "SK_T_0001", trainer: "Supritha" },
  { trainerId: "SK_T_0002", trainer: "Kumar" },
  { trainerId: "SK_T_0003", trainer: "Suresh" },
  { trainerId: "SK_T_0004", trainer: "Aravind" },
  { trainerId: "SK_T_0005", trainer: "Priya" }
];

  const handleLogin = (e) => {
  e.preventDefault();

  if (username && password === "1234") {
    localStorage.setItem("trainer", username);
    navigate("/dashboard");
  } else {
    alert("Select trainer & enter correct password ❌");
  }
};

  return (
    <div className={styles.wrapper}>
      <div className={styles.login_box}>
        <div className={styles['login-header1']}>
          <span>Trainer Login</span>
        </div>

        <div className={styles.input_box}>
          <select className={styles['input-field']} onChange={(e) => setUsername(e.target.value)}>
              <option value="">Select Trainer</option>
              {trainers.map((t) => (
                <option key={t.trainerId} value={t.trainer}>
                  {t.trainer}
                </option>
              ))}
            </select>
          <label htmlFor="user" className={styles.label}>Username</label>
          <i className="bx bx-user icon"></i>
        </div>

        <div className={styles.input_box}>
          <input type="password" id="pass" className={styles['input-field']} required onChange={(e) => setPassword(e.target.value)}/>
          <label htmlFor="pass" className={styles.label}>Password</label>
          <i className="bx bx-lock-alt icon"></i>
        </div>

        <div className={styles['remember-forgot']}>
          <div className={styles['remember-me']}>
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <div className={styles.forgot}>
            <a href="#">Forgot password?</a>
          </div>
        </div>

        <div className={styles.input_box}>
          <input type="submit" className={styles['input-submit']} value="Login" onClick={handleLogin}/>
        </div>

        <div className={styles.register}>
          <span><Link to="/">Go to Home Page</Link></span>
        </div>
      </div>
    </div>
  )
}

export default Login