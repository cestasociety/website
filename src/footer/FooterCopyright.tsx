import { AppConfig } from '../utils/AppConfig';

const FooterCopyright = () => (
  <div className="footer-copyright">
    © {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
    <span role="img" aria-label="Love">
      ♥
    </span>{' '}
    by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a> <br />
    Made with     <span role="img" aria-label="Love">
      ♥
    </span>{' '} by cesta
    <style jsx>
      {`
        .footer-copyright :global(a) {
          @apply text-primary-500;
        }

        .footer-copyright :global(a:hover) {
          @apply underline;
        }
      `}
    </style>
  </div>
);

export { FooterCopyright };
