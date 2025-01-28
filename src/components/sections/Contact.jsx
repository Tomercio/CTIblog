import React from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

const Contact = () => (
  <section
    id="contact"
    className="py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900"
  >
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <div className="inline-flex items-center justify-center p-2 bg-blue-500/10 rounded-xl mb-4">
          <Mail className="w-8 h-8 text-blue-400" />
        </div>
        <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto">
          Have questions about cyber threats or want to collaborate? Let's
          connect!
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form className="space-y-6">
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-300 mb-2 font-medium">
                    Message
                  </label>
                  <textarea
                    className="w-full bg-gray-900/50 border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-blue-500 transition-colors h-32"
                    placeholder="Your message..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium py-3 px-6 rounded-lg hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 lg:pl-8 lg:border-l border-gray-700">
              <div className="text-center lg:text-left">
                <h3 className="text-xl font-semibold text-white mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  <ContactInfo
                    icon={<Mail className="w-5 h-5" />}
                    title="Email"
                    content="tomereb4@gmail.com"
                  />
                  <ContactInfo
                    icon={<Phone className="w-5 h-5" />}
                    title="Phone"
                    content="+972 (52) 426-0338"
                  />
                  <ContactInfo
                    icon={<MapPin className="w-5 h-5" />}
                    title="Location"
                    content="Israel"
                  />
                </div>
              </div>

              {/* Social Proof */}
              <div className="p-6 bg-gray-900/50 rounded-xl border border-gray-700/50">
                <p className="text-gray-400 text-sm leading-relaxed">
                  "Let's Keep in Touch."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ContactInfo = ({ icon, title, content }) => (
  <div className="flex items-center space-x-4 text-gray-300">
    <div className="flex-shrink-0 w-10 h-10 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400">
      {icon}
    </div>
    <div>
      <h4 className="font-medium text-white">{title}</h4>
      <p className="text-gray-400">{content}</p>
    </div>
  </div>
);

export default Contact;
