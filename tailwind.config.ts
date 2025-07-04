import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'sans': ['"Helvetica Now Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
				'condensed': ['"Helvetica Now Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
				'mono': ['"Helvetica Now Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'monospace'],
				'helvetica': ['"Helvetica Now Pro Display"', '"Helvetica Neue"', 'Helvetica', 'Arial', 'sans-serif'],
			},
			fontWeight: {
				'normal': '700',
				'medium': '700',
				'semibold': '700',
				'bold': '700',
				'extrabold': '700',
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				// Cursor glow color
				cursor: {
					glow: '#FEF7CD' // Yellowish glow color
				}
			},
			letterSpacing: {
				'tighter': '-0.03em',
				'tight': '-0.02em',
				'normal': '-0.01em',
				'wide': '0.02em',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' }
				},
				'fade-out': {
					'0%': { opacity: '1', transform: 'translateY(0)' },
					'100%': { opacity: '0', transform: 'translateY(10px)' }
				},
				'scale-in': {
					'0%': { transform: 'scale(0.95)', opacity: '0' },
					'100%': { transform: 'scale(1)', opacity: '1' }
				},
				'scale-out': {
					from: { transform: 'scale(1)', opacity: '1' },
					to: { transform: 'scale(0.95)', opacity: '0' }
				},
				'slide-in': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'pulse-subtle': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.8' }
				},
				'blink': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.5' }
				},
				'glow-pulse': {
					'0%, 100%': { boxShadow: '0 0 15px 2px rgba(254, 240, 138, 0.6)' },
					'50%': { boxShadow: '0 0 25px 5px rgba(254, 240, 138, 0.8)' }
				},
				'ripple': {
					'0%': { boxShadow: '0 0 0 0 rgba(100, 200, 255, 0.7)', opacity: '1' },
					'100%': { boxShadow: '0 0 0 15px rgba(100, 200, 255, 0)', opacity: '0' }
				},
				'pulse-focus': {
					'0%': { boxShadow: '0 0 0 0 rgba(100, 200, 255, 0.5), inset 0 0 0 0 rgba(100, 200, 255, 0.4)' },
					'70%': { boxShadow: '0 0 0 10px rgba(100, 200, 255, 0), inset 0 0 0 3px rgba(100, 200, 255, 0.6)' },
					'100%': { boxShadow: '0 0 0 0 rgba(100, 200, 255, 0), inset 0 0 0 0 rgba(100, 200, 255, 0.2)' }
				},
				// New animations for holographic button
				'neonShift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				},
				'gridFade': {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '0.2' }
				},
				'gridSweep': {
					'0%': { backgroundPosition: '0 0', opacity: '0.3' },
					'100%': { backgroundPosition: '100% 100%', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.4s ease-out',
				'fade-out': 'fade-out 0.4s ease-out',
				'scale-in': 'scale-in 0.3s ease-out',
				'scale-out': 'scale-out 0.3s ease-out',
				'slide-in': 'slide-in 0.4s ease-out',
				'slide-out': 'slide-out 0.4s ease-out',
				'float': 'float 6s ease-in-out infinite',
				'pulse-subtle': 'pulse-subtle 3s ease-in-out infinite',
				'blink': 'blink 1s ease-in-out infinite',
				'glow-pulse': 'glow-pulse 2s infinite',
				'ripple': 'ripple 0.8s ease-out',
				'pulse-focus': 'pulse-focus 1.5s infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
