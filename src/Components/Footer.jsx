import Foter from "../Constants/Foter";
import FooterLogo from "./FooterLogo";
import FooterColumn from "./FooterColumn";
import FooterBottom from "./FooterBottom";

const Footer = () => {
  return (
    <footer className="bg-[#eaeae2] min-h-100 py-12">
      <div className="max-w-9xl mx-auto md:px-8 grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-5 gap-20 items-start">
        {Foter.map((section) =>
          section.logo ? (
            <FooterLogo
              key={section.id}
              logo={section.logo}
              items={section.items}
            />
          ) : (
            <FooterColumn
              key={section.id}
              title={section.title}
              items={section.items}
            />
          ),
        )}
      </div>
      <FooterBottom />
    </footer>
  );
};

export default Footer;
