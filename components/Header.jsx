
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
export default function Header() {
    return (
        <div className="header-container grid grid-cols-2">
            <div className="header-left flex flex-col py-[60px] px-5">
                <div className="header-title text-2xl">
                    Merhaba, Ben Serhanxx
                </div>
                <div className="header-moving-text">
                    Ben bir yazılımcıyım
                </div>
                <div className="header-paragraph">

                </div>
                <div className="header-social-media">
                    <ul className="grid grid-cols-4">
                        <li><Instagram size={24} /></li>
                        <li><Twitter size={24} /></li>
                        <li><Facebook size={24} /></li>
                        <li><Linkedin size={24} /></li>
                    </ul>
                </div>
            </div>
            <div className="header-right">
                <div className="right-image-container">
                    <img alt="profile image" />
                </div>
            </div>

        </div>
    )
}