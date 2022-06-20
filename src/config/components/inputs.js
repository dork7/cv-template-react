export const ExtendedInputs = {
  baseStyle: {
    field: {
      border: '3px solid',
      borderColor: '#130080',
      borderRadius: '0px',
      _focus: {
        borderColor: '#9280ff',
        boxShadow: 'none',
      },
    },
  },

  sizes: {
    sm: {
      field: {},
    },

    md: {
      field: {},
    },

    lg: {
      field: {},
    },
  },

  variants: {
    outline: {
      field: {
        border: '1px solid',
        _focus: {
          borderColor: '#9280FF',
          boxShadow: 'none',
        },
      },
    },

    authField: {
      field: {
        border: '1px solid',
        borderColor: '#000',
        borderRadius: '0px',
        color: 'black',
        _focus: {
          borderColor: 'black',
          boxShadow: 'none',
        },
        _invalid: {
          border: '2px solid',
          borderColor: '#FF4500',
        },
      },
    },
  },
};
