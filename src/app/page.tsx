import LinkCard from "@/components/LinkCard";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { GrSpotify } from "react-icons/gr";
import { MdEmail } from "react-icons/md";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaLinkedin, FaGlobe, FaBlog } from "react-icons/fa";
import { FaHandHoldingHeart } from "react-icons/fa";
import cbirstlerImage from "../images/photos/cbirstler_img.jpg";
import { FreeTrialBanner } from "@/components/FreeTrial";

export default function Home() {
  // Sample data to demonstrate the effect
  const linksData = [
    {
      title: "Contact Me",
      link: "sms:+17188830004",
      description: "",
      icon: BsFillTelephoneFill,
    },
    {
      title: "About Me",
      link: "https://fromvictim2victor.org/",
      description:
        "I am the founder of from victim to victor inc. We serve crime victims and service providers through philanthropy, education, and advocacy.",
      icon: MdEmail,
    },
    {
      title: "Click To Donate",
      link: "https://www.zeffy.com/fundraising/d688e945-c59c-4156-9534-72259b5c047e",
      description: "Support Victims of Crime and Service Providers",
      icon: FaHandHoldingHeart,
    },
    {
      title: "From Victim to Victor Inc. on Facebook",
      link: "https://www.facebook.com/FromVictim2VictorInc",
      description: "",
      icon: FaFacebook,
    },
    {
      title: "From Victim to Victor on Instagram",
      link: "https://instagram.com/fromvictimtovictorinc/",
      description: "",
      icon: FaInstagram,
    },
    {
      title: "From Victim to Victor on TikTok",
      link: "https://www.tiktok.com/@fromvictimtovictorinc",
      description: "",
      icon: FaTiktok,
    },
    {
      title: "Blog",
      link: "https://fromvictimtovictorinc.substack.com/",
      description: "From Victim To Victor Inc. On Substack",
      icon: FaBlog,
    },
    {
      title: "From Victim to Victor on Spotify",
      link: "https://podcasters.spotify.com/pod/show/fromvictim2victorinc",
      description: "",
      icon: GrSpotify,
    },
    {
      title: "From Victim To Victor Inc. On The Web",
      link: "https://fromvictim2victor.org/",
      description: "",
      icon: FaGlobe,
    },
    {
      title: "LinkedIn Profile",
      link: "https://www.linkedin.com/in/crbirstler/",
      description: "",
      icon: FaLinkedin,
    },
  ];

  return (
    <div className="flex flex-col min-h-screen text-white bg-gradient-to-br from-blue-900 via-teal-800 to-purple-900">
      <main className="relative flex flex-col h-full w-full max-w-2xl mx-auto items-center justify-start px-4 pt-8 pb-16">
        {/* Header Section */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-3">
            From Victim to Victor Inc.
          </h1>
          <p className="text-lg text-white opacity-90 italic">
            "Your dreams are already achieved once you believe in yourself"
          </p>

          {/* Profile Image with animated border */}
          <div className="relative inline-block mt-6 mb-6">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-teal-400 via-blue-400 to-purple-500 animate-pulse blur-md"></div>
            <div className="relative p-1 bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 rounded-full">
              <div className="p-0.5 bg-gradient-to-br from-blue-900 via-teal-800 to-purple-900 rounded-full">
                <Image
                  src={cbirstlerImage.src}
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Glassmorphism Links Section */}
        <div className="w-full max-w-md space-y-4 mb-5">
          {linksData.map((item, index) => (
            <LinkCard
              key={index}
              title={item.title}
              description={item.description}
              icon={item.icon}
              link={item.link}
            />
          ))}
        </div>

        {/* Footer */}
        <FreeTrialBanner/>
      </main>
    </div>
  );
}
