import { useState } from 'react'
import { motion } from 'framer-motion'
import { AtSign, Mail, MapPin, Send } from 'lucide-react'
import SectionHeading from '../components/SectionHeading'
import SocialLinks from '../components/SocialLinks'
import { useToast } from '../components/Toast'
import { site } from '../data/site'
import { socialLinks } from '../data/socialLinks'
import { LinkedInIcon } from '../components/icons/BrandIcons'
import { cn } from '../utils/helpers'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

const FIELDS = [
  { name: 'name', label: 'Name', type: 'text', placeholder: 'Your name', validate: (v) => (v.trim().length < 2 ? 'Please enter your name.' : '') },
  { name: 'email', label: 'Email', type: 'email', placeholder: 'you@example.com', validate: (v) => (EMAIL_RE.test(v.trim()) ? '' : 'Please enter a valid email address.') },
  { name: 'subject', label: 'Subject', type: 'text', placeholder: 'What is this about?', validate: (v) => (v.trim().length < 3 ? 'Subject must be at least 3 characters.' : '') },
  { name: 'message', label: 'Message', type: 'textarea', placeholder: 'Tell me about your project or opportunity…', validate: (v) => (v.trim().length < 10 ? 'Message must be at least 10 characters.' : '') },
]

const INFO = [
  { icon: Mail, label: 'Email', value: site.email, href: `mailto:${site.email}` },
  { icon: AtSign, label: 'GitHub', value: '@' + site.githubUsername, href: site.githubUrl },
  { icon: LinkedInIcon, label: 'LinkedIn', value: site.name, href: site.linkedinUrl },
  { icon: MapPin, label: 'Location', value: site.location },
]

function Field({ field, value, error, touched, onChange, onBlur }) {
  const base =
    'w-full rounded-xl border bg-elev px-4 py-3 text-sm text-fg placeholder:text-soft outline-none transition-all duration-300'
  const state = error && touched
    ? 'border-rose-500/60 focus:border-rose-400 focus:ring-2 focus:ring-rose-500/20'
    : 'border-line focus:border-brand/60 focus:ring-2 focus:ring-brand/20'

  return (
    <div>
      <label htmlFor={field.name} className="mb-1.5 block text-sm font-medium text-fg">
        {field.label} <span className="text-rose-400">*</span>
      </label>
      {field.type === 'textarea' ? (
        <textarea
          id={field.name}
          rows={5}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          className={cn(base, state, 'resize-none')}
        />
      ) : (
        <input
          id={field.name}
          type={field.type}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          placeholder={field.placeholder}
          className={cn(base, state)}
        />
      )}
      {error && touched && (
        <motion.p
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400"
        >
          {error}
        </motion.p>
      )}
    </div>
  )
}

export function Contact() {
  const { toast } = useToast()
  const [values, setValues] = useState({ name: '', email: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [submitting, setSubmitting] = useState(false)

  const setValue = (name) => (e) => {
    const v = e.target.value
    setValues((prev) => ({ ...prev, [name]: v }))
    const field = FIELDS.find((f) => f.name === name)
    if (field) setErrors((prev) => ({ ...prev, [name]: field.validate(v) }))
  }

  const markTouched = (name) => () =>
    setTouched((prev) => ({ ...prev, [name]: true }))

  const onSubmit = (e) => {
    e.preventDefault()
    const nextErrors = {}
    FIELDS.forEach((f) => {
      const err = f.validate(values[f.name] || '')
      if (err) nextErrors[f.name] = err
    })
    setErrors(nextErrors)
    setTouched({ name: true, email: true, subject: true, message: true })

    if (Object.keys(nextErrors).length > 0) {
      toast('Please fix the highlighted fields.', 'error')
      return
    }

    setSubmitting(true)
    const subject = encodeURIComponent(values.subject)
    const body = encodeURIComponent(
      `Hi ${site.firstName},\n\n${values.message}\n\n— ${values.name}\n${values.email}`,
    )
    setTimeout(() => {
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`
      setSubmitting(false)
      toast('Message ready — your email app is opening!', 'success')
    }, 600)
  }

  return (
    <section id="contact" className="relative py-20 lg:py-28">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -left-32 top-1/4 size-80 rounded-full bg-brand/10 blur-3xl" />
        <div className="absolute -right-32 bottom-10 size-80 rounded-full bg-pink-400/8 blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something together"
          description="Have an opportunity, a project idea, or just want to say hi? My inbox is always open."
        />

        <div className="grid gap-8 lg:grid-cols-5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-lg font-semibold text-fg">Contact info</h3>
              <p className="mt-1.5 text-sm text-mut">
                Reach me directly through any channel below — I usually reply within a day.
              </p>

              <div className="mt-6 space-y-2.5">
                {INFO.map((item) => {
                  const Icon = item.icon
                  const inner = (
                    <>
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-brand/10 text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon size={17} />
                      </span>
                      <span className="min-w-0">
                        <span className="block text-xs text-soft">{item.label}</span>
                        <span className="block truncate text-sm font-medium text-fg">{item.value}</span>
                      </span>
                    </>
                  )
                  return item.href ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="group flex items-center gap-3 rounded-xl border border-line bg-elev p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand/50"
                    >
                      {inner}
                    </a>
                  ) : (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-xl border border-line bg-elev p-3"
                    >
                      {inner}
                    </div>
                  )
                })}
              </div>

              <div className="mt-6 border-t border-line pt-5">
                <p className="mb-3 text-xs font-medium tracking-widest text-soft uppercase">
                  Social profiles
                </p>
                <SocialLinks links={socialLinks} size="md" />
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={onSubmit}
            noValidate
            className="glass rounded-2xl p-6 lg:col-span-3"
          >
            <div className="grid gap-4">
              {FIELDS.map((field) => (
                <Field
                  key={field.name}
                  field={field}
                  value={values[field.name]}
                  error={errors[field.name]}
                  touched={touched[field.name]}
                  onChange={setValue(field.name)}
                  onBlur={markTouched(field.name)}
                />
              ))}
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand to-sky-500 px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:brightness-110 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              <Send className="size-4" />
              {submitting ? 'Preparing…' : 'Send Message'}
            </button>

            <p className="mt-4 text-xs leading-relaxed text-soft">
              This form validates your input and opens your email app with the message ready to send
              — no backend required yet.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact