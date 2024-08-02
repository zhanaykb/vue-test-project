import plugin from 'tailwindcss/plugin';

export default plugin(({ addComponents, theme }) => {
  addComponents({
    '.typography-title1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen md': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-title2': {
      fontSize: '14px',
      lineHeight: '16.41px',
      fontWeight: '400',
      '@screen md': {
        fontSize: '20px',
        lineHeight: '23.44px',
      },
    },
    '.typography-body1': {
      fontSize: '13px',
      lineHeight: '15.36px',
      '@screen md': {
        fontSize: '16px',
        lineHeight: '15.36px',
      },
    },
    '.typography-body2': {
      fontSize: '11px',
      lineHeight: '12.89px',
      '@screen md': {
        fontSize: '13px',
        lineHeight: '15.23px',
      },
    },
    '.typography-body3': {
      fontSize: '14px',
      lineHeight: '15.36px',
      '@screen md': {
        fontSize: '13px',
        lineHeight: '15.36px',
      },
    },
    '.typography-caption1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen md': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-input1': {
      fontSize: '14px',
      lineHeight: '16.41px',
      '@screen md': {
        fontSize: '16px',
        lineHeight: '18.75px',
      },
    },
    '.typography-sub1': {
      fontSize: '14px',
      lineHeight: '16.41px',
    },
    '.typography-button1': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen md': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
    '.typography-sub2': {
      fontSize: '18px',
      lineHeight: '19.8px',
      '@screen md': {
        fontSize: '36px',
        lineHeight: '42px',
      },
    },
  });
});