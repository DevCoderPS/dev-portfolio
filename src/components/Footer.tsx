import React from "react";
import { Heart, ArrowUp } from "lucide-react";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-900 text-white py-12 relative">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              DevCoderPS
            </div>
            <p className="text-gray-400 leading-relaxed">
              Full-Stack Software Developer passionate about creating beautiful,
              scalable web applications and turning ideas into reality.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              {["About", "Skills", "Projects", "Experience", "Contact"].map(
                (link) => (
                  <button
                    key={link}
                    onClick={() => {
                      const element = document.getElementById(
                        link.toLowerCase()
                      );
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="block text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    {link}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>Yangon, Myanmar</p>
              <p>awin.pyaesonewin@gmail.com</p>
              <p>+95 (776) 100-735</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-2 text-gray-400 mb-4 md:mb-0">
              <span>Made with</span>
              <Heart size={16} className="text-red-500" />
              <span>by DevCoderPS © {new Date().getFullYear()}</span>
            </div>

            <button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-3 rounded-full hover:shadow-lg transform hover:scale-110 transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
