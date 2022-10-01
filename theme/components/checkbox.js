import { mode } from '@chakra-ui/theme-tools'

const Checkbox = {
	baseStyle: (props) => ({
		control: {
			transition: '.4s',
			_checked: {
				bg: 'brand.500',
				borderColor: 'brand.500',
				color: mode('white', 'white')(props),
				_hover: {
					bg: 'brand.500',
					borderColor: 'brand.500'
				}
			},
			_focus: {
				shadow: 'none'
			}
		}
	}),
	variants: {
		filled: (props) => ({
			control: {
				bg: mode('gray.50', '#2D374850')(props),
				borderColor: 'transparent',
				_hover: {
					bg: mode('gray.100', '#2D374875')(props)
				},
				_checked: {
					borderColor: 'transparent'
				}
			}
		}),
		outline: {
			control: {
				border: '1px solid',
				borderColor: 'border',
				_hover: {
					borderColor: 'border-focus'
				}
			}
		}
	},
	sizes: {
		sm: {
			control: {
				h: 3,
				w: 3
			},
			label: {
				fontSize: 'xs'
			}
		},
		md: {
			control: {
				h: 4,
				w: 4
			},
			label: {
				fontSize: 'sm'
			}
		},
		lg: {
			control: {
				h: 5,
				w: 5
			},
			label: {
				fontSize: 'md'
			}
		}
	},
	defaultProps: {
		variant: 'outline'
	}
}

export default Checkbox
