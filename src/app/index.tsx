import { Router } from "next/router";
import { global } from "styled-jsx/css";
var style={
    page:'border-page',
    title:{
        style:'text-success text-center fs-2  mt-4',
        y:'5%',
        top:'10%'
    },
    icon:{
        x:'',
        y:'15%',
        width:'180px',
        height:'102px',
        style:'text-center bi bi-github color'
    },
    btn:{
        style:'btn-color btn btn-lg pt-1 fw-bolder',
    w:'250px',
    h:'40px',
    radius:'10px'

    },
    center:{
        x:'43.33335555555%',
        y:'1%'
    },
    divCenter:'w-100 row-12 divCenter',
    small:'text-white mt-5 text-center'
    
};
export default function Index(){
    return(
        <section className={style.page}>
     <div className={style.divCenter}>
     <section className="d-grid h-100" style={{height:'400px',width:'100%'}}>
     <i className={style.icon.style} style={{fontSize:style.icon.width,height:style.icon.height,paddingBottom:style.icon.y,marginTop:style.title.top}}></i> <br /> 
        <h4 className={style.title.style} style={{marginTop:style.title.y}}>Welcome to Git-chat</h4>
        <a className={style.btn.style} style={{width:style.btn.w,height:style.btn.h,marginTop:style.center.y,marginLeft:style.center.x,borderRadius:style.btn.radius}} href="/pages/login">Start</a>
        <h6 className={style.small} style={{marginTop:style.title.y}}>chat for github users, for open more connections</h6>
   
     </section>
       </div>
        </section>
    );
}