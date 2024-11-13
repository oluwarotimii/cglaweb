import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (id) {
    const course = await prisma.course.findUnique({
      where: { id: parseInt(id) },
      include: { modules: true }
    })
    return NextResponse.json(course)
  } else {
    const courses = await prisma.course.findMany({
      include: { modules: true }
    })
    return NextResponse.json(courses)
  }
}

export async function POST(request: Request) {
  const body = await request.json()
  const { title, description, duration, level, modules } = body

  const newCourse = await prisma.course.create({
    data: {
      title,
      description,
      duration,
      level,
      modules: {
        create: modules
      }
    },
    include: { modules: true }
  })

  return NextResponse.json(newCourse, { status: 201 })
}

export async function PUT(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')
  const body = await request.json()
  const { title, description, duration, level, modules } = body

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  const updatedCourse = await prisma.course.update({
    where: { id: parseInt(id) },
    data: {
      title,
      description,
      duration,
      level,
      modules: {
        upsert: modules.map((module: any) => ({
          where: { id: module.id || 0 },
          update: { title: module.title, content: module.content },
          create: { title: module.title, content: module.content }
        }))
      }
    },
    include: { modules: true }
  })

  return NextResponse.json(updatedCourse)
}

export async function DELETE(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  if (!id) {
    return NextResponse.json({ error: 'Missing ID' }, { status: 400 })
  }

  await prisma.course.delete({
    where: { id: parseInt(id) }
  })

  return NextResponse.json({ message: 'Course deleted successfully' })
}