import { fetchOneEntry, isEditing, isPreviewing } from "@builder.io/sdk-react";
import { RenderBuilderContent } from "~/components/builder";

// Builder Public API Key set in .env file
const PUBLIC_API_KEY = process.env.NEXT_PUBLIC_BUILDER_API_KEY!;

interface PageProps {
  params: {
    page: string[],
    lang: string
  };
  searchParams: Record<string, string>;
}

export default async function Page(props: PageProps) {
  const builderModelName = "page";
  
  // Use the page path specified in the URL to fetch the content
  const urlPath = "/" + (props?.params?.page?.join("/") || "");
  console.log('urlPath', urlPath);
  console.log(props);
  const content = await fetchOneEntry({
    // Get the page content from Builder with the specified options
    apiKey: PUBLIC_API_KEY,
    model: builderModelName,
    userAttributes: { urlPath, locale: props.params.lang },
    options: props.searchParams,
  });
  
  const canShowContent = content ?? (isPreviewing(props.searchParams) || isEditing(props.searchParams));
  if (!canShowContent) {
    return (
      <>
        <h1>404</h1>
        <p>Make sure you have your content published at builder.io.</p>
      </>
    );
  }
  
  return (
    <>
      {/* Render the Builder page */}
      <RenderBuilderContent content={content} model={builderModelName} locale={props?.params?.lang || 'en'} />
    </>
  );
}