import { InstagramIcon, LinkedInIcon, TwitterIcon, WhatsAppIcon } from "@/assets/Icons";

const HeroSocial = () => {
    return (
        <div
            className="flex items-center justify-center md:gap-5 gap-4"
        >
            <button className="focus:outline-none">
                <InstagramIcon className="max-md:w-5 h-5" />
            </button>
            <button className="focus:outline-none">
                <WhatsAppIcon className="max-md:w-5 h-5" />
            </button>
            <button className="focus:outline-none">
                <LinkedInIcon className="max-md:w-5 h-5" />
            </button>
            <button className="focus:outline-none">
                <TwitterIcon className="max-md:w-5 h-5" />
            </button>
        </div>
    );
}

export default HeroSocial;