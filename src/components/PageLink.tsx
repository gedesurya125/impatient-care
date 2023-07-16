/** @jsxImportSource theme-ui */

import React from "react";

import Link from "next/link";
import { motion } from "framer-motion";

import { ThemeUIStyleObject } from "theme-ui";

// hooks
// import { useLocation } from '@reach/router';

const MotionNextLink = motion(Link);

export interface PageLinkProps {
  to: string;
  children: React.ReactNode;
  variant?: string;
  sx?: ThemeUIStyleObject;
  className?: string;
}

export const PageLink = ({
  to = "/",
  children,
  variant = "pageLink",
  className,
  sx,

  // handleCloseOverlay,
  ...props
}: PageLinkProps) => {
  // TODO: handle this path change later
  // const lastPath = React.useRef(null);
  // const { pathname } = useLocation();

  // // handle close overlay only if pathname is successfully changed
  // React.useEffect(() => {
  //   if (!handleCloseOverlay) return;
  //   if (lastPath.current === null || lastPath.current === pathname) {
  //     lastPath.current = pathname;
  //   } else {
  //     lastPath.current = pathname;
  //     handleCloseOverlay();
  //   }
  // }, [pathname]);
  return (
    <MotionNextLink
      className={className}
      href={to}
      sx={{
        variant: `links.${variant}`,
        display: "block",
        ...sx,
      }}
      {...props}
    >
      {children}
    </MotionNextLink>
  );
};
