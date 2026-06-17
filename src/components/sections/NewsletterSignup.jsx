import { useState } from "react";
import Button from '../ui/button';

export default function NewsletterSignup() {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim()) {
      setIsSubmitted(true);
      setEmail("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section
      id="contact-us"
      className="py-5 bg-red-500"
    >
      <div className="max-w-3xl d-d-flex justify-content-center px-3 text-center">
        <h2 className="fs-3 md:display-5 fw-bold text-white mb-4">
          Get the Latest Updates
        </h2>

        <p className="fs-6 text-white/90 mb-5">
          Subscribe to our newsletter for new courses, study tips, and
          exclusive offers
        </p>

        <form
          onSubmit={handleSubmit}
          className="d-flex d-flex-column sm:d-flex-row gap-3 max-w-md d-d-flex justify-content-center"
        >
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="d-flex-1 px-3 py-3 rounded-2 text-dark focus:outline-none focus:ring-2 focus:ring-white"
          />

          <Button
            type="submit"
            className="bg-dark text-primary hover:opacity-90 fw-bold"
          >
            {isSubmitted ? "Subscribed!" : "Subscribe"}
          </Button>
        </form>

        {isSubmitted && (
          <p className="mt-4 text-white small">
            Thank you for subscribing! Check your email for confirmation.
          </p>
        )}
      </div>
    </section>
  );
}
