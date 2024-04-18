import iziToast from 'izitoast';
export default function toastText(){
    
const success=()=>{
    // Handle form submission here
    iziToast.success({
        title: 'Success',
        message: 'Your message has been sent successfully!',
        position: 'topRight',
        timeout: 3000,
    });
};
const info=()=>{
    // Handle form submission here
    iziToast.warning({
        title: 'Warning',
        message: 'Warn something is wrong!',
        position: 'topRight',
        timeout: 3000,
    });
};

const error=()=>{
    // Handle form submission here
    iziToast.error({
        title: 'Error',
        message: 'Error, we take a error!',
        position: 'topRight',
        timeout: 3000,
    });
};

const successText=(text:any)=>{
    // Handle form submission here
    iziToast.error({
        title: 'Success',
        message: text,
        position: 'topRight',
        timeout: 3000,
    });
};

const infoText=(text:any)=>{
    // Handle form submission here
    iziToast.error({
        title: 'Warning',
        message: text,
        position: 'topRight',
        timeout: 3000,
    });
}; const errorText=(text:any)=>{
    // Handle form submission here
    iziToast.error({
        title: 'Error',
        message: text,
        position: 'topRight',
        timeout: 3000,
    });
};

//return()
}