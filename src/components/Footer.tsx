interface FooterProps {
  siteName: string;
  tagline: string;
}

export default function Footer({siteName, tagline}: FooterProps) {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-12 border-t border-line/60 bg-white/70 py-6">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-2 px-4 text-sm text-muted lg:px-8">
        <p>
          © {year} {siteName}
        </p>
        <p>{tagline}</p>
      </div>
    </footer>
  );
}
