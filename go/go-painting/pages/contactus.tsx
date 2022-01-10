import React, {FunctionComponent, useRef, useState} from 'react'
import dynamic from 'next/dynamic'
const Layout = dynamic(() =>  import('../components/layout'), { ssr: false })
const FloatingWidget = dynamic(() =>  import('../components/floatingwidget'), { ssr: false })
import Whatsappwidget from '../components/whatsappwidget';
import { client }  from '../utils/prismichelpers';
import { GetStaticProps } from 'next';
import emailjs from 'emailjs-com';
import Script from "next/script";
import Link from "next/link";
import Head from 'next/head';
import { Formik, useFormik } from 'formik';
import * as Yup from 'yup';
import { Fade, Zoom, AttentionSeeker } from "react-awesome-reveal"
import Footerlinks from '../components/footerlinks';

interface ContactUsProps {
    whatsappWidget: any
}


 
const ContactUs : FunctionComponent<ContactUsProps> = ({whatsappWidget}) => {

    const [isSubmitted, setIsSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
          fullName: '', 
          reply_to: '', 
          to_name: process.env.TO_NAME,
          interest: '',
          details: '', 
        },

        validationSchema: Yup.object({
          fullName: Yup.string()
        .required('* Name field is required'),
          interest: Yup.string()
        .required('* Interest subject field is required'),
          details: Yup.string(),
          reply_to: Yup.string().email('Invalid email address')
        .required('* Email field is required')
        }),
        onSubmit: (values) => {
           console.log('values', values);

           emailjs.send(process.env.EJS_SERVICE, process.env.EJS_TEMPLATE, values, process.env.EJS_USER_ID)
          .then((result) => {
              console.log(result.text);
              setIsSubmitted(true);
          }, (error) => {
              console.log(error.text);
          });
       },
    });

    return ( 
        <>
        <Head>
        <Script src="https://smtpjs.com/v3/smtp.js"></Script>
        </Head>
        <Layout/>
    <div className="form-body">
        <Zoom delay={1000} duration={900} triggerOnce>
        <section className="form-container-section">
            {!isSubmitted &&
            <h3 className="form-heading">Get in touch</h3>
            }
            { !isSubmitted &&
            <form noValidate className='form-content' onSubmit={formik.handleSubmit} autoComplete='off'>

                <div className='form-inner'>

                    <div className='form-item'>
                    <input name="fullName" placeholder="Full Name" required 
                    minLength={4}
                    onChange={formik.handleChange}
         	        value={formik.values.fullName}
                    className='form-input' />
                    </div>
                    <div className={`expandable ${formik.touched.fullName && formik.errors.fullName ? 'show' : ''}`}>
                    {formik.errors.fullName}
                    </div>

                 <div className='form-item' >
                    <input name="reply_to" placeholder="Email"
                    type="email"
                    autoComplete="off"
                     onChange={formik.handleChange}
         	        value={formik.values.reply_to}
                     className='form-input'/>
                 </div>
                 <div className={`expandable ${formik.touched.reply_to && formik.errors.reply_to ? 'show' : ''}`}>
                    {formik.errors.reply_to}
                </div>

                 <div className='form-item'>
                <select                className='form-input' 
                    name="interest"
                    onChange={formik.handleChange}
         	        value={formik.values.interest}>
                     <option value="">Interested in...</option>
                     <option value="Residential Painting">Residential Painting</option>
                     <option value="Commercial Painting">Commercial Painting</option>
                     <option value="Industrial Painting">Industrial Painting</option>
                     <option value="Gypsum Ceilings">Gypsum Ceilings</option>
                     <option value="Wooden Ceilings">Wooden Ceilings</option>
                     <option value="Dry Wall">Dry Wall</option>
                </select>
                </div>
                <div className={`expandable ${formik.touched.interest && formik.errors.interest ? 'show' : ''}`}>
                    {formik.errors.interest}
                </div>

                <div className='form-item'>
                    <textarea name="details" 
                    onChange={formik.handleChange}
                    value={formik.values.details}id="details" placeholder="Details" cols={30} rows={4}></textarea>
                </div>
                <input type="submit" disabled={formik.isSubmitting} value={formik.isSubmitting ? 'SENDING ⏳': 'SEND 📨'} className={!formik.isSubmitting ?'form-input-btn': 'form-input-btn-sending'} />
                </div>
            </form>
            }
            {isSubmitted && 
            <h2 className='thank-you-text'>Thank you.</h2>
            }
            {isSubmitted && 
            <div className='thank-you-details'>
                <p className='thank-you-message'>Your enquiry has been sent successfully. Check your mailbox for a confirmation message of the details.</p>
                <Link href='/'>
                <button className='back-home-btn'>Back to home</button>
                </Link>
            </div>}
        </section>
        </Zoom>
    </div>
    <div>
        <Footerlinks/>
    </div>
    <FloatingWidget/>
    <Whatsappwidget whatsappWidget={whatsappWidget}/>
    </> );
}

export const getStaticProps: GetStaticProps = async () => {
    const whatsappWidget = await client.getSingle('whatsapp_widget');
  
    return {
        props: {
            whatsappWidget
        }
    }
  }

 
export default ContactUs