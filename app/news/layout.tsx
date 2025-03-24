import Hero from "@/app/_components/Hero";
import Sheet from "@/app/_components/Sheet";

type Props = {
  children: React.ReactNode;
};

// キャッシュの保持期間を60秒に設定(ISR)
export const revalidate = 60;

export default function NewsLayout({ children }: Props) {
  return (
    <>
     <Hero title="News" sub="ニュース" />
     <Sheet>{children}</Sheet>
    </>
  )
}