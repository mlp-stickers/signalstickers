import React from 'react';
import {styled} from 'linaria/react';
// @ts-ignore (No type definitions exist for this package.)
import Octicon from 'react-octicon';

import {GRAY} from 'etc/colors';
import Container from 'components/Container';
import FlexSpacer from 'components/FlexSpacer';


// ----- Styles ----------------------------------------------------------------

const FooterWrapper = styled.footer`
  width: 100%;
  background-color: ${GRAY};
`;

const Footer = styled.div`
  display: flex;

  & .about {
    flex-basis: 50%;
    margin-right: 24px;
  }

  & .links {
    flex-basis: 50%;
    margin-left: 24px;
  }

  & ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  & h1 {
    font-size: 32px;
    font-weight: 600;
  }

  & strong {
    font-weight: 600;
  }
`;


// ----- Component -------------------------------------------------------------

const FooterComponent: React.FunctionComponent = props => {
  return (
    <>
      <FlexSpacer />
      <FooterWrapper>
        <Container>
          <Footer>
            <div className="about">
              <h1>About</h1>
              <p>
                Browse and download more than 100 sticker packs for Signal, the secure messenger. These
                stickers are created by the community; the maintainers of this website do not claim any
                rights. <strong>This site is not affiliated with Signal</strong>.
              </p>
              <p>
                <a href="https://twitter.com/search?q=%23makeprivacystick&src=typed_query" rel="noreferrer" target="_blank">
                  <strong>#makeprivacystick</strong>
                </a>
              </p>
            </div>
            <div className="links">
              <h1>Links</h1>
              <ul>
                <li>
                  <a href="https://signal.org" rel="noreferrer" target="_blank">
                    <Octicon name="link-external" /> Learn More About Signal
                  </a>
                </li>
                <li>
                  <a href="https://github.com/romainricard/signalstickers" rel="noreferrer" target="_blank">
                    <Octicon name="link-external" /> Add your stickers to this website
                  </a>
                </li>
                <li>
                  <a href="https://support.signal.org/hc/en-us/articles/360031836512-Stickers#h_c2a0a45b-862f-4d12-9ab1-d9a6844062ca" rel="noreferrer" target="_blank">
                    <Octicon name="link-external" /> Learn how to create your own stickers
                  </a>
                </li>
              </ul>
            </div>
          </Footer>
        </Container>
      </FooterWrapper>
    </>
  );
};


export default FooterComponent;