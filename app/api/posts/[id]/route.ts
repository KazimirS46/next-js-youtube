import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  // logic delete post

  return NextResponse.json({ id });
}
