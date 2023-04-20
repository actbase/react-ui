import React from 'react';
import UI, { css } from '../components';

export default {
  color: {
    primary: '#029cfd',
    danger: '#ee0000',
    text: '#333333',
  },
  global: {
    styles: UI.styles.reset,
  },
  components: {
    alert: {
      template: ({ title, children, onDestroy }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const ref = React.useRef<HTMLDivElement | null>(null);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [closing, setClosing] = React.useState<boolean>(false);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const timerRef = React.useRef<NodeJS.Timer>();
        function handleDestroy() {
          setClosing(true);
          timerRef.current = setTimeout(() => {
            onDestroy();
          }, 150);
        }
        // eslint-disable-next-line react-hooks/rules-of-hooks
        React.useEffect(() => {
          function listener(event: Event) {
            if (!ref.current?.contains(event.target as HTMLElement)) {
              handleDestroy();
            }
          }
          setTimeout(() => {
            window.addEventListener('click', listener);
          });
          return () => {
            window.removeEventListener('click', listener);
            if (timerRef.current) {
              clearTimeout(timerRef.current);
            }
          };
          // eslint-disable-next-line react-hooks/exhaustive-deps
        }, []);
        return (
          <UI.ClassNames>
            {({ css, cx }) => (
              <UI.Block
                css={css`
                  position: fixed;
                  width: 100%;
                  height: 100%;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                  background-color: rgba(0, 0, 0, 0);
                  top: 0;
                  right: 0;
                  bottom: 0;
                  left: 0;
                  margin: auto;
                  z-index: 500;
                  animation-duration: 0.15s;
                  animation-timing-function: ease-in-out;
                  animation-name: react-ui--alert__animate;
                  animation-fill-mode: forwards;
                  opacity: ${closing ? 0 : 1};
                  transition: opacity 0.15s ease;
                  @keyframes react-ui--alert__animate {
                    0% {
                      background-color: rgba(0, 0, 0, 0);
                    }
                    100% {
                      background-color: rgba(0, 0, 0, 0.25);
                    }
                  }
                `}
              >
                <UI.Space
                  ref={ref}
                  direction="vertical"
                  className={cx(
                    css`
                      min-width: 300px;
                      background-color: #ffffff;
                      border-radius: 5px;
                      padding: 15px;
                    `,
                  )}
                  size={16}
                >
                  <UI.Space direction="vertical" size={8}>
                    {title && (
                      <UI.Typography el="h2" color="#999999">
                        {title}
                      </UI.Typography>
                    )}
                    <UI.Typography>{children}</UI.Typography>
                  </UI.Space>
                  <UI.Space justify="end">
                    <UI.Button type="primary" onClick={handleDestroy}>
                      OK
                    </UI.Button>
                  </UI.Space>
                </UI.Space>
              </UI.Block>
            )}
          </UI.ClassNames>
        );
      },
    },
    button: {
      css: css`
        background-color: transparent;
        font-size: 16px;
        cursor: pointer;
        transition: 0.2s all ease;
        border: 1px solid #999999;
        color: #333333;
        padding: 5px 10px;
        border-radius: 8px;
        &:disabled {
          background-color: #cccccc !important;
          cursor: not-allowed;
        }
      `,
      type: {
        primary: {
          css: css`
            background-color: #029cfd;
            border-color: #029cfd;
            color: #ffffff;

            &:hover {
              background-color: #6cc0f6;
              border-color: #6cc0f6;
            }
          `,
        },
        danger: {
          css: css`
            background-color: #ee0000;
            border-color: #ee0000;
            color: #ffffff;

            &:hover {
              background-color: #ff0000;
              border-color: #ff0000;
            }
          `,
        },
      },
      renderLoadingComponent: () => 'is loading',
    },
    card: {
      css: css`
        display: inline-block;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
        border-radius: 8px;
        background-color: #ffffff;
        .card__title {
          padding: 18px 24px;
          color: #333333;
          font-weight: 600;
          font-size: 16px;
          border-bottom: 1px solid #f0f0f0;
        }
        .card__contents {
          padding: 18px 24px;
          color: #333333;
          font-weight: 400;
          font-size: 14px;
          border-bottom: 1px solid #f0f0f0;
        }
      `,
    },
    form: {
      item: {
        css: css`
          display: block;
          width: 100%;
        `,
        label: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            color: #999999;
            font-size: 14px;
            font-weight: 500;
          `,
        },
        error: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            color: #ff0000;
            font-size: 14px;
            font-weight: 500;
          `,
        },
      },
    },
    input: {
      css: css`
        width: 100%;
        border: 1px solid #cccccc;
        padding: 8px 10px;
        border-radius: 8px;
        box-sizing: border-box;
        font-family: NotoSansKR, sans-serif;
      `,
      email: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
      number: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
      password: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
      checkbox: {
        css: css`
          display: flex;
          align-items: center;
        `,
        input: {
          css: css``,
        },
        label: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            font-size: 14px;
            margin-left: 3px;
          `,
        },
      },
      radio: {
        css: css`
          display: flex;
          align-items: center;
        `,
        input: {
          css: css``,
        },
        label: {
          css: css`
            font-family: NotoSansKR, sans-serif;
            font-size: 14px;
            margin-left: 3px;
          `,
        },
      },
      textarea: {
        css: css`
          width: 100%;
          border: 1px solid #cccccc;
          padding: 8px 10px;
          border-radius: 8px;
          box-sizing: border-box;
          font-family: NotoSansKR, sans-serif;
        `,
      },
    },
    list: {
      css: css`
        display: inline-block;
        border: 1px solid #eeeeee;
        border-radius: 8px;
      `,
      item: {
        css: css`
          font-size: 14px;
          font-family: sans-serif;
          padding: 12px 16px;
          &:not(:last-child) {
            border-bottom: 1px solid #eeeeee;
          }
        `,
      },
      type: {
        red: {
          css: css`
            border-color: #f00;
            background-color: rgba(255, 0, 0, 0.15);
          `,
          item: {
            css: css`
              color: #f00;
              &:not(:last-child) {
                border-bottom-color: #f00;
              }
            `,
          },
        },
      },
    },
    space: {
      defaultSize: 'm',
      size: {
        xs: 10,
        s: 12,
        m: 14,
        l: 16,
        xl: 18,
      },
    },
    toast: {
      css: (props) => css`
        position: fixed;
        margin: 0 auto;
        background-color: #ffffff;
        padding: 8px 30px;
        border: 1px solid #cccccc;
        top: ${(props.index ?? 0) * 45 + 15}px;
        left: 50%;
        transform: translateX(-50%);
        border-radius: 3px;
        font-family: NotoSansKR, sans-serif;
        animation-duration: 3s;
        animation-timing-function: ease-in-out;
        animation-name: react-ui--toast__animate;
        animation-fill-mode: forwards;
        transition: top 0.5s ease;
        @keyframes react-ui--toast__animate {
          0% {
            transform: translateY(-100%);
          }
          5% {
            transform: translateY(0%);
          }
          95% {
            transform: translateY(0%);
          }
          100% {
            transform: translateY(-100%);
          }
        }
      `,
      timeout: 3000,
    },
    typography: {
      css: css`
        font-size: 16px;
        font-weight: 500;
        color: #333333;
        margin: 0;
        font-family: 'NotoSansKR', sans-serif;
      `,
      type: {
        h1: {
          css: css`
            font-size: 32px;
            font-weight: 600;
            color: #333333;
          `,
        },
      },
    },
  },
} satisfies UI.ThemeType;
