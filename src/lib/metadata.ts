import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface GenerateMetadataProps {
  title?: string;
  description?: string;
  ogImage?: string;
  path?: string;
}

export function generateMetadata({
  title,
  description,
  ogImage,
  path = "",
}: GenerateMetadataProps = {}): Metadata {
  const siteTitle = title
    ? `${title} — ${siteConfig.name}`
    : siteConfig.title;
  const siteDescription = description || siteConfig.description;
  const url = `${siteConfig.url}${path}`;

  return {
    title: siteTitle,
    description: siteDescription,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url,
      siteName: siteConfig.name,
      images: [
        {
          url: ogImage || siteConfig.ogImage,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: siteTitle,
      description: siteDescription,
      images: [ogImage || siteConfig.ogImage],
      creator: "@danielkliewer",
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    alternates: {
      canonical: url,
    },
  };
}
