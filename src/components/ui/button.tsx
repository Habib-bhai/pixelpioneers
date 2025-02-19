interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'default' | 'outline'
    size?: 'default' | 'sm' | 'lg'
    children: React.ReactNode
    className?: string
  }
  
  export function Button({
    variant = 'default',
    size = 'default',
    className = '',
    children,
    ...props
  }: ButtonProps) {
    const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500 disabled:pointer-events-none disabled:opacity-50'
    
    const variants = {
      default: 'bg-emerald-500 text-white hover:bg-emerald-600',
      outline: 'border-2 border-emerald-500 text-emerald-500 hover:bg-emerald-500 hover:text-white'
    }
    
    const sizes = {
      default: 'h-10 px-4 py-2',
      sm: 'h-8 px-3 text-sm',
      lg: 'h-12 px-6 text-lg'
    }
    
    return (
      <button
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
  