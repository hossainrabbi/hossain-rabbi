import { HTMLAttributes, ReactNode, useEffect } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { animateScroll } from "react-scroll";
import Navbar from "../components/common/Navbar";
import { APP_NAME } from "../helpers/config";

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
        <title>{title ? `${title} | ${APP_NAME}` : APP_NAME}</title>
      </Helmet>

      <main className="">
        <Navbar />
        {children}
      </main>
    </HelmetProvider>
  );
}
