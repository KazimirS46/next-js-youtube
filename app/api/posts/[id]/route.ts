import { NextResponse } from 'next/server';
import { redirect } from 'next/navigation';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  const id = params.id;

  // logic delete post

  redirect('/blog');
}
