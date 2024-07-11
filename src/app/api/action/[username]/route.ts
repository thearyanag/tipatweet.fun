import { TipLink } from "@tiplink/api";
import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";
import satori from "satori";
import {
  Transaction,
  PublicKey,
  SystemProgram,
  Connection,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import {
  ActionPostResponse,
  ACTIONS_CORS_HEADERS,
  createPostResponse,
  ActionGetResponse,
  ActionPostRequest,
} from "@solana/actions";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const username = params.username;
  console.log(username);

  let response: ActionGetResponse = {
    icon: "https://tipatweet.fun/favicon.ico",
    title: "Tip a Tweet of " + username,
    description: "Tip a tweet of " + username,
    label: "Tip a Tweet",
    links: {
      actions: [
        {
          label: "Tip",
          href: `/api/action/${username}`,
        },
      ],
    },
  };

  return NextResponse.json(response, {
    headers: ACTIONS_CORS_HEADERS,
  });
}

// ensures cors
export const OPTIONS = GET;

export async function POST(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  try {
    const username = params.username;
    const body = (await req.json()) as { account: string };
    let link = await TipLink.create();

    const connection = new Connection(
      clusterApiUrl("mainnet-beta"),
      "confirmed"
    );

    const sender = new PublicKey(body.account);
    const reciever = link.keypair.publicKey.toBase58();

    const tx = new Transaction().add(
      SystemProgram.transfer({
        fromPubkey: sender,
        toPubkey: new PublicKey(reciever),
        lamports: LAMPORTS_PER_SOL * 0.001,
      })
    );

    tx.recentBlockhash = (await connection.getLatestBlockhash()).blockhash;
    tx.feePayer = sender;

    const payload = await createPostResponse({
      fields: {
        transaction: tx,
        message: "generate your own at tipatweet.fun",
      },
    });

    return NextResponse.json(payload, {
      headers: ACTIONS_CORS_HEADERS,
    });
  } catch (err) {
    console.log("Error in POST /api/action/%5Busername%5D", err);
    console.log(err);
    let message = "An unknown error occurred";
    if (typeof err == "string") message = err;
    return new Response(message, {
      status: 400,
      headers: ACTIONS_CORS_HEADERS,
    });
  }
}
