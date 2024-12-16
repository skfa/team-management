import React, {useState} from 'react';
import APIService from '../services/api';
import { useAuth } from './AuthProvider';

const Login =()=>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {login, logout} = useAuth();
    const apiService = new APIService();

    const handleSubmit = async(e:any) =>{
        e.preventDefault();
        setError('');


        try {
            /*const response = await apiService.post('/api/user/token/', {email, password});

            if(!response.ok){
                throw new Error("Invalid email or password")
            }

            const {token} = await response.json(); */
            login(email, password);
            alert('Login successful');

        } catch(e){

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
