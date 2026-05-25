"use client";

interface MDXContentProps {
  html: string;
}

function MDXContent({ html }: MDXContentProps) {
  return (
    <div
      className="blog-content"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export { MDXContent };
