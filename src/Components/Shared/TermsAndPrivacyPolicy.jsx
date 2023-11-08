import {  useEffect, useState } from "react";
import { BiSolidDownArrowAlt, BiSolidUpArrowAlt } from "react-icons/bi";
import { TiTick } from "react-icons/Ti";
import AOS from "aos";
import "aos/dist/aos.css";


const TermsAndPrivacyPolicy = () => {
  const [isTermsCollapsed, setIsTermsCollapsed] = useState(true);
  const [isPrivacyPolicyCollapsed, setIsPrivacyPolicyCollapsed] =
    useState(true);

  useEffect(() => {
      setTimeout(() => {
        AOS.init({ once: true });
      }, 1000);
    }, []);

  const handleTermsToggle = () => {
    setIsTermsCollapsed(!isTermsCollapsed);
  };
  const handlePrivacyPolicyToggle = () => {
    setIsPrivacyPolicyCollapsed(!isPrivacyPolicyCollapsed);
  };

  return (
    <div data-aos="fade-left" className="flex flex-col lg:flex-row justify-around">
      <div className="collapse lg:w-[40vw] text-center">
        <input
          type="radio"
          name="my-accordion-2"
          onClick={() => handleTermsToggle()}
        />
        <div className="flex justify-between collapse-title text-xl font-medium">
          <span className="font-semibold text-2xl">Terms and Conditions</span>
          {isTermsCollapsed ? (
            <BiSolidDownArrowAlt className="inline  p-2 bg-gray-400 text-white rounded-full text-4xl" />
          ) : (
            <BiSolidUpArrowAlt className="inline  p-2 bg-gray-400 text-white rounded-full text-4xl" />
          )}
        </div>
        <div
          className={`${
            isTermsCollapsed ? "hidden" : "block"
          } collapse-content text-left space-y-3 `}
        >
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Reservations subject to availability; cancellation policy applies
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Payment details secured; additional charges may apply; taxes
            included.
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Guests adhere to hotel policies; disruptive behavior leads to
            eviction.
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Personal data handled securely; adherence to data protection laws.
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Reviews moderated; user-generated content subject to appropriateness
            checks.
          </p>
        </div>
      </div>
      <div className="collapse  lg:w-[40vw] text-center">
        <input type="radio" onClick={() => handlePrivacyPolicyToggle()} />
        <div className="flex justify-between collapse-title text-xl font-medium">
          <span className="font-semibold text-2xl">Privacy Policy Terms</span>
          {isPrivacyPolicyCollapsed ? (
            <BiSolidDownArrowAlt className="inline  p-2 bg-gray-400 text-white rounded-full text-4xl" />
          ) : (
            <BiSolidUpArrowAlt className="inline p-2 bg-gray-400 text-white rounded-full text-4xl" />
          )}
        </div>
        <div
          className={`${
            isPrivacyPolicyCollapsed ? "hidden" : "block"
          } collapse-content text-left space-y-3`}
        >
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Personal data secured; used for bookings and communication purposes.
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Information not shared; SSL encryption for secure transactions.
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Cookies used for enhanced experience; manageable through browser
            settings.
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            User rights: access, correction, deletion, and objection to
            processing.
          </p>
          <p className="border-2 border-gray-300 p-2 rounded-md">
            <TiTick className="inline text-xl p-1 bg-gray-500 text-white rounded-full mr-5" />
            Data usage solely for bookings, support, and service improvement.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndPrivacyPolicy;
