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
				// DNA Theme Colors
				'neon-blue': 'hsl(var(--neon-blue))',
				'neon-purple': 'hsl(var(--neon-purple))',
				'neon-pink': 'hsl(var(--neon-pink))',
				'neon-cyan': 'hsl(var(--neon-cyan))',
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-secondary': 'var(--gradient-secondary)',
				'gradient-accent': 'var(--gradient-accent)',
				'gradient-glow': 'var(--gradient-glow)',
			},
			boxShadow: {
				'glow-sm': 'var(--glow-sm)',
				'glow-md': 'var(--glow-md)',
				'glow-lg': 'var(--glow-lg)',
				'glow-xl': 'var(--glow-xl)',
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
				'dna-rotate': {
					from: { transform: 'rotateY(0deg)' },
					to: { transform: 'rotateY(360deg)' }
				},
				'dna-flow': {
					'0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
					'25%': { transform: 'translateY(-10px) rotate(90deg)' },
					'50%': { transform: 'translateY(0px) rotate(180deg)' },
					'75%': { transform: 'translateY(10px) rotate(270deg)' }
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-20px)' }
				},
				'particle-float': {
					'0%': { transform: 'translateY(100vh) translateX(0px) rotate(0deg)', opacity: '0' },
					'10%': { opacity: '1' },
					'90%': { opacity: '1' },
					'100%': { transform: 'translateY(-100vh) translateX(200px) rotate(360deg)', opacity: '0' }
				},
				'pulse-glow': {
					'0%, 100%': { boxShadow: '0 0 5px hsl(var(--neon-purple) / 0.5)' },
					'50%': { boxShadow: '0 0 20px hsl(var(--neon-purple) / 0.8), 0 0 30px hsl(var(--neon-blue) / 0.5)' }
				},
				'gradient-shift': {
					'0%': { backgroundPosition: '0% 50%' },
					'50%': { backgroundPosition: '100% 50%' },
					'100%': { backgroundPosition: '0% 50%' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'dna-rotate': 'dna-rotate 20s linear infinite',
				'dna-flow': 'dna-flow 8s ease-in-out infinite',
				'float': 'float 6s ease-in-out infinite',
				'particle-float': 'particle-float 15s linear infinite',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 8s ease infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
