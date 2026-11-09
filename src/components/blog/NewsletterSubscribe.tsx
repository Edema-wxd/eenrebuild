'use client'

import { useState, FormEvent } from 'react'
import { Mail, CheckCircle, AlertCircle } from 'lucide-react'
import emailjs, { EMAIL_CONFIG, PUBLIC_KEY } from '@/utils/emailjs'

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
      // Notify the EEN team
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATES.NEWSLETTER,
        {
          subscriber_email: email,
          to_email: 'info@eenconsult.com.ng',
          from_name: email,
        },
        PUBLIC_KEY
      )

      // Send auto-response to subscriber
      await emailjs.send(
        EMAIL_CONFIG.SERVICE_ID,
        EMAIL_CONFIG.TEMPLATES.NEWSLETTER_WELCOME,
        {
          to_email: email,
          subscriber_email: email,
        },
        PUBLIC_KEY
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
              aria-label="Email address"
              className="w-full rounded-lg border border-[#C9D5DC] bg-white py-2.5 pl-10 pr-4 text-[15px] text-[#1E2A31] placeholder:text-[#6B7780] focus:border-[#0A6A94] focus:outline-none focus:ring-2 focus:ring-[#0A6A94]/20 disabled:bg-gray-100"
              required
            />
          </div>
          <button
            type="submit"
            disabled={status === 'loading'}
            className="shrink-0 rounded-lg bg-[#0A6A94] px-5 py-2.5 text-[15px] font-semibold text-white transition-[background-color,transform] duration-150 ease-out hover:bg-[#085879] active:scale-[0.97] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0A6A94] disabled:bg-gray-400"
          >
            {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {message && (
          <div
            className={`mt-2 flex items-center gap-2 text-sm ${
              status === 'success' ? 'text-green-700' : 'text-red-700'
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
