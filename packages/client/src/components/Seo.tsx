import React from "react";
import Head from "next/head";
import { getHostUrl } from "src/helper/getHostUrl";

export interface SeoProps {
  title: string;
  description: string;
  children?: React.ReactNode;
  pathname: string;
  imageUrl: any;
}

export const Seo = ({
  title,
  description,
  children,
  pathname,
  imageUrl,
}: SeoProps) => {
  const url = `${getHostUrl()}${pathname}`;
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content={imageUrl} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <link rel="icon" href="/favicon.png" />
      {children}
    </Head>
  );
};
