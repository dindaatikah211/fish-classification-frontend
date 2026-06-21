import { notFound } from "next/navigation";
import { FISH_SPECIES } from "@/features/landing/constants/FishSpecies";
import { FishDetailLayout } from "@/features/landing/components/FishDetailLayout";

interface FishDetailPageProps {
  params: Promise<{ id: string }>;
}

export default async function FishDetailPage({ params }: FishDetailPageProps) {
  const { id } = await params;
  const fish = FISH_SPECIES.find((item) => item.id === id);

  if (!fish) {
    notFound();
  }

  return <FishDetailLayout fish={fish} />;
}

export function generateStaticParams() {
  return FISH_SPECIES.map((fish) => ({ id: fish.id }));
}