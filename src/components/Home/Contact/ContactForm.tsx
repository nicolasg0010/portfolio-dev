import { useState } from 'react';
import { AiOutlineLoading } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
// import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import {
  FadeContainer,
  mobileNavItemSideways,
} from '../../../styles/FramerMotionVariants';
import Ripples from 'react-ripples';
import { useTranslation } from 'react-i18next';

// initial State of the form
const initialFormState = {
  to_name: 'Jatin Sharma',
  first_name: '',
  last_name: '',
  email: '',
  subject: '',
  message: '',
};

export default function Form() {
  const { t } = useTranslation();
  const [emailInfo, setEmailInfo] = useState(initialFormState);
  const [loading, setLoading] = useState(false);

  // function sendEmail(e) {
  //   e.preventDefault();
  //   setLoading(true);

  //   emailjs
  //     .send(
  //       process.env.NEXT_PUBLIC_YOUR_SERVICE_ID,
  //       process.env.NEXT_PUBLIC_YOUR_TEMPLATE_ID,
  //       emailInfo,
  //       process.env.NEXT_PUBLIC_YOUR_USER_ID
  //     )
  //     .then((res) => {
  //       setLoading(false);
  //       setEmailInfo(initialFormState);
  //       toast.success('Message Sent ✌');
  //     })
  //     .catch((err) => {
  //       console.log(err.text);
  //       setLoading(false);
  //       toast.error('😢 ' + err.text);
  //     });
  // }

  // function validateForm() {
  //   for (const key in emailInfo) {
  //     if (emailInfo[key] === '') return false;
  //   }
  //   return true;
  // }

  // function submitFormOnEnter(event) {
  //   if ((event.keyCode == 10 || event.keyCode == 13) && event.ctrlKey) {
  //     if (validateForm()) {
  //       return sendEmail(event);
  //     }
  //     toast.error('Looks like you have not filled the form');
  //   }
  // }

  return (
    <>
      <motion.form
        initial="hidden"
        whileInView="visible"
        variants={FadeContainer}
        viewport={{ once: true }}
        className="w-full flex flex-col items-center max-w-xl mx-auto my-10"
        // onSubmit={sendEmail}
        // onKeyDown={submitFormOnEnter}
      >
        {/* First Name And Last Name */}
        <div className="w-full grid grid-cols-2 gap-6">
          <motion.div
            variants={mobileNavItemSideways}
            className="relative z-0 w-full mb-6 group"
          >
            <input
              type="text"
              name="first_name"
              id="floating_first_name"
              className="block py-2 mt-2 px-0 w-full text-sm text-white-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              value={emailInfo.first_name}
              onChange={(e) =>
                setEmailInfo({
                  ...emailInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="floating_first_name"
              className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t('contact.form.first_name')}
            </label>
          </motion.div>
          <motion.div
            variants={mobileNavItemSideways}
            className="relative z-0 w-full mb-6 group"
          >
            <input
              type="text"
              name="last_name"
              id="floating_last_name"
              className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
              placeholder=" "
              required
              value={emailInfo.last_name}
              onChange={(e) =>
                setEmailInfo({
                  ...emailInfo,
                  [e.target.name]: e.target.value,
                })
              }
            />
            <label
              htmlFor="floating_last_name"
              className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              {t('contact.form.last_name')}
            </label>
          </motion.div>
        </div>
        <motion.div
          variants={mobileNavItemSideways}
          className="relative z-0 w-full mb-6 group"
        >
          <input
            type="email"
            name="email"
            id="floating_email"
            className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
            value={emailInfo.email}
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="floating_email"
            className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {t('contact.form.email')}
          </label>
        </motion.div>
        <motion.div
          variants={mobileNavItemSideways}
          className="relative z-0 w-full mb-6 group"
        >
          <input
            type="subject"
            name="subject"
            id="floating_subject"
            className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-black peer"
            placeholder=" "
            required
            value={emailInfo.subject}
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="floating_subject"
            className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {t('contact.form.subject')}
          </label>
        </motion.div>
        <motion.div
          variants={mobileNavItemSideways}
          className="relative z-0 w-full mb-6 group"
        >
          <textarea
            name="message"
            id="floating_message"
            className="block py-2 mt-2 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0  peer min-h-[100px] resize-y focus:border-black"
            placeholder=" "
            required
            value={emailInfo.message}
            onChange={(e) =>
              setEmailInfo({
                ...emailInfo,
                [e.target.name]: e.target.value,
              })
            }
          />
          <label
            htmlFor="floating_message"
            className="peer-focus:font-medium absolute text-sm text-slate-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-black peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            {t('contact.form.message')}
          </label>
        </motion.div>

        <motion.div
          variants={mobileNavItemSideways}
          className="w-full sm:max-w-sm rounded-lg overflow-hidden "
        >
          <Ripples
            className="flex w-full justify-center"
            color="rgba(225, 225,225,0.2)"
          >
            <button
              type="submit"
              className="text-white bg-neutral-800 font-medium rounded-lg text-sm w-full px-4 py-3 text-center relative overflow-hidden transition duration-300 outline-none active:scale-95"
            >
              <div className="relative w-full flex items-center justify-center">
                <p
                  className={
                    loading ? 'inline-flex animate-spin mr-3' : 'hidden'
                  }
                >
                  <AiOutlineLoading className="font-bold text-xl" />
                </p>
                <p>
                  {loading
                    ? t('contact.form.loading_button')
                    : t('contact.form.send_button')}
                </p>
              </div>
            </button>
          </Ripples>
        </motion.div>
      </motion.form>
      <ToastContainer theme="light" style={{ zIndex: 1000 }} />
    </>
  );
}
