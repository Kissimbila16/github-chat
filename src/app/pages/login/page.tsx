"use client"
import React, { useState } from 'react';
import styles from "./style/login.module.css";
import iziToast from 'izitoast';
import { useRouter } from 'next/navigation';

var style = {
    color: 'text-center color fs-1',
    divPos: 'row mt-4 w-100 h-100 p-4 d-flex justify-centern',
    sec: 'w-100 h-100 bg',
    devlogin: 'd-grid w-100',
    form: 'w-50 h-50 form-div',
    label: 'mt-4 text-white fw-light',
    btn: 'btn btn-lg text-white mt-4 col-xl-6 col-sm-12 bground',
    input: '300px',
    center: '50%!important'
};
var log: boolean;

const validation = (password: any, user: string) => {

    if (password && user) {
        iziToast.success({
            title: 'Success',
            message: 'message has been sent successfully!',
            color: '#ffffff',
            layout: 2,
            class: 'success-toast p-4 bground-secondary',
            transitionIn: 'flipInX',
            animateInside: true,
            timeout: 3000,
        });
        log = true;
    } else {
        iziToast.error({
            title: 'Error',
            message: 'Error, we take a error!',
            position: 'topCenter',
            color: '#ffffff',
            class: 'success-toast p-4 bg-danger',
            animateInside: true,
            timeout: 3000,


        });
    }
}
export default function Login() {
    const router = useRouter();
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = (event: any) => {
        event.preventDefault();
        validation(password, user);
        if (log == true) {
            return router.push('/pages/home');
        }
        //alert("user link:"+user+"|"+"password"+password);
    }

    return (
        <section className={style.sec}>
            <div className={style.divPos}>
                <div className={style.devlogin}>
                    <form className={style.form} style={{ width: '50%', height: '300px' }} method='post'>
                        <h4 className={style.color}><i className="bi bi-github"></i> <br /> <b className="fs-4 fw-light">Github Users</b></h4>
                        <div className="form-group mt-2">
                            <label htmlFor="name" className={style.label}>User Name</label>
                            <input type="url" className="form-control col-xl-4 col-lg-4 col-sm-12" name="user" placeholder={'link of your perfil of github'} value={user} onChange={(e) => setUser(e.target.value)} required />
                        </div>
                        <div className="form-group mt-0">
                            <label htmlFor="text" className={style.label}>Password</label>
                            <input type="text" className="form-control col-xl-4 col-lg-4 col-sm-12" name="password" placeholder={'password for git chat '} value={password} onChange={(e) => setPassword(e.target.value)} required />
                        </div>
                        <button className="btn col-xl-6 col-lg-6 col-sm-12 bground mt-4 text-white fw-bolder" onClick={handleSubmit} >Confirm</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
