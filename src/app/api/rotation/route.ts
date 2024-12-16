import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.RIOT_API_KEY;
  const endpoint =
    "https://kr.api.riotgames.com/lol/platform/v3/champion-rotations";

  if (!apiKey || !endpoint) {
    return NextResponse.json({ error: " API key / endpoint 사라짐!!" });
  }

  try {
    const response = await fetch(endpoint, {
      headers: { "X-Riot-Token": apiKey },
    });

    if (!response.ok) {
      return NextResponse.json({
        error: `데이터 fetch에 실패! ${response.status}`,
      });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "오류! 오류! (예상치 못함!)" });
  }
}