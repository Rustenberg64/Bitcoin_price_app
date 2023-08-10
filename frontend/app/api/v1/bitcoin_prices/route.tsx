import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const url = new URL(request.url);
  url.host = "backend:3000";
  // クエリパラメータを取得
  // const { searchParams } = new URL(request.url)
  // const place = searchParams.get('place')
  // const from = searchParams.get('from')
  // const to = searchParams.get('to')
  // const interval = url.searchParams.get('interval')
  // to,fromにはタイムゾーンの情報が含まれており+,-の記号があるので％エンコードする
  // const url = `http://backend:3000/api/v1/bitcoin_prices?place=${place}&from=${from}&to=${to}&interval=${interval}`.replaceAll('+', '%2B')

  const res = await fetch(url, {
    next: { revalidate: 60 }, // Revalidate every 60 seconds
  })
  const data = await res.json()

  return NextResponse.json(data)
}