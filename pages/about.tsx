import Link from "next/link";
import { DarkLayout } from "../components/Layout/DarkLayout";
import { MainLayout } from "../components/Layout/MainLayout";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
      <h1 className={"title"}>
        Ir a <Link href="/">Home</Link>
      </h1>
    </>
  );
}

About.getLayout = function getLayout(page: JSX.Element) {
  return (
    <MainLayout>
      <DarkLayout>{page}</DarkLayout>
    </MainLayout>
  );
};
