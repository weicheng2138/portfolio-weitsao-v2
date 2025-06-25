import { footerConfig } from '@/configs/footerConfig';
import CustomLink from '@/components/CustomLink';
import { SiteIcon, SocialIcon } from '@/components/Icons';

type socialLinkType = keyof typeof footerConfig.socialLinks;
const socialLinksKeys: socialLinkType[] = Object.keys(
  footerConfig.socialLinks
) as socialLinkType[];

function Footer() {
  return (
    <footer className="flex w-full flex-col items-center justify-center border-b-[6px] border-primary bg-secondary01 md:h-60 md:flex-row md:items-center md:justify-evenly">
      <section className="mb-20 mt-10 flex flex-row gap-6 md:m-0">
        {socialLinksKeys.map((key, index) => {
          return (
            <SocialIcon
              href={footerConfig.socialLinks[key]}
              key={index}
              kind={key}
            />
          );
        })}
      </section>
      <section className="flex flex-col items-center">
        <CustomLink href="/">
          <div className="flex items-center gap-4">
            <SiteIcon />
            <h1 className="font-noto-sans text-sm font-normal tracking-wide text-secondary04">
              WEI．TSAO
            </h1>
          </div>
        </CustomLink>
        <p className="mb-10 text-center text-xs leading-5 text-secondary03 md:mb-3">
          <CustomLink
            href={footerConfig.design.link}
            className="hover:text-primary"
          >
            Design - Winnie Tsao
          </CustomLink>
          &nbsp;|&nbsp;
          <CustomLink
            href={footerConfig.build.link}
            className="hover:text-primary"
          >
            Build - Keck Hung
          </CustomLink>
          <br />© 2023
        </p>
      </section>
    </footer>
  );
}

export default Footer;
