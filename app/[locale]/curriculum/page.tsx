import MDXComponents from "@/components/mdx/MDXComponents";
import { Button } from "@/components/ui/button";
import { Locale, LOCALES } from "@/i18n/routing";
import { constructMetadata } from "@/lib/metadata";
import fs from "fs/promises";
import { Metadata } from "next";
import Link from "next/link";
import { getTranslations } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote-client/rsc";
import path from "path";
import remarkGfm from "remark-gfm";

const options = {
  parseFrontmatter: true,
  mdxOptions: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [],
  },
};

async function getMDXContent(locale: string) {
  const filePath = path.join(process.cwd(), "content", "curriculum", `${locale}.mdx`);
  try {
    const content = await fs.readFile(filePath, "utf-8");
    return content;
  } catch (error) {
    console.error(`Error reading MDX file: ${error}`);
    return "";
  }
}

type Params = Promise<{
  locale: string;
}>;

type MetadataProps = {
  params: Params;
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "About" });

  return constructMetadata({
    page: "Curriculum",
    title: t("title"),
    description: t("description"),
    locale: locale as Locale,
    path: `/curriculum`,
  });
}

export default async function AboutPage({ params }: { params: Params }) {
  const { locale } = await params; 
  const t = await getTranslations({ locale, namespace: "Curriculum" });
  const content = await getMDXContent(locale);

  return (
    <article className="w-full md:w-3/5 px-2 md:px-12">
      <MDXRemote source={content} components={MDXComponents} options={options} />
      <div className="my-8 flex justify-center ">
        <Button variant="outline" className="mx-auto">
          <Link
            href={`/pdf/CV-Victor-Philippe-${locale}.pdf`}
            locale={undefined}
            target="_blank"
            download
          >
            {t("downloadPdf")}
          </Link>
        </Button>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}
