/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import { ReactComponent as GitHubLogo } from './images/githubLogo.svg';

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
  background-color: white;
  padding: 8px;
`;

const navigationMenuStyles = css`
  list-style-type: none;
  display: flex;
  gap: 12px;
  margin: 0;

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

const rightSideNavigationStyles = css`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const primaryLinkStyles = css`
  background-color: #5a67d8;
  text-decoration: none;
  color: white;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 600;
  font-size: 0.85rem;

  :hover {
    background-color: #4c51bf;
  }
`;

const heroSectionStyles = css`
  background-color: #f7fafc;
  background-image: url(/herosection.svg);
  background-position: 60% 0px;
  background-size: cover;
  background-repeat: no-repeat;
  padding: 72px 0;
`;

const heroSectionLeftStyles = css`
  display: flex;
  flex-direction: column;
  gap: 36px;
`;

const heroSectionHeadingStyles = css`
  margin-bottom: 16px;
  color: #1a202c;
  font-family: 'Barlow', sans-serif;
  font-size: 3.75rem;

  span {
    color: #4c51bf;
  }
`;

const heroSectionParagraphStyles = css`
  margin: 0;
  margin-right: 64px;
  line-height: 150%;
  color: #4a5568;
  font-size: 1.5rem;
`;

const heroSectionLayoutStyles = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 112px;
`;

const heroLinkStyles = css`
  background-color: #5a67d8;
  text-decoration: none;
  color: white;
  font-family: 'Barlow', sans-serif;
  padding: 12px 24px;
  border-radius: 6px;
  font-weight: 700;
  font-size: 1.2rem;

  :hover {
    background-color: #4c51bf;
  }
`;

const heroEmptyLinkStyles = css`
  text-decoration: none;
  color: #5a67d8;
  font-family: 'Barlow', sans-serif;
  padding: 12px 24px;
  font-weight: 700;
  font-size: 1.2rem;
  border-radius: 6px;
  border: 1px solid #5a67d8;

  :hover {
    border: 1px solid #4c51bf;
    color: #4c51bf;
  }
`;

const heroSectionLinksContainerStyles = css`
  display: flex;
  gap: 24px;
`;
const reviewsSectionPurpleBarStyles = css`
  background-color: #5a67d8;
  padding: 64px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 124px;
`;

const reviewCardContainerStyles = css`
  margin-top: -64px;
  display: flex;
  gap: 32px;
  flex-wrap: nowrap;
  overflow-x: auto;
  padding: 32px;
`;

const reviewSectionTextStyles = css`
  color: #ffffff;
  font-size: 1.25rem;
  font-weight: 600;
`;

const cardStyles = css`
  background-color: white;
  border-radius: 8px;
  padding: 16px 64px;
  min-width: 500px;
  box-shadow: rgb(0 19 53 / 6%) 0px 9px 27px,
    rgb(0 19 53 / 4%) 0px 3.75998px 11.28px,
    rgb(0 19 53 / 4%) 0px 2.01027px 6.0308px,
    rgb(0 19 53 / 3%) 0px 1.12694px 3.38082px,
    rgb(0 19 53 / 2%) 0px 0.598509px 1.79553px,
    rgb(0 19 53 / 2%) 0px 0.249053px 0.747159px;

  img {
    width: 50px;
    border-radius: 50%;
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
            <div css={rightSideNavigationStyles}>
              <a href="/#" css={primaryLinkStyles}>
                Get Started
              </a>
              <a href="/#">
                <GitHubLogo />
              </a>
            </div>
          </div>
        </div>
      </header>
      <main>
        <section css={heroSectionStyles}>
          <div css={wrapperStyles}>
            <div css={heroSectionLayoutStyles}>
              <div css={heroSectionLeftStyles}>
                <h1 css={heroSectionHeadingStyles}>
                  Next-generation <span>Node.js</span> and{' '}
                  <span>TypeScript</span> ORM
                </h1>
                <p css={heroSectionParagraphStyles}>
                  Prisma unlocks a new level of <b>developer experience</b> when
                  working with databases thanks to its intuitive data model,
                  automated migrations, type-safety & auto-completion.
                </p>
                <div css={heroSectionLinksContainerStyles}>
                  <a href="/#" css={heroLinkStyles}>
                    Quickstart
                  </a>
                  <a href="/#" css={heroEmptyLinkStyles}>
                    Playground
                  </a>
                </div>
              </div>
              <div>
                <div>
                  <iframe
                    width="480"
                    height="270"
                    src="https://www.youtube.com/embed/EEDGwLB55bI"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    sandbox=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div css={reviewsSectionPurpleBarStyles}>
            <div>
              <span css={reviewSectionTextStyles}>25k+ Stars on GitHub</span>
            </div>
            <div>
              <span css={reviewSectionTextStyles}>250k+ Active developers</span>
            </div>
          </div>

          <div css={reviewCardContainerStyles}>
            <div css={cardStyles}>
              <p>
                “The flexibility of <b>moving fast</b> and changing the product
                based on user feedback fast was crucial”
              </p>
              <div>
                <img
                  src="https://website-v9.vercel.app/images/home-page/serghei-ghidora.jpeg"
                  alt=""
                />
                <div>
                  <span>Lasse Abelsen</span>
                  <span>Devops Engineer</span>
                </div>
              </div>
            </div>
            <div css={cardStyles}>
              <p>
                “The flexibility of <b>moving fast</b> and changing the product
                based on user feedback fast was crucial”
              </p>
              <div>
                <img
                  src="https://website-v9.vercel.app/images/home-page/serghei-ghidora.jpeg"
                  alt=""
                />
                <div>
                  <span>John Doe</span>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div css={cardStyles}>
              <p>
                “The flexibility of <b>moving fast</b> and changing the product
                based on user feedback fast was crucial”
              </p>
              <div>
                <img
                  src="https://website-v9.vercel.app/images/home-page/serghei-ghidora.jpeg"
                  alt=""
                />
                <div>
                  <span>John Doe</span>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div css={cardStyles}>
              <p>
                “The flexibility of <b>moving fast</b> and changing the product
                based on user feedback fast was crucial”
              </p>
              <div>
                <img
                  src="https://website-v9.vercel.app/images/home-page/serghei-ghidora.jpeg"
                  alt=""
                />
                <div>
                  <span>John Doe</span>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
            <div css={cardStyles}>
              <p>
                “The flexibility of <b>moving fast</b> and changing the product
                based on user feedback fast was crucial”
              </p>
              <div>
                <img
                  src="https://website-v9.vercel.app/images/home-page/serghei-ghidora.jpeg"
                  alt=""
                />
                <div>
                  <span>John Doe</span>
                  <span>Frontend Developer</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* <footer>footer</footer> */}
    </>
  );
}

export default App;
