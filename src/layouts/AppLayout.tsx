import { HTMLAttributes, ReactNode, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";

type Props = {
  title?: string;
  children: ReactNode;
} & HTMLAttributes<HTMLDivElement>;

export default function AppLayout({ title, children }: Props) {
  const location = useLocation();

  useEffect(() => {
    if (location?.pathname) {
      animateScroll.scrollToTop();
    }
  }, [location?.pathname]);

  return (
    <HelmetProvider>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{title ? `${title} | Eatonomy` : "Eatonomy"}</title>
        <meta name="description" content="Eatonomy" />
      </Helmet>

      {children}
    </HelmetProvider>
  );
}
