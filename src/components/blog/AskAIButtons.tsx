import { SiClaude, SiGoogle, SiOpenai, SiPerplexity } from 'react-icons/si'
import type { IconType } from 'react-icons'

interface AskAIButtonsProps {
  url: string
}

interface AIAssistant {
  name: string
  icon: IconType
  // Builds a link that opens the assistant with the prompt pre-filled
  href: (prompt: string) => string
}

const assistants: AIAssistant[] = [
  {
    name: 'ChatGPT',
    icon: SiOpenai,
    href: (prompt) => `https://chatgpt.com/?hints=search&q=${encodeURIComponent(prompt)}`,
  },
  {
    name: 'Google AI',
    icon: SiGoogle,
    // udm=50 opens Google Search in AI Mode
    href: (prompt) => `https://www.google.com/search?udm=50&q=${encodeURIComponent(prompt)}`,
  },
  {
    name: 'Perplexity',
    icon: SiPerplexity,
    href: (prompt) => `https://www.perplexity.ai/search?q=${encodeURIComponent(prompt)}`,
  },
  {
    name: 'Claude',
    icon: SiClaude,
    href: (prompt) => `https://claude.ai/new?q=${encodeURIComponent(prompt)}`,
  },
]

export default function AskAIButtons({ url }: AskAIButtonsProps) {
  const prompt = `Summarize the key takeaways of this article from EEN Consulting and explain what they mean for a home or business in Nigeria: ${url}`

  const buttonClass =
    'flex items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-gray-50 hover:border-gray-400'

  return (
    <div className="flex flex-wrap items-center gap-3">
      <span className="text-sm font-semibold text-gray-700">Ask AI:</span>

      {assistants.map(({ name, icon: Icon, href }) => (
        <a
          key={name}
          href={href(prompt)}
          target="_blank"
          rel="noopener noreferrer"
          className={buttonClass}
          aria-label={`Summarize this article with ${name}`}
        >
          <Icon className="h-4 w-4" aria-hidden="true" />
          <span className="hidden sm:inline">{name}</span>
        </a>
      ))}
    </div>
  )
}
