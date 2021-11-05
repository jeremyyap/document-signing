import axios from 'axios';
import { ChangeEvent, useContext, useState } from 'react';
import { UserContext } from './UserProvider';

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
  const handleSetShowPasswordChange = (e: ChangeEvent<HTMLInputElement>) => setShowPassword(e.target.checked);

  const { setUser } = useContext(UserContext);
  const handleLogin = () => {
    axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, { email, password }).then(response => {
      if (response.status === 201 && response?.data?.access_token) {
        setUser({
          accessToken: response.data.access_token,
          username: response.data.username,
          email
        });
        console.log(email);
        console.log(password);
        console.log(response);
      } else {
        alert("Invalid username or password");
      }
    }).catch(error => {
      alert("Invalid username or password");
    })
  }

  return (
    <div>
      <h1>Login</h1>
      Email address: <input type="text" value={email} onChange={handleEmailChange} />
      Password:<input type={showPassword ? "text" : "password"} value={password} onChange={handlePasswordChange} />
      Show password <input type="checkbox" checked={showPassword} onChange={handleSetShowPasswordChange} />
      <button type="submit" onClick={handleLogin}>Login</button>
    </div>
  );
}
