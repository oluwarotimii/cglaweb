'use client'

import { useState } from 'react'
import { Button } from '../../components/ui/button'
import { Input } from '../../components/ui/input'
import { Textarea } from '../../components/ui/textarea'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../../components/ui/accordion'

const faqs = [
  {
    question: "How do I access my courses?",
    answer: "After enrolling, you can access your courses through your dashboard. Simply log in and click on the course you want to start or continue."
  },
  {
    question: "What do I need to start learning?",
    answer: "You'll need a computer with internet access and a Google account to use Google Colab for our Python-based courses. For other courses, specific requirements will be listed on the course page."
  },
  {
    question: "How long do I have access to a course?",
    answer: "Once enrolled, you have lifetime access to the course materials, allowing you to learn at your own pace and revisit content as needed."
  },
  {
    question: "Are there any prerequisites for the courses?",
    answer: "Prerequisites vary by course. Check the course description for specific requirements. Many of our beginner courses don't require prior experience."
  },
  {
    question: "How do I get help if I'm stuck?",
    answer: "We offer support through our community forums, where you can ask questions and get help from instructors and fellow students. For technical issues, you can contact our support team directly."
  }
]

export default function SupportPage() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', { name, email, message })
    // Reset form fields
    setName('')
    setEmail('')
    setMessage('')
    // Show a success message to the user
    alert('Your message has been sent. We will get back to you soon!')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Support</h1>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <Input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <Input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <Textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Send Message</Button>
          </form>
        </div>
      </div>
    </div>
  )
}