'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {

  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I enroll in a course?',
      answer: 'Click on any course card and select "Enroll Now". You&apos;ll be guided through the payment and registration process.'
    },
    {
      question: 'Can I download the study materials?',
      answer: 'Yes! All study materials are downloadable in PDF and eBook formats for offline access.'
    },
    {
      question: 'Is there a certificate upon completion?',
      answer: 'Absolutely! You&apos;ll receive a recognized digital certificate after completing each course.'
    },
    {
      question: 'What if I need help with a concept?',
      answer: 'Our community forum allows you to discuss with peers and instructors. We also offer one-on-one mentoring sessions.'
    },
    {
      question: 'Is there a money-back guarantee?',
      answer: 'Yes, we offer a 30-day money-back guarantee if you&apos;re not satisfied with the course.'
    },
    {
      question: 'How long does it take to complete a course?',
      answer: 'Course duration varies from 4 to 12 weeks depending on the course level and your learning pace.'
    }
  ];

  return (
    <section id="faq" className="py-5 bg-red-500">
      <div className="max-w-3xl d-d-flex justify-content-center px-3">
        <div className="text-center mb-5">
          <h2 className="fs-3 md:display-5 fw-bold text-foreground mb-4">Frequently Asked Questions</h2>
          <p className="fs-6 text-muted-foreground">
            Find answers to common questions about our platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-border rounded-2 overflow-d-none"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-100 px-6 py-3 d-flex align-items-center justify-content-between hover:bg-muted/50-colors"
              >
                <span className="fw-bold text-foreground text-start">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-muted-foreground-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-3 border-top border-border bg-muted/30">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
