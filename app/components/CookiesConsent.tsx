// "use client";
// import { hasCookie, setCookie } from "cookies-next";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";

// export default function CookiesConsent() {
//   const [showConsent, setShowConsent] = useState(true);
//   useEffect(() => {
//     setShowConsent(hasCookie("localConsent"));
//   }, []);
//   const acceptCookie = () => {
//     setShowConsent(true);
//     setCookie("localConsent", "true", {});
//   };

//   if (showConsent) {
//     return null;
//   }
//   return (
//     <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-50">
//       <div className="fixed bottom-0 left-0 flex items-center justify-between px-4 py-8 bg-blue-600 text-white">
//         <span className="text-dark text-base mr-16">
//           This website use cookies to improve user experience.....
//           <Link href="/about" className="font-bolt text-red-400">Privacy Policy</Link>
          
//         </span>
//         <button
//           className="bg-slate-500 py-2 px-10 rounded text-white"
//           onClick={acceptCookie}
//         >
//           Accept
//         </button>
//       </div>
//     </div>
//   );
// }



"use client";
import { hasCookie, setCookie } from "cookies-next";
import React, { useEffect, useState } from "react";
import Link from "next/link";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState(true);

  useEffect(() => {
    if (!hasCookie("localConsent")) {
      setShowConsent(true);
    } else {
      setShowConsent(false);
    }
  }, []);

  const acceptCookie = () => {
    setCookie("localConsent", "true", {});
    setShowConsent(false); 
  };

  if (!showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-slate-700 bg-opacity-70 z-50">
      <div className="fixed bottom-0  flex flex-col items-center justify-between px-4 py-8 bg-gray-500 text-white md:flex-row md:items-center">
        <span className="text-dark text-base mr-0 mb -4 md:mr-16  md:mb-0">
        Ta strona korzysta z plików cookie, aby poprawić Twoje doświadczenia użytkownika, analizować ruch oraz personalizować treści. Kontynuując korzystanie z witryny, zgadzasz się na naszą{" "}
          <Link href="/about" className="font-bold text-red-400">
          Politykę plików cookie.
          </Link>
        </span>
        <button
          className="bg-slate-700 py-2 px-10 rounded text-white w-full md:w-auto"
          onClick={acceptCookie}
        >
          Akceptuj
        </button>
      </div>
    </div>
  );
}