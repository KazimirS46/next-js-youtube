import { NextResponse } from 'next/server';
import { cookies, headers } from 'next/dist/client/components/headers';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  const headreList = headers();
  const type = headreList.get('Content-Type');

  const cookiesList = cookies();
  const coo1 = cookiesList.get('Cookie_1')?.value;

  // logic delete post

  return NextResponse.json({ id, type, coo1 });
}
