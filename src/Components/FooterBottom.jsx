import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcDiscover,
  FaCcApplePay,
  FaCcDinersClub,
  FaCcJcb,
} from "react-icons/fa6";

const FooterBottom = () => {
  return (
    <div className="border-t border-gray-300 mt-10 pt-6 flex justify-between items-center">
      <p>
        Copyright © 2024 <span className="text-red-400">Shooz</span>. All rights
        reserved
      </p>

      <div className="flex gap-5 text-2xl">
        <FaCcAmex className="text-blue-600" />
        <FaCcApplePay />
        <FaCcDinersClub className="text-blue-500" />
        <FaCcJcb />
        <FaCcDiscover className="text-red-600" />
        <FaCcMastercard />
        <FaCcVisa className="text-purple-500" />
      </div>
    </div>
  );
};

export default FooterBottom;
