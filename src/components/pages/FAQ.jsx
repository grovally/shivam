import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'What types of properties do you deal in?',
      answer:
        'We deal in residential, commercial, industrial, agricultural, and investment properties across Noida, Greater Noida, Delhi NCR, and other prime locations.',
    },
    {
      question: 'Do you help with home loans and financing?',
      answer:
        'Yes. We assist clients with home loans, business loans, project financing, and government subsidy schemes through our banking and financial partners.',
    },
    {
      question: 'Is there any brokerage or hidden charge?',
      answer:
        'We believe in complete transparency. All brokerage and service charges are discussed clearly before any transaction is finalised.',
    },
    {
      question: 'Can I schedule a property visit?',
      answer:
        'Absolutely. You can book a site visit by contacting our team through phone, WhatsApp, or the contact form on our website.',
    },
    {
      question: 'Do you provide legal and documentation support?',
      answer:
        'Yes. We help with property verification, agreement drafting, registry assistance, title checks, and other documentation processes.',
    },
    {
      question: 'Do you work with investors as well?',
      answer:
        'Yes. We provide investment advisory, rental yield analysis, resale opportunities, and long-term wealth creation strategies for property investors.',
    },
  ];

  return (
    <section className="mt-24">
      {/* Heading */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-red-600">
          <MessageCircle size={18} />
          <span className="font-medium">Frequently Asked Questions</span>
        </div>

        <h2 className="mt-5 text-4xl lg:text-5xl font-bold text-gray-900">
          Got Questions? We Have Answers
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
          Find quick answers about property buying, selling, investment, loans,
          legal documentation, and our real estate services.
        </p>
      </div>

      {/* FAQ List */}
      <div className="mx-auto max-w-4xl space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={index}
              className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-xl transition-all duration-300 hover:shadow-red-100"
            >
              {/* Question */}
              <button
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="flex w-full items-center justify-between px-6 py-5 text-left"
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-red-50 text-red-500 transition-transform duration-300">
                  {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                    <p className="leading-7 text-gray-600">{faq.answer}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 text-center">
        <p className="text-gray-600">
          Still have questions? Our real estate experts are ready to help.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+919999999999"
            className="inline-flex items-center justify-center rounded-full border border-red-200 bg-white px-6 py-3 font-semibold text-red-600 transition-all duration-300 hover:border-red-500 hover:bg-red-50"
          >
            Call Now
          </a>

          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-yellow-400 px-6 py-3 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(251,191,36,0.45)]"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}