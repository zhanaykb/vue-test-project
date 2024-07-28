import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents, theme }) => {
  addComponents({
    '.typography-title1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-title2': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-body1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-body2': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-caption1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-input1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-sub1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-button1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-sub2': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen lg': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
  });
});