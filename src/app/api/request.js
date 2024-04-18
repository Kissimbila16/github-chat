import iziToast from "izitoast";

export default function Request(){
    const handleSubmit = async (event,method,url) => {
        event.preventDefault();
        try {
          const response = await fetch(url, {
            method:method,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          if (response.ok) {
    
          } else {
            // Handle error
          }
        } catch (error) {
          // Handle error
        }
      };
}