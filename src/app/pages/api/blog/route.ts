import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const post = await prisma.blogPost.findUnique({
      where: { id: parseInt(id) }
    })
    return NextResponse.json(post)
  } else {
    const posts = await prisma.blogPost.findMany()
    return NextResponse.json(posts)
  }
}

export async function POST(request: Request) {
  const body = await request.json()
  const { title, content, authorId } = body

  const newPost = await prisma.blogPost.create({
    data: {
      title,
      content,
      authorId
    }
  })

  return NextResponse.json(newPost, { status: 201 })
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const body = await request.json()
  const { title, content } = body

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  const updatedPost = await prisma.blogPost.update({
    where: { id: parseInt(id) },
    data: { title, content }
  })

  return NextResponse.json(updatedPost)
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  await prisma.blogPost.delete({
    where: { id: parseInt(id) }
  })

  return NextResponse.json({ message: 'Post deleted successfully' })
}