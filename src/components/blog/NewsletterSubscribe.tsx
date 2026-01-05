'use client'

import { useState, FormEvent } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface NewsletterSubscribeProps {
  variant?: 'inline' | 'card'
  className?: string
}

export default function NewsletterSubscribe({
  variant = 'card',
  className = '',
}: NewsletterSubscribeProps) {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Validation
    if (!email || !email.includes('@')) {
      setStatus('error')
      setMessage('Please enter a valid email address')
      return
    }

    setStatus('loading')
    setMessage('')

    try {
      // Send to EmailJS
      await emailjs.send(
        'service_oeq5w9r', // Your EmailJS service ID
        'template_newsletter', // Newsletter template (you'll create this)
        {
          subscriber_email: email,
          to_email: 'info@eenconsulting.ng', // Your email to receive notifications
          from_name: email,
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      )

      // Send auto-response to subscriber
      await emailjs.send(
        'service_oeq5w9r',
        'template_newsletter_welcome', // Welcome email template
        {
          to_email: email,
          subscriber_email: email,
        },
        'YOUR_PUBLIC_KEY'
      )

      setStatus('success')
      setMessage('Thank you for subscribing! Check your email for confirmation.')
      setEmail('')

      // Reset after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (error) {
      console.error('Newsletter subscription error:', error)
      setStatus('error')
      setMessage('Oops! Something went wrong. Please try again.')

      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    }
  }

  if (variant === 'inline') {
    return (
      <form onSubmit={handleSubmit} className={`w-full max-w-md ${className}`}>
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              disabled={status === 'loading'}
              className="w-full rounded-lg border border-gray-300 py-2 pl-10 pr-4 focus:border-[#1AA3DD] focus:outline-none focus:ring-2 focus:ring-[#1AA3DD]/20 disabled:bg-gray-100"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="rounded-lg bg-[#1AA3DD] px-6 py-2 font-semibold text-white transition-colors hover:bg-[#1AA3DD]/90 disabled:bg-gray-400"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {message && (
          <div
            className={`mt-2 flex items-center gap-2 text-sm ${
              status === 'success' ? 'text-green-600' : 'text-red-600'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <span>{message}</span>
          </div>
        )}
      </form>
    )
  }

  return (
    <div className={`rounded-xl border border-gray-200 bg-white p-6 shadow-sm ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#1AA3DD]/10">
          <Mail className="h-6 w-6 text-[#1AA3DD]" />
        </div>
        <div>
          <h3 className="text-lg font-bold text-gray-900">Subscribe to Our Newsletter</h3>
          <p className="text-sm text-gray-600">Get sustainability insights delivered to your inbox</p>
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            disabled={status === 'loading'}
            className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:border-[#1AA3DD] focus:outline-none focus:ring-2 focus:ring-[#1AA3DD]/20 disabled:bg-gray-100"
            required
          />
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full rounded-lg bg-[#1AA3DD] px-4 py-2 font-semibold text-white transition-colors hover:bg-[#1AA3DD]/90 disabled:bg-gray-400"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>

        {message && (
          <div
            className={`mt-3 flex items-center gap-2 rounded-lg p-3 text-sm ${
              status === 'success'
                ? 'bg-green-50 text-green-700'
                : 'bg-red-50 text-red-700'
            }`}
          >
            {status === 'success' ? (
              <CheckCircle className="h-4 w-4" />
            ) : (
              <AlertCircle className="h-4 w-4" />
            )}
            <span>{message}</span>
          </div>
        )}

        <p className="mt-3 text-xs text-gray-500">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </form>
    </div>
  )
}
