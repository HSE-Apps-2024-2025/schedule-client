import { extendTheme, defineStyle, defineStyleConfig } from '@chakra-ui/react'

const fallTheme = extendTheme({
  config: {},
  semanticTokens: {
    colors: {
      // accent semantic tokens
      accent: { default: 'orange.500', _dark: 'orange.300' },
      'accent-emphasis': { default: 'orange.700', _dark: 'orange.200' },
      'accent-static': 'orange.500',
      'accent-muted': { default: 'orange.300', _dark: 'orange.200' },
      'accent-subtle': { default: 'orange.50', _dark: 'orange.800' },
      // foreground semantic tokens
      fg: { default: 'orange.700', _dark: 'orange.100' },
      'fg-emphasis': { default: 'orange.900', _dark: 'orange.200' },
      'fg-muted': { default: 'orange.600', _dark: 'orange.400' },
      'fg-subtle': { default: 'orange.500', _dark: 'orange.300' },
      'fg-on-accent': { default: 'orange', _dark: 'inherit' },
      // background semantic tokens
      bg: { default: 'orange.50', _dark: 'orange.900' },
      'bg-subtle': { default: 'orange.100', _dark: 'orange.800' },
      'bg-muted': { default: 'orange.200', _dark: 'orange.700' },
      'bg-emphasis': { default: 'orange.300', _dark: 'orange.600' },
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  styles: {
    global: {
      body: {
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
        color: 'fg',
        '.deleted': {
          color: '#ff8383 !important',
          fontStyle: 'normal !important',
        },
        '.inserted': {
          color: '#b5f4a5 !important',
          fontStyle: 'normal !important',
        },
      },
    },
  },
  textStyles: {
    heading: {
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '2rem', md: '3.5rem' },
    },
    'heading-2': {
      fontFamily: 'heading',
      textAlign: 'center',
      fontWeight: 'bold',
      letterSpacing: '-0.015em',
      lineHeight: '1.24',
      fontSize: { base: '1.75rem', md: '2.75rem' },
    },
    caps: {
      textTransform: 'uppercase',
      fontSize: 'sm',
      letterSpacing: 'widest',
      fontWeight: 'bold',
    },
  },
  mdx: {
    h1: {
      mt: '2rem',
      mb: '.25rem',
      lineHeight: 1.2,
      fontWeight: 'bold',
      fontSize: '1.875rem',
      letterSpacing: '-.025em',
    },
    h2: {
      mt: '4rem',
      mb: '0.5rem',
      lineHeight: 1.3,
      fontWeight: 'semibold',
      fontSize: '1.5rem',
      letterSpacing: '-.025em',
      '& + h3': {
        mt: '1.5rem',
      },
    },
    h3: {
      mt: '3rem',
      lineHeight: 1.25,
      fontWeight: 'semibold',
      fontSize: '1.25rem',
      letterSpacing: '-.025em',
    },
    h4: {
      mt: '3rem',
      lineHeight: 1.375,
      fontWeight: 'semibold',
      fontSize: '1.125rem',
    },
    a: {
      color: 'accent',
      fontWeight: 'semibold',
      transition: 'color 0.15s',
      transitionTimingFunction: 'ease-out',
      _hover: {
        color: 'accent-emphasis',
      },
    },
    p: {
      mt: '1.25rem',
      lineHeight: 1.7,
      'blockquote &': {
        mt: 0,
      },
    },
    hr: {
      my: '4rem',
    },
    blockquote: {
      bg: 'orange.100',
      borderWidth: '1px',
      borderColor: 'orange.200',
      rounded: 'lg',
      px: '1.25rem',
      py: '1rem',
      my: '1.5rem',
    },
    ul: {
      mt: '0.5rem',
      ml: '1.25rem',
      'blockquote &': { mt: 0 },
      '& > * + *': {
        mt: '0.25rem',
      },
    },
    code: {
      rounded: 'sm',
      px: '1',
      fontSize: '0.875em',
      py: '2px',
      lineHeight: 'normal',
    },
    button: {
      fontWeight: 'semibold',
      rounded: 'sm',
      bg: 'accent',
      color: 'fg-on-accent',
      _hover: {
        bg: 'accent-emphasis',
      },
    },
  },
})

export default fallTheme