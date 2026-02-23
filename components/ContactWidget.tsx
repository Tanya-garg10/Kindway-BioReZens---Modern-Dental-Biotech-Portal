'use client'

import { useEffect } from 'react'
import { MessageCircle } from 'lucide-react'

export default function ContactWidget() {
    useEffect(() => {
        // WhatsApp Widget
        const script1 = document.createElement('script')
        script1.innerHTML = `
      (function (w, d, s, u) {
        w.gbwawc = {
          url: u,
          options: {
            waId: "+91 91988 46529",
            siteName: "Kindway Biorezens",
            siteTag: "Innovation, Quality & Precision",
            siteLogo: "https://assets.gallabox.com/gb-home/wa-chat-widget/bot-logo-3.png",
            widgetPosition: "RIGHT",
            welcomeMessage: "Welcome to Kindway Biorezens Pvt. Ltd.",
            triggerMessage: "Kindway Biorezens",
            brandColor: "#25D366",
            messageText: "I am looking for",
            replyOptions: ["Order product", "Workshop / Training", "Mobile Clinic Services"],
            version: "v1",
            widgetPositionMarginX: "20",
            widgetPositionMarginY: "20",
          },
        };
        var h = d.getElementsByTagName(s)[0],
          j = d.createElement(s);
        j.async = true;
        j.src = u + "/whatsapp-widget.min.js?_=" + new Date().toISOString().split('T')[0];
        h.parentNode.insertBefore(j, h);
      })(window, document, "script", "https://waw.gallabox.com");
    `
        document.body.appendChild(script1)

        // Tawk.to Chat Widget
        const script2 = document.createElement('script')
        script2.innerHTML = `
      var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
      (function(){
        var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
        s1.async=true;
        s1.src='https://embed.tawk.to/690dc56ca2e13a195dc64d8c/1j9esmd10';
        s1.charset='UTF-8';
        s1.setAttribute('crossorigin','*');
        s0.parentNode.insertBefore(s1,s0);
      })();
    `
        document.body.appendChild(script2)

        return () => {
            document.body.removeChild(script1)
            document.body.removeChild(script2)
        }
    }, [])

    return (
        <>
            {/* Fallback WhatsApp Button (if widget doesn't load) */}
            <a
                href="https://wa.me/919198846529?text=Hello%20Kindway%20Biorezens"
                target="_blank"
                rel="noopener noreferrer"
                className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-600 transition-all hover:scale-110"
                aria-label="Chat on WhatsApp"
            >
                <MessageCircle className="w-7 h-7 text-white" />
            </a>
        </>
    )
}
