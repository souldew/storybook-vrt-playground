import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <div>
        このページはindexページです。他のページへのリンク集として機能しています。
      </div>
      <Link href="/about" className="text-blue-500">
        About Page
      </Link>
    </div>
  );
}
