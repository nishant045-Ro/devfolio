import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { CornerDownLeft, TerminalSquare } from 'lucide-react'
import { site } from '../data/site'
import { projects } from '../data/projects'
import { useTypewriter } from '../hooks/useTypewriter'

const BANNER = `${site.firstName}'s Dev Terminal
---------------------------
Welcome! This is a working terminal. Type a command below.
Try: help, about, skills, projects, contact`

const COMMAND_MAP = {
  help: `Available commands:
  help       show this list
  about      learn about me
  education  my academic background
  skills     list my tech stack
  projects   show my projects
  socials    social & professional links
  focus      what I am working on right now
  whoami     who is running this terminal?
  contact    how to reach me
  clear      clear the terminal`,
  whoami: `${site.name}
${site.role}
${site.status}`,
  about: `I'm a Bachelor of Computer Applications (BCA) student passionate
about the web. I enjoy building full-stack applications, tinkering
with backend logic in PHP & Laravel, and writing interactive
frontends in JavaScript. I learn by building real projects.`,
  education: `BCA — Bachelor of Computer Applications
Current student, continuously building practical projects.`,
  skills: `Languages : JavaScript, PHP, Java
Frontend  : HTML5, CSS3, JavaScript
Backend   : PHP, Laravel
Database  : MySQL
Tools     : Git, GitHub, VS Code, Android Studio, XAMPP

Focusing on: Advanced JavaScript, Android Development,
Modern Web Development`,
  projects:
    projects.map((p) => `• ${p.title}  [${p.tech.join(', ')}]`).join('\n') +
    `\n\nTip: open the Projects section for full details.`,
  socials: `GitHub   : ${site.githubUrl}
LinkedIn : ${site.linkedinUrl}`,
  focus: 'Building projects & learning modern development 🚀',
  contact: `Email    : ${site.email}
GitHub   : ${site.githubUrl}
LinkedIn : ${site.linkedinUrl}
Open to internships & collaboration.`,
}

const SUGGESTIONS = ['help', 'whoami', 'skills', 'projects', 'socials', 'focus']

let lineId = 0
const nextId = () => ++lineId

function TypedOutput({ text, onDone, speed = 14 }) {
  const { value, done } = useTypewriter(text, { speed, startDelay: 120 })
  const reported = useRef(false)

  useEffect(() => {
    if (done && !reported.current) {
      reported.current = true
      onDone()
    }
  }, [done, onDone])

  return (
    <pre className="whitespace-pre-wrap font-mono text-[13px] leading-relaxed break-words text-emerald-300/90">
      {value}
      {!done && <span className="term-caret">▌</span>}
    </pre>
  )
}

export function Terminal() {
  const [history, setHistory] = useState([{ id: nextId(), type: 'output', text: BANNER }])
  const [input, setInput] = useState('')
  const [busy, setBusy] = useState(false)
  const inputRef = useRef(null)
  const boxRef = useRef(null)

  const focusInput = () => inputRef.current?.focus()

  useEffect(() => {
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: 'smooth' })
  }, [history])

  const addInput = (text) =>
    setHistory((h) => [...h, { id: nextId(), type: 'input', text }])

  const addOutput = (text) =>
    setHistory((h) => [...h, { id: nextId(), type: 'output', text }])

  const run = (raw) => {
    const cmd = raw.trim().toLowerCase()
    addInput(cmd)
    if (cmd === 'clear') {
      setHistory([])
      setBusy(false)
      return
    }
    const output = COMMAND_MAP[cmd]
    setBusy(true)
    addOutput(output === undefined ? `command not found: ${cmd}\nType 'help' to see available commands.` : output)
  }

  const onSubmit = () => {
    const cmd = input.trim()
    if (!cmd) return
    if (busy && cmd.toLowerCase() !== 'clear') return
    setInput('')
    run(cmd)
  }

  return (
    <div className="mx-auto w-full max-w-3xl">
      <div
        ref={boxRef}
        onClick={focusInput}
        className="overflow-hidden rounded-2xl border border-line bg-[#07070f] shadow-2xl"
        style={{ boxShadow: '0 30px 80px -20px rgba(139,92,246,0.25)' }}
        role="log"
        aria-label="Interactive terminal — click and type a command"
      >
        <div className="flex items-center justify-between border-b border-white/10 bg-white/5 px-4 py-2.5">
          <div className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-rose-500/80" />
            <span className="size-3 rounded-full bg-amber-400/80" />
            <span className="size-3 rounded-full bg-emerald-400/80" />
          </div>
          <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
            <TerminalSquare className="size-3.5" /> nishant@dev: ~/portfolio
          </div>
        </div>

        <div className="h-[26rem] overflow-y-auto px-4 py-4 font-mono text-sm sm:px-5">
          <div className="space-y-1.5">
            {history.map((line) =>
              line.type === 'input' ? (
                <p key={line.id} className="text-sky-300 break-words">
                  <span className="mr-2 text-emerald-400">➜</span>
                  <span className="mr-2 text-slate-100">~</span>
                  <span className="mr-1 text-slate-500">$</span>
                  {line.text}
                </p>
              ) : (
                <TypedOutput key={line.id} text={line.text} onDone={() => setBusy(false)} />
              ),
            )}

            <motion.div
              initial={{ opacity: 0.6 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-1.5"
            >
              <span className="shrink-0 text-emerald-400">➜</span>
              <span className="shrink-0 text-slate-500">$</span>
              <input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSubmit()}
                spellCheck={false}
                autoComplete="off"
                aria-label="Terminal input"
                className="w-full bg-transparent font-mono text-slate-100 caret-emerald-400 outline-none placeholder:text-slate-600"
                placeholder={busy ? '…' : 'type a command'}
              />
              {!busy && <span className="term-caret h-4 w-2 shrink-0 bg-emerald-400" />}
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        <span className="text-xs text-soft">Try:</span>
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => !busy && run(s)}
            className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-xs text-mut transition-all duration-200 hover:border-brand/50 hover:text-fg"
          >
            {s}
          </button>
        ))}
        <span className="ml-auto flex items-center gap-1 text-xs text-soft">
          <CornerDownLeft className="size-3.5" /> Press Enter
        </span>
      </div>
    </div>
  )
}

export default Terminal