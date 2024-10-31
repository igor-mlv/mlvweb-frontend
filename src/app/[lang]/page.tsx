import { getPageBySlug } from "@/shared/utils/get-page-by-slug";
import componentResolver from '@/shared/utils/component-resolver';
import { i18n } from "../../../i18n.config";

// import { Metadata } from 'next';

// import PageContent from '@/lib/shared/PageContent';
// import fetchContentType from '@/lib/strapi/fetchContentType';
// import { generateMetadataObject } from '@/lib/shared/metadata';

// export async function generateMetadata({
//   params,
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const pageData = await fetchContentType(
//     'pages',
//     `filters[slug][$eq]=homepage&filters[locale][$eq]=${params.locale}&populate=seo.metaImage`,
//     true
//   );

//   const seo = pageData?.seo;
//   const metadata = generateMetadataObject(seo);
//   return metadata;
// }

export default async function RootRoute({ params }: { params: { lang: string } }) {
  try {
    const page = await getPageBySlug('home', params.lang)
    if (page.error && page.error.status == 401)
      throw new Error(
        'Missing or invalid credentials. Have you created an access token using the Strapi admin panel? http://localhost:1337/admin/'
      )

    if (page.data.length == 0 && params.lang !== 'en') return <> error in roote page redirect</>
    if (page.data.length === 0) return null

    const contentSections = page.data[0].contentSections
    return contentSections.map((section: any, index: number) =>
      componentResolver(section, index)
    )
  } catch (error: any) {
    console.log('Error in RootRoute:', error);
  }
}

export async function generateStaticParams() {
  return i18n.locales.map((locale) => ({ lang: locale }));
}