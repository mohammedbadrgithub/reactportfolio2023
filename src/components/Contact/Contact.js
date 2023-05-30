import {useState,useRef,useEffect} from 'react'
import './Contact.scss'
import Header from '../Header/Header'
import {IoLocationSharp} from 'react-icons/io5'
import {SiGmail,SiFreelancer} from 'react-icons/si'
import {BsTelephonePlus} from 'react-icons/bs'
// import { GoogleLoginButton , FacebookLoginButton } from "react-social-login-buttons";
// import { LoginSocialGoogle , LoginSocialFacebook } from "reactjs-social-login";
import { toast } from 'react-toastify';
import { ToastContainer } from 'react-toastify';
import emailjs from '@emailjs/browser'
// import { Toast } from 'react-bootstrap'
const Contact = () => {
  // const [showsocailmediabuttons, setshowsocailmediabuttons] = useState(true);
  // const [socialmediainfo,setsocialmediainfo] = useState({
  //   fullname:'',
  //   email:'',
  //   img:''
  // })
  const form = useRef();
  const [initialValues,setinitialValues] = useState({ name: "", email: "", subject:"" , message: "" });
  // const [formValues, setFormValues] = useState(initialValues);
  // const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);


 const handleChangename = (e) => {
  
    if(e.target.name === 'name'){
      setinitialValues({...initialValues,name :e.target.value})
      console.log(initialValues)
      
        if(e.target.value === ''){
          toast.error('name input can not be empty')
          setIsSubmit(false)
        }else if(e.target.value.length < 8){
            toast.error('name value can not be less than 8 characters')
            setIsSubmit(false)
        }else{
          setIsSubmit(true)
        }
    }

    if(e.target.name === 'subject'){
      setinitialValues({...initialValues,subject :e.target.value})
        if(e.target.value === ''){
          toast.error('subject input can not be empty')
          setIsSubmit(false)
        }else if(e.target.value.length < 8){
            toast.error('subject value can not be less than 8 characters')
            setIsSubmit(false)
        }else{
          setIsSubmit(true)
        }
    }
    if(e.target.name === 'Email_Sender'){
      setinitialValues({...initialValues,email :e.target.value})
      if(e.target.value === ''){
        toast.error('email input can not be empty')
        setIsSubmit(false)
      }else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.value)){
          toast.error('Invalid Email Format')
          setIsSubmit(false)
      }else{
        setIsSubmit(true)
      }
    }
    if(e.target.name === 'message'){
      setinitialValues({...initialValues,message :e.target.value})
        if(e.target.value === ''){
          toast.error('message input can not be empty')
          setIsSubmit(false)
        }else if(e.target.value.length < 8){
            toast.error('message value can not be less than 8 characters')
            setIsSubmit(false)
        }else{
          setIsSubmit(true)
        }
    }
    if(e.target.value !== ''){
      e.target.style.cssText= `border-bottom:2px solid hsl(34.25deg 100% 50.2%);`
      e.target.nextElementSibling.style.cssText =
      `
      top: -23px;
      left: 10px;
      color: hsl(257.42, 34.83%, 17.45%);
      font-size: 16px;
      background: rgb(255, 146, 1);
      padding: 4px 18px;
      text-transform:capitalize;
      border-radius: 8px;
      `
    }else{
      e.target.nextElementSibling.style.cssText = ``
    }
    
  };

  // const handleSubmit = (e)=>{
    
  //   // e.preventDefault();
  //   // setFormErrors(validate(formValues));
  //   // setIsSubmit(true);
  // }

  //   useEffect(() => {
  //   if (Object.keys(formErrors).length === 0 && isSubmit) {
  //         emailjs.sendForm('service_h3u0s7f', 'template_topel0g', form.current,'aPIhYfJjh3xAPXe4H')
  //       .then((result) => {
  //           console.log(result.text,"Your Email has been sent");

  //       }, (error) => {
  //           console.log(error.text);
  //       });
  //   }
  // }, [formErrors]);
  // const validate = (values) => {
  //   const errors = {};
  //   const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  //   if (!values.name) {
  //     // errors.name = " ";
  //     toast.error('name is required !')
  //   }else if(values.name.length < 3){
  //     errors.name = `name can not be less than 3 characters ! `;
  //   }
  //   if (!values.email) {
  //     errors.email = "Email is required !";
  //   } else if (!regex.test(values.email)) {
  //     errors.email = "This is not a valid email format !";
  //   }
  //   if (!values.message) {
  //     errors.message = "message is required !";
  //   } else if (values.message.length < 4) {
  //     errors.message = "message must be more than 4 characters !";
  //   } else if (values.message.length > 30) {
  //     errors.message = "message cannot exceed more than 30 characters !";
  //   }
  //   return errors;
  // };
function validateFormandSendEmail(e){
  e.preventDefault()
  if(initialValues.name === "" ){
    console.log('eeeee')
    toast.error('name can not be empty !')
  }
  if(initialValues.email === ""){
    toast.error('email can not be empty !')
  }
  if(initialValues.subject === ""){
    toast.error('subject can not be empty !')
  }
  if(initialValues.message === ""){
    toast.error('message can not be empty !')
  }
  
  if(  
    initialValues.name !== "" && 
    initialValues.email !== "" && 
    initialValues.subject !== "" && 
    initialValues.message !== "" &&
    isSubmit
    ){
      setinitialValues({ name: "", email: "", subject:"" , message: "" })

   
      emailjs.sendForm('service_h3u0s7f', 'template_topel0g', form.current,'aPIhYfJjh3xAPXe4H')
            .then((result) => {
                // console.log(result.text,"Your Email has been sent");
                toast.success('Your Email has been sent')
                
                Array.from(e.target.parentNode.querySelectorAll('input:not([type="hidden"])')).forEach(a=>{
                  a.style.cssText=''
                })
                Array.from(e.target.parentNode.querySelectorAll('label')).forEach(a=>{
                  a.style.cssText=''
                })
    
            }, (error) => {
                // console.log(error.text);
                toast.error(error.text)
            });
  }else{
    toast.error('something went wrong please check inputs carefully !')
  }
}


  return (
    <div className='contact' id='Contact' >
      <Header text={'contact us'}  textback={'Mohammed'}/>
      <div className='container'>
      <div className="login-box shadow left"
      
      data-aos="zoom-in-right"
      data-aos-delay={`1000`}
      duration='400'
      easing='ease'
     offset='400'
      >
          <h2>get in touch</h2>
          <form ref={form}>
          <div className='grouping' >
          <div className="user-box"
                
            // aos trigger 
            data-aos="fade-up"
            data-aos-delay={`2000`}
            duration='400'
            easing='ease'
            offset='400'
          >
              <input type="text" 
              name="name" 
              placeholder=''
              onKeyUp={handleChangename} 
              value={initialValues.name} 
              onChange={(e)=>setinitialValues({...initialValues,name:e.target.value})}
             
               />
              <label>Your Name</label>
            </div>
            <div 
              className="user-box"
               // aos trigger 
               data-aos="fade-up"
               data-aos-delay={`3000`}
               duration='400'
               easing='ease'
               offset='400'
              >
                
              <input 
              type="email" 
              name="Email_Sender" 
              placeholder=''
              onKeyUp={handleChangename} 
              value={initialValues.email} 
              onChange={(e)=>setinitialValues({...initialValues,email:e.target.value})}
              
              
              />
              <label>Your Email</label>
            </div>
          </div>
            <div 
              className="user-box"
                // aos trigger 
                data-aos="fade-up"
                data-aos-delay={`4000`}
                duration='400'
                easing='ease'
                offset='400'
            >
              <input 
                  type="text" 
                  name="subject" 
                  placeholder=''
                  onKeyUp={handleChangename} 
                  
                  value={initialValues.subject} 
                  onChange={(e)=>setinitialValues({...initialValues,subject:e.target.value})}
                  />
              <label>subject</label>
            </div>

            <div 
                className="user-box"
                  // aos trigger 
                  data-aos="fade-up"
                  data-aos-delay={`5000`}
                  duration='400'
                  easing='ease'
                  offset='400'
                >
              <input 
                type="text" 
                className='message' 
                name="message" 
                placeholder=''
                onChange={(e)=>setinitialValues({...initialValues,message:e.target.value})}
                onKeyUp={handleChangename} 
                value={initialValues.message} 
              
               
                
                />
            
              <label>message</label>
            </div>
            <input type='hidden' value='mmh39194@gmail.com' name="email" />
            {
            //showsocailmediabuttons === true && ''
          // <div className="SignUpWithSocailMedia" >
          //   <LoginSocialGoogle
          //   client_id="713193219532-np4stk2ajvvqf8tqcm8p1rmlv0nffscq.apps.googleusercontent.com"
          //   scope="openid profile email"
          //   discoveryDocs="claims_supported"
          //   access_type="offline"
          //   onResolve={({provider, data})=>{
          //     console.log(provider, data ,data.name)
          //     setsocialmediainfo({...socialmediainfo,fullname : data.name, email: data.email , img : data.picture})
          //     toast.success('We get your account information please complete the rest ')
          //     setshowsocailmediabuttons(false)
          //   }}
          //   onReject={(err)=>{
          //     console.log(err)
          //     toast.error('We get your account information please complete the rest ')
             
          //   }}
            
            
          //   >
          //     <GoogleLoginButton/>
          //   </LoginSocialGoogle>
          //   {/* ////////////////////////////////////// */}
          //   <LoginSocialFacebook
          //   appId="1358123664977022"
          //   onResolve={(response)=>{
          //     console.log(response.data)
          //     setsocialmediainfo({...socialmediainfo,fullname : response.data.name, email: response.data.email , img : response.data.picture.data.url})
          //     toast.success('We get your account information please complete the rest ')
          //     setshowsocailmediabuttons(false)
          //   }}
          //   onReject={(err)=>{
          //     toast.error('We get your account information please complete the rest ')
          //     console.log(err)
          //   }}
          //   >
          //     <FacebookLoginButton/>
          //   </LoginSocialFacebook>

          // </div>
          }
            <button onClick={validateFormandSendEmail}>
              <span></span>
              <span></span>
              <span></span>
              <span></span>
              Submit
            </button>
          </form>
      </div>
      <div className='right'
      data-aos="zoom-in-left"
      data-aos-delay={`2000`}
      duration='400'
      easing='ease'
     offset='400'
      >
          <h2>don't be late !
          </h2>
          <p>Magento 2 extensions or themes that you were using on your Magento 1.x store. Make sure they are compatible with Magento 2.</p>
          <div className='iconsform'>
        {
          iconsarr.map((a,i)=>{
            return(
              <Icon key={i} delay={i+1} icon={a.icon} h5={a.h5} p={a.p}/>
            )
          })
        }
      </div>
      </div>
      
      </div>
    </div>
  )
}

export default Contact

const Icon = ({icon,h5,p,delay})=>{
  return(
    <div 
      className='icon shadow' 
      // aos trigger 
      data-aos="fade-up"
      data-aos-delay={`${delay}000`}
      duration='400'
      easing='ease'
      offset='400'
    >
   {icon}
    <div >
      <h5>{h5}</h5>
      <p>{p}</p>
    </div>
  </div>
  )
}
let iconsarr = [
  {icon:<IoLocationSharp/>,h5:'address',p:'Assuit-Dairoot'},
  {icon:<SiGmail/>,h5:'gmail',p:'mmh39194'},
  {icon:<BsTelephonePlus/>,h5:'phone',p:'+201102396165'},
  {icon:<SiFreelancer/>,h5:'freelance',p:'Mostaql-Fahd-ElAgmey'},
]