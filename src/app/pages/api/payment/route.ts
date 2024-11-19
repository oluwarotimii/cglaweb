// import { NextResponse } from 'next/server'
// import { PrismaClient } from '@prisma/client'
// import https from 'https'

// const prisma = new PrismaClient()

// // This would typically come from an environment variable
// const PAYSTACK_SECRET_KEY = 'your_paystack_secret_key_here'

// interface PaystackResponse {
//   status: boolean
//   message: string
//   data: {
//     authorization_url: string
//     access_code: string
//     reference: string
//   }
// }

// function initializePaystackTransaction(email: string, amount: number): Promise<PaystackResponse> {
//   return new Promise((resolve, reject) => {
//     const params = JSON.stringify({
//       email: email,
//       amount: amount * 100, // Paystack expects amount in kobo
//     })

//     const options = {
//       hostname: 'api.paystack.co',
//       port: 443,
//       path: '/transaction/initialize',
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${PAYSTACK_SECRET_KEY}`,
//         'Content-Type': 'application/json',
//       },
//     }

//     const req = https.request(options, (res) => {
//       let data = ''

//       res.on('data', (chunk) => {
//         data += chunk
//       })

//       res.on('end', () => {
//         resolve(JSON.parse(data))
//       })
//     }).on('error', (error) => {
//       reject(error)
//     })

//     req.write(params)
//     req.end()
//   })
// }

// export async function POST(request: Request) {
//   const body = await request.json()
//   const { userId, courseId, amount } = body

//   try {
//     // Fetch user email
//     const user = await prisma.user.findUnique({
//       where: { id: userId },
//       select: { email: true }
//     })

//     if (!user) {
//       return NextResponse.json({ error: 'User not found' }, { status: 404 })
//     }

//     // Initialize Paystack transaction
//     const paystackResponse = await initializePaystackTransaction(user.email, amount)

//     if (!paystackResponse.status) {
//       return NextResponse.json({ error: 'Failed to initialize payment' }, { status: 500 })
//     }

//     // Create a new payment record
//     const payment = await prisma.payment.create({
//       data: {
//         userId,
//         courseId,
//         amount,
//         status: 'PENDING',
//         paystackReference: paystackResponse.data.reference,
//       }
//     })

//     return NextResponse.json({
//       paymentId: payment.id,
//       authorizationUrl: paystackResponse.data.authorization_url,
//     })

//   } catch (error) {
//     console.error('Payment initialization error:', error)
//     return NextResponse.json({ error: 'An error occurred while processing the payment' }, { status: 500 })
//   }
// }

// export async function GET(request: Request) {
//   const { searchParams } = new URL(request.url)
//   const reference = searchParams.get('reference')

//   if (!reference) {
//     return NextResponse.json({ error: 'Missing reference' }, { status: 400 })
//   }

//   try {
//     const payment = await prisma.payment.findFirst({
//       where: { paystackReference: reference }
//     })

//     if (!payment) {
//       return NextResponse.json({ error: 'Payment not found' }, { status: 404 })
//     }

//     // Here you would typically verify the payment status with Paystack
//     // For this example, we'll just update the status to 'COMPLETED'
//     const updatedPayment = await prisma.payment.update({
//       where: { id: payment.id },
//       data: { status: 'COMPLETED' }
//     })

//     // Enroll the user in the course
//     await prisma.enrollment.create({
//       data: {
//         userId: payment.userId,
//         courseId: payment.courseId,
//         status: 'ACTIVE'
//       }
//     })

//     return NextResponse.json({ message: 'Payment verified and enrollment created', payment: updatedPayment })

//   } catch (error) {
//     console.error('Payment verification error:', error)
//     return NextResponse.json({ error: 'An error occurred while verifying the payment' }, { status: 500 })
//   }
// }