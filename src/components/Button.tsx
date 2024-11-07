const VARIANTS = {
  accent: 'bg-accent py-4 font-medium hover:bg-[#da2381]',
  secondary: 'mt-6 py-3 bg-[#8F45EF] hover:bg-[#8236e3] focus:outline-none'
}

interface ButtonProps {
  children: React.ReactNode
  variant?: keyof typeof VARIANTS
}

export default function Button({ children, variant = 'accent' }: ButtonProps) {
  return (
    <button className={`w-full rounded-lg text-white ${VARIANTS[variant]}`}>
      {children}
    </button>
  )
}
