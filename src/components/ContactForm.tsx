import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function Form() {
  const [state, handleSubmit] = useForm("xeoggvqj");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;
  }
  return (
    <fieldset className="fieldset">
        <form onSubmit={handleSubmit} className='flex flex-col gap-4 min-w-[400px] '>
            <div className="card gap-1">
                <label htmlFor="email" className='label floating-label '>
                    <span>Email Address</span>
                <input
                    id="email"
                    type="email" 
                    name="email"
                    placeholder="Your email"
                    className='input input-primary w-full text-xl rounded-2xl input-lg'
                    />
                <ValidationError 
                    prefix="Email" 
                    field="email"
                    errors={state.errors}
                    />
                </label>
            </div>
            <div className="card gap-1">
                <label htmlFor="email" className='label floating-label '>
                    <span>Your Message</span>
                    <textarea
                        id="message"
                        name="message"
                        placeholder="Your message"
                        className='input input-primary w-full min-h-[6rem] text-xl rounded-2xl p-4 input-lg'
                        />
                    <ValidationError 
                        prefix="Message" 
                        field="message"
                        errors={state.errors}
                        />
                </label>
            </div>
        <button type="submit" disabled={state.submitting} className='btn btn-primary w-fit mx-auto rounded-4xl text-lg btn-lg'>
            Submit
        </button>
        </form>
    </fieldset>
  );
}

function ContactForm() {
  return (
    <Form />
  );
}

export default ContactForm;