import React from 'react';

export default function WhatsAppButton() {
  const whatsappNumber = '447926999783'; // UK number without + for WhatsApp link
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=Hello%20I%27d%20like%20to%20inquire%20about%20your%20services`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      title="Chat with us on WhatsApp"
    >
      {/* Floating Button */}
      <div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-300 ease-out group-hover:bg-[#20BA5A]">
        {/* WhatsApp Icon SVG - Clean and Professional */}
        <svg
          className="w-7 h-7 text-white"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.003 6.167 1.239 8.413 3.488 2.245 2.248 3.481 5.236 3.479 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.694-1.447l-6.498 1.703z" />
          <path fill="#fff" d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.003 6.167 1.239 8.413 3.488 2.245 2.248 3.481 5.236 3.479 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.694-1.447l-6.498 1.703zm8.817-7.313c.285.555.849.89 1.468.892.512.003.956-.279 1.533-.77.403-.337 2.09-2.065 2.271-2.39.18-.325.226-.853-.213-1.292-.44-.44-.968-.386-1.293-.213-.325.18-2.053 1.868-2.39 2.271-.491.577-.773 1.021-.77 1.533.002.619.337 1.183.892 1.468z" />
        </svg>
      </div>

      {/* Tooltip on hover */}
      <div className="absolute bottom-16 right-0 bg-gray-900 text-white px-3 py-2 rounded-lg text-xs font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us!
      </div>
    </a>
  );
}
