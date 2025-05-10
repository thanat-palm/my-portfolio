import { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useToastStore } from '@/store/messageStore';

function Form() {
  const [state, handleSubmit] = useForm("xeoggvqj");
  const formRef = useRef<HTMLFormElement>(null);
  const showToast = useToastStore((s) => s.showToast)

  useEffect(() => {
    if (state.succeeded === true) {
      showToast('Form submitted successfully!', 'success')
      formRef.current?.reset()
    } else if (state.errors) {
      showToast('Form submission failed!', 'fail')
    }
  }, [state.succeeded, state.errors])

  return (
    <fieldset className="fieldset">
      <div className="card glass">
        <form ref={formRef} onSubmit={handleSubmit} className="card-body space-y-5">
          <div>
            <label htmlFor="name" className="block text-2xl font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full text-2xl"
              
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="email" className="block text-2xl font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full text-2xl"
              
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block text-2xl font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Type your message..."
              className="textarea textarea-bordered w-full h-32 resize-none text-2xl"
              
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <button type="submit" disabled={state.submitting} className="btn btn-primary btn-lg text-2xl text-primary-content">
            Send Message
          </button>
        </form>
      </div>
    </fieldset>
  );
}

function ContactForm() {
  return <Form />;
}

export default ContactForm;
