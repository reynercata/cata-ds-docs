import { useState, useCallback } from 'react'
import { Clipboard, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language?: string
}

export function CodeBlock({ code, language }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [code])

  return (
    <div className="relative">
      <pre className="bg-[#1E1E1E] text-[#E5E5E5] rounded-xl p-4 overflow-x-auto font-mono text-sm">
        <code data-language={language}>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 text-muted-foreground hover:text-white transition cursor-pointer"
        aria-label="Copy code"
      >
        {copied ? <Check className="size-4" /> : <Clipboard className="size-4" />}
      </button>
    </div>
  )
}
