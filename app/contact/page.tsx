import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact J.N. Chemicals for product inquiries, bulk orders, and custom formulations. Located at Vatva GIDC, Ahmedabad.',
}

export default function ContactPage() {
  return (
    <>
      <section className="bg-gradient-to-r from-[#0047AB] to-[#1E90FF] pt-32 pb-20 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-blue-100 text-xl max-w-2xl">Get in touch for product inquiries, bulk orders, or custom formulations.</p>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="text-2xl font-bold mb-8">Get In Touch</h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#0047AB] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Ahmedabad Office</h4>
                  <p className="text-gray-600 text-sm">Vatva GIDC, Ahmedabad, Gujarat 382445, India</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#0047AB] rounded-xl flex items-center justify-center shrink-0">
                  <MapPin size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Valsad Branch</h4>
                  <p className="text-gray-600 text-sm">Valsad, Gujarat, India</p>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#27AE60] rounded-xl flex items-center justify-center shrink-0">
                  <Phone size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Phone</h4>
                  <a href="tel:+917878108158" className="text-[#0047AB] hover:underline">+91 78781 08158</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-[#1E90FF] rounded-xl flex items-center justify-center shrink-0">
                  <Mail size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Email</h4>
                  <a href="mailto:info@jnchemicals.co.in" className="text-[#0047AB] hover:underline">info@jnchemicals.co.in</a>
                </div>
              </div>
              <div className="flex gap-4 items-start">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center shrink-0">
                  <Clock size={20} className="text-white" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Business Hours</h4>
                  <p className="text-gray-600 text-sm">Mon – Sat: 9:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/917878108158"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-[#25D366] text-white px-6 py-3 rounded-xl font-semibold hover:bg-green-600 transition-colors"
            >
              <span className="text-xl">💬</span> Chat on WhatsApp
            </a>

            {/* Map */}
            <div className="mt-8 rounded-xl overflow-hidden shadow-sm border border-gray-200 h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5!2d72.6!3d22.98!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sVatva+GIDC+Ahmedabad!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="J.N. Chemicals Location"
              />
            </div>
          </div>

          {/* Form */}
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <h2 className="text-2xl font-bold mb-2">Send Us a Message</h2>
            <p className="text-gray-500 mb-8 text-sm">We'll respond within 24 hours.</p>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
