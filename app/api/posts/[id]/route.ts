import { NextResponse } from 'next/server';
import { headers } from 'next/dist/client/components/headers';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  const headreList = headers();
  const type = headreList.get('Content-Type');

  // logic delete post

  return NextResponse.json({ id, type });
}
