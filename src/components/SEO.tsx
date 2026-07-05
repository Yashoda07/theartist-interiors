import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

type Props = {
  title: string;
  description: string;
  path: string; // e.g. "/", "/portfolio"
  image?: string;
};

const SITE = "https://theartistinteriors.in";

const SEO = ({ title, description, path, image }: Props) => {
  const location = useLocation();
  const resolvedPath = path ?? location.pathname;
  const url = `${SITE}${resolvedPath === "/" ? "/" : resolvedPath}`;
  const img = image ?? `${SITE}/logo.png`;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content="index, follow, max-image-preview:large" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="The Artist Interiors" />
      <meta property="og:image" content={img} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={img} />
    </Helmet>
  );
};

export default SEO;
