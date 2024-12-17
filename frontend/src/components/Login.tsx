import React, {useState} from 'react';
import APIService from '../services/api';
import { useAuth } from './AuthProvider';

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {auth, login, logout} = useAuth();
    const apiService = new APIService();

    const handleSubmit = async(e:any) =>{
        e.preventDefault();
        setError('');
        try {
            const loggedin = await login(email, password);
            if (loggedin){
                console.log('Login successful');
            }
            else {
                console.log('Login failed');
            }
        } catch(e){
            console.error(e);
        }
    }

    return (
        <div style = {{maxWidth: '400px', margin:'0 auto', padding:'1rem'}}>
            <h2>Login</h2>
            {error && <p style={{color:'red'}}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div style={{marginBottom:'1rem'}}>
                    <label>Email:</label>
                    <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div style={{marginBottom:'1rem'}}>
                    <label>Password:</label>
                    <input type='password' value={password} required onChange={(e)=>setPassword(e.target.value)} />
                </div>
                <button type='submit'>Login</button>
            </form>
        </div>

    );
}

export default Login
