/** @jsxImportSource @emotion/react */

import logo from './logo.svg';
import { css } from '@emotion/react';

const bannerSectionStyles = css`
  background-color: #1a202c;
  display: flex;
  justify-content: center;
  padding: 16px;

  a {
    color: #e2e8f0;
    text-decoration: none;
    font-size: 1.125rem;
  }
`;

const highlightedTextStyles = css`
  color: #71e8df;
  font-weight: 700;
`;

const underlinedSignUpSectionStyles = css`
  text-decoration: underline;
`;

const wrapperStyles = css`
  max-width: 1248px;
  margin: auto;
`;

const topNavigationStyles = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const navigationMenuStyles = css`
  list-style-type: none;
  display: flex;
  gap: 12px;

  li {
    border-bottom: 2px solid transparent;

    :hover {
      border-bottom: 2px solid #5a67d8;

      > a {
        color: #5a67d8;
      }
    }

    > a {
      text-decoration: none;
      color: #2d3748;
      font-weight: 600;
      font-size: 1rem;
      padding: 12px 16px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
`;

function App() {
  return (
    <>
      <header>
        <section css={bannerSectionStyles}>
          <a href="/#">
            Up to 1000x faster database queries with{' '}
            <span css={highlightedTextStyles}>Accelerate</span> {`->`}{' '}
            <span css={underlinedSignUpSectionStyles}>
              Sign up for Early Access
            </span>
          </a>
        </section>
        <div css={wrapperStyles}>
          <div css={topNavigationStyles}>
            <a href="/#">
              <img
                src="https://prismalens.vercel.app/header/logo-dark.svg"
                alt="Prisma logo"
              />
            </a>
            <nav>
              <ul css={navigationMenuStyles}>
                <li>
                  <a href="/#">Product</a>
                </li>
                <li>
                  <a href="/#">Docs</a>
                </li>
                <li>
                  <a href="/#">Developer</a>
                </li>
                <li>
                  <a href="/#">Use Cases</a>
                </li>
                <li>
                  <a href="/#">Company</a>
                </li>
              </ul>
            </nav>
            <div>
              <a href="/#">Get Started</a>
              <a href="/#">Logo</a>
            </div>
          </div>
        </div>
      </header>
      <main>my main</main>
      <footer>footer</footer>
    </>
  );
}

export default App;
