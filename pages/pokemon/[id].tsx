/* eslint-disable @next/next/no-img-element */
import React from "react";
import Head from "next/head";

import { Pokemon } from "../../interfaces/pokemon";
import { Layout } from "../../components/Layout";
import { fixedName } from "../../helpers/fixedName";
import PokemonDetails from "../../components/PokemonDetails";
import NavigationButtons from "../../components/NavigationButtons";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const MAX_POKEMON_ID = 809;

const PokemonPage = (props: Pokemon) => {
  const { id, name } = props;

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Card className="max-w-[50em] m-auto">
        <CardHeader>
          <CardTitle className="scroll-m-20 text-4xl items-center">{name}</CardTitle>
        </CardHeader>
        <CardContent>
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <Image src={`/images/${fixedName(id, name)}`} alt={name} fill className="h-full w-full rounded-md object-contain" />
          </AspectRatio>
          <PokemonDetails {...props} />
        </CardContent>
        <CardFooter>
          <NavigationButtons id={id} maxId={MAX_POKEMON_ID} />
        </CardFooter>
      </Card>
    </>
  );
};

PokemonPage.getLayout = Layout;

export async function getServerSideProps({ params: { id } }: { params: { id: string } }) {
  try {
    const response = await fetch(`http://localhost:3000/api/pokemon/${id}`);
    if (!response.ok) {
      return { notFound: true };
    }
    const pokemon = await response.json();
    return { props: pokemon };
  } catch (error) {
    return {
      notFound: true,
    };
  }
}

export default PokemonPage;
