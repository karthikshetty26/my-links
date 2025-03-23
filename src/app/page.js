import Image from "next/image";
import HOMECSS from "./page.module.css"; // CSS module for styling
import ProfilePic from '@/assets/img/profile.png'; // Profile picture

// Array of social media and contact links with metadata
const SOCIAL_LINKS = [
  { href: 'https://karthikshetty.info/', name: 'Portfolio', type: 'Website' },
  { href: 'https://www.linkedin.com/in/karthikshetty26/', name: 'LinkedIn', type: 'Social' },
  { href: 'mailto:karthikkanyana26@gmail.com', name: 'Gmail', type: 'Mail' },
  { href: 'https://github.com/karthikshetty26', name: 'GitHub', type: 'Code' },
  { href: 'https://www.instagram.com/karthik.shetty.26/', name: 'Instagram', type: 'Social' },
  { href: 'https://medium.com/@Karthikshetty26', name: 'Medium', type: 'Blog' },
  { href: 'https://hashnode.com/@Karthikshetty', name: 'Hashnode', type: 'Blog' },
];

// Main home page component
export default function Home() {
  return (
    <main className={HOMECSS.main}>
      {/* Bio section - contains profile image and personal info */}
      <section className={HOMECSS.section_bio}>
        {/* Circular container for profile image */}
        <div className={HOMECSS.image_container}>
          <Image
            src={ProfilePic}
            alt="Karthik Shetty Profile Image"
            width={250} // Image dimensions (responsive)
            height={250}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }} // Ensures the image fits the container
          />
        </div>

        {/* Container for biographical information */}
        <div className={HOMECSS.bio_content}>
          <h1>Karthik Shetty</h1>
          <p className={HOMECSS.bio}>I am a Software Engineer and Full-Stack Developer, passionate about UI/UX and Web Development.</p>

          {/* Location display with SVG icon */}
          <div className={HOMECSS.location}>
            <span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z">
                </path>
              </svg>
            </span>
            <p>Mangaluru, Karnataka, India</p>
          </div>
        </div>
      </section>

      {/* Social links section - grid of contact/social links */}
      <section className={`${HOMECSS.section_highlight} ${HOMECSS.links}`}>
        {/* Map through the array of social links to create link elements */}
        {SOCIAL_LINKS.map(({ href, name, type }) => (
          <a key={name} href={href} className={HOMECSS.link} target="_blank" rel="noopener noreferrer">
            {name}
            <span>
              {/* SVG icon that changes based on link type */}
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                {/* Conditionally render different SVG paths based on link type */}
                {type === 'Website' && (
                  <path d="M5.32244 5.96559C5.42367 5.85376 5.5282 5.74386 5.63604 5.63602C6.11945 5.15261 6.64417 4.73569 7.19883 4.38526C6.8849 4.29873 6.60274 4.24748 6.35542 4.22882C5.78308 4.18566 5.53243 4.32157 5.42553 4.42847C5.31863 4.53537 5.18272 4.78602 5.22589 5.35835C5.23974 5.54197 5.27156 5.74481 5.32244 5.96559ZM20.7257 14.2107C20.7873 14.3337 20.8463 14.4557 20.9028 14.5766C21.3793 15.5977 21.6941 16.5944 21.7616 17.4903C21.8289 18.3819 21.656 19.3107 20.9819 19.9848C20.3077 20.659 19.379 20.8318 18.4874 20.7646C17.7068 20.7057 16.8497 20.4592 15.9666 20.0815L15.964 20.0827C15.8109 20.0172 15.657 19.9478 15.5025 19.8746C13.4695 18.9123 11.1435 17.2205 8.9599 15.0369C6.77855 12.8556 5.08807 10.5322 4.1252 8.50073C4.05178 8.34582 3.98205 8.19148 3.91629 8.03796L3.91734 8.03582C3.53815 7.15052 3.29057 6.29122 3.23155 5.50877C3.1643 4.61713 3.33717 3.6884 4.01132 3.01425C4.68547 2.34011 5.61419 2.16724 6.50583 2.23449C7.40174 2.30206 8.3984 2.61685 9.41949 3.09335C9.54253 3.15077 9.66667 3.21089 9.79181 3.27366C12.7623 2.52497 16.0404 3.31242 18.364 5.63602C20.6882 7.96029 21.4755 11.2395 20.7257 14.2107ZM19.6128 16.8042C19.2627 17.3578 18.8465 17.8814 18.364 18.3639C18.257 18.4709 18.1479 18.5747 18.037 18.6752C18.2553 18.7252 18.456 18.7565 18.6378 18.7702C19.2101 18.8134 19.4608 18.6775 19.5677 18.5706C19.6746 18.4637 19.8105 18.2131 19.7673 17.6407C19.7488 17.3952 19.6982 17.1154 19.6128 16.8042ZM5.63604 18.3639C3.37241 16.1003 2.56666 12.9309 3.21877 10.0224C4.30105 12.0032 5.92374 14.1221 7.89924 16.0976C9.87632 18.0747 11.9971 19.6985 13.9794 20.7808C11.0705 21.4337 7.90015 20.6281 5.63604 18.3639Z" />
                )}
                {type === 'Social' && (
                  <path d="M13.5759 17.2714L8.46576 14.484C7.83312 15.112 6.96187 15.5 6 15.5C4.067 15.5 2.5 13.933 2.5 12C2.5 10.067 4.067 8.5 6 8.5C6.96181 8.5 7.83301 8.88796 8.46564 9.51593L13.5759 6.72855C13.5262 6.49354 13.5 6.24983 13.5 6C13.5 4.067 15.067 2.5 17 2.5C18.933 2.5 20.5 4.067 20.5 6C20.5 7.933 18.933 9.5 17 9.5C16.0381 9.5 15.1669 9.11201 14.5343 8.48399L9.42404 11.2713C9.47382 11.5064 9.5 11.7501 9.5 12C9.5 12.2498 9.47383 12.4935 9.42408 12.7285L14.5343 15.516C15.167 14.888 16.0382 14.5 17 14.5C18.933 14.5 20.5 16.067 20.5 18C20.5 19.933 18.933 21.5 17 21.5C15.067 21.5 13.5 19.933 13.5 18C13.5 17.7502 13.5262 17.5064 13.5759 17.2714Z" />
                )}
                {type === 'Mail' && (
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                )}
                {type === 'Code' && (
                  <path d="M10.9999 12L3.92886 19.0711L2.51465 17.6569L8.1715 12L2.51465 6.34317L3.92886 4.92896L10.9999 12ZM10.9999 19H20.9999V21H10.9999V19Z" />
                )}
                {type === 'Blog' && (
                  <path d="M4.7134 7.12811L4.46682 7.69379C4.28637 8.10792 3.71357 8.10792 3.53312 7.69379L3.28656 7.12811C2.84706 6.11947 2.05545 5.31641 1.06767 4.87708L0.308047 4.53922C-0.102682 4.35653 -0.102682 3.75881 0.308047 3.57612L1.0252 3.25714C2.03838 2.80651 2.84417 1.97373 3.27612 0.930828L3.52932 0.319534C3.70578 -0.106511 4.29417 -0.106511 4.47063 0.319534L4.72382 0.930828C5.15577 1.97373 5.96158 2.80651 6.9748 3.25714L7.69188 3.57612C8.10271 3.75881 8.10271 4.35653 7.69188 4.53922L6.93228 4.87708C5.94451 5.31641 5.15288 6.11947 4.7134 7.12811ZM3.06361 21.6132C4.08854 15.422 6.31105 1.99658 21 1.99658C19.5042 4.99658 18.5 6.49658 17.5 7.49658L16.5 8.49658L18 9.49658C17 12.4966 14 15.9966 10 16.4966C7.33146 16.8301 5.66421 18.6635 4.99824 21.9966H3C3.02074 21.8722 3.0419 21.7443 3.06361 21.6132Z" />
                )}
              </svg>
            </span>
          </a>
        ))}
      </section>

      {/* Copyright footer - positioned at the bottom via CSS */}
      <div className={HOMECSS.app_cc}>
        ©&nbsp;2025&nbsp;
        <a href="https://karthikshetty.info/" target="_blank">Karthik Shetty</a>
      </div>

      {/* Background animation container */}
      <div className={HOMECSS.animation}>
        {/* List of animated floating circles */}
        <ul className={HOMECSS.circles}>
          {/* Generating 12 circle elements dynamically */}
          {Array.from({ length: 12 }).map((_, i) => (
            <li key={i} />
          ))}
        </ul>
      </div>
    </main>
  );
}