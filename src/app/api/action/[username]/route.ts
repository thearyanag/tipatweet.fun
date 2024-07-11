import { TipLink } from "@tiplink/api";
import { NextRequest, NextResponse } from "next/server";
import { ReactNode } from "react";
import satori from "satori";
import prisma from "@/prisma";
import {
  Transaction,
  PublicKey,
  SystemProgram,
  Connection,
  clusterApiUrl,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";
import {
  ACTIONS_CORS_HEADERS,
  createPostResponse,
  ActionGetResponse,
} from "@solana/actions";
import { useSearchParams } from "next/navigation";

export async function GET(
  req: NextRequest,
  { params }: { params: { username: string } }
) {
  const username = params.username;

  let response: ActionGetResponse = {
    icon: "https://tipatweet.fun/icon-transparent.png",
    title: "Tip a Tweet of " + username,
    description: "Tip a tweet of " + username,
    label: "Tip a Tweet",
    error: {
      message: "An unknown error occurred",
    },
    links: {
      actions: [
        {
          label: "Tip 0.001 SOL",
          href: `/api/action/${username}?amount=0.001`,
        },
        {
          label: "Tip 0.01 SOL",
          href: `/api/action/${username}?amount=0.01`,
        },
        {
          label: "Tip 0.1 SOL",
          href: `/api/action/${username}?amount=0.1`,
        },
        {
          label: "Tip 1 SOL",
          href: `/api/action/${username}?amount=1`,
        },
        {
          label: "Tip X", // button text
          href: "/api/action/${username}?amount={amount}",
          parameters: [
            {
              name: "amount", // field name
              label: "Enter a custom SOL amount", // text input placeholder
            },
          ],
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

    const { searchParams } = new URL(req.url);
    const amount = searchParams.get("amount") as string;
    console.log("Amount: ", amount);

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
        lamports: LAMPORTS_PER_SOL * parseFloat(amount),
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

    await prisma.links.create({
      data: {
        sub: username,
        url: link.url.toString(),
        amount: 0.001,
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
