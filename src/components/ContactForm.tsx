import { useEffect, useRef } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { useToastStore } from '@/store/messageStore';
import { useTranslation } from 'react-i18next';

function Form() {
  const { t } = useTranslation();
  const [state, handleSubmit] = useForm("xeoggvqj");
  const formRef = useRef<HTMLFormElement>(null);
  const showToast = useToastStore((s) => s.showToast);

  useEffect(() => {
    if (state.succeeded === true) {
      showToast('Form submitted successfully!', 'success');
      formRef.current?.reset();
    } else if (state.errors) {
      showToast('Form submission failed!', 'fail');
    }
  }, [state.succeeded, state.errors]);

  return (
    <fieldset className="fieldset">
      <div className="card glass shadow-xl">
        <form ref={formRef} onSubmit={handleSubmit} className="card-body space-y-8">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-3xl sm:text-4xl font-semibold mb-3">
              {t('form-name')}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder={t('placeholder-name')}
              className="input input-bordered w-full text-3xl px-6 py-4"
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-3xl sm:text-4xl font-semibold mb-3">
              {t('form-email')}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder={t('placeholder-email')}
              className="input input-bordered w-full text-3xl px-6 py-4"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          {/* Message Field */}
          <div>
            <label htmlFor="message" className="block text-3xl sm:text-4xl font-semibold mb-3">
              {t('form-message')}
            </label>
            <textarea
              id="message"
              name="message"
              placeholder={t('placeholder-message')}
              className="textarea textarea-bordered w-full h-48 resize-none text-3xl px-6 py-4"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={state.submitting}
            className="btn btn-primary btn-lg text-3xl px-10 py-4 text-primary-content"
          >
            {t('form-message-sent')}
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
