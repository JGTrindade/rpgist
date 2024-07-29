// import Logo from "../common/Logo";
import styles from "./Footer.module.css";

export default function Footer() {
    const {footerContainer, footer, logo, links, newsletterSubscription} = styles;

    return (
        <div className={footerContainer}>
            <footer className={footer}>
                <div className={logo}>
                    {/*<Logo/>*/}
                </div>
                <div className={links}>
                    <ul>
                        <p>Resources</p>
                        <li>Blog</li>
                        <li>Docs</li>
                        <li>Homebrew</li>
                        <li>Community</li>
                    </ul>
                    <ul>
                        <p>About us</p>
                        <li>The party</li>
                        <li>Why us</li>
                        <li>Contact</li>
                    </ul>
                    <ul>
                        <p>Legal</p>
                        <li>Privacy policy</li>
                        <li>Cookie preferences</li>
                    </ul>
                </div>
                <div className={newsletterSubscription}>
                    <p>Stay updated on new releases, features and guides.</p>
                    <form data-input-wrapper="true">
                        <input
                            aria-label="Enter your email"
                            placeholder="you@domain.com"
                            required
                            type="email"
                            name="email"
                        />
                        <button type="submit">Subscribe</button>
                    </form>
                </div>
                {/* Language switch button */}
                {/* List of Social Media icons */}
                {/* Newsletter subscription call to action */}
                {/* Logo */}
                {/* Copyright info */}
            </footer>
        </div>
    );
}
