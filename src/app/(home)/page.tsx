import NotFound from "@/src/components/_pages/not-found";
import { AppPlugaResponse } from "@/src/app/(home)/types/apps-pluga-response";
import HomeClient from "@/src/app/(home)/_components/home-client";

export default async function Home() {
  const response = await fetch('https://pluga.co/ferramentas_search.json');

  if(!response.ok) return <NotFound message="Não foi possível encontrar os apps integrados à Pluga, por favor tente novamente mais tarde" />

  const apps: AppPlugaResponse[]  = await response.json();

  return <HomeClient apps={apps} />
}
