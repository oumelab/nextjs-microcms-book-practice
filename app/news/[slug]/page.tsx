import { notFound } from "next/navigation";
import {getNewsDetail} from "@/app/_libs/microcms";
import Article from "@/app/_components/Article";
import ButtonLink from "@/app/_components/ButtonLink";
import styles from "./page.module.css";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

// export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
export default async function Page({params}: Props) {
  // const slug = (await params).slug;
  const {slug} = await params;
  const data = await getNewsDetail(slug).catch(notFound);

  return (
    <>
      <Article data={data} />
      <div className={styles.footer}>
        <ButtonLink href="/news">ニュース一覧へ</ButtonLink>
      </div>
    </>
  );
}
