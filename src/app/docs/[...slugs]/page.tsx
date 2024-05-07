interface Props {
  params: {
    slugs: string[];
  };
}

export default function DocsPage({ params }: Props) {
  const txt = params.slugs.map((s) => {
    return `${s} `;
  });

  return <h1>Docs page {txt}</h1>;
}
