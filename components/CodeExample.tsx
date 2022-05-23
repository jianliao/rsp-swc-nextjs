import { useEffect, useState } from 'react';
import { Content, Heading, Well } from '@adobe/react-spectrum';
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark, prism } from 'react-syntax-highlighter/dist/cjs/styles/prism';
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function CodeExample({ title, description, code, children }: { title?: any, description?: any, code?: string, children: any }) {
  const [colorStyle, setColorStyle] = useState('light');
  useEffect(() => {
    const colorSchemeMedia = '(prefers-color-scheme: dark)';

    // Add listener to update styles
    window.matchMedia(colorSchemeMedia).addEventListener('change', e => setColorStyle(e.matches ? 'dark' : 'light'));

    // Initial code style dark/light mode 
    setColorStyle(window.matchMedia(colorSchemeMedia).matches ? 'dark' : 'light');

    // Remove listener
    return () => {
      window.matchMedia(colorSchemeMedia).removeEventListener('change', () => { });
    }
  }, []);
  return (
    <>
      <Well>
        {
          !!title ?
            <Heading level={3}>
              {title}
            </Heading>
            :
            undefined
        }
        {
          !!description ?
            <Heading level={4}>
              {description}
            </Heading>
            :
            undefined
        }
        <Content>
          {
            !!code ?
              <SyntaxHighlighter language="jsx" style={colorStyle === 'dark' ? a11yDark : prism}>
                {code}
              </SyntaxHighlighter>
              :
              undefined
          }
        </Content>
        <Content>
          <Well>
            {children}
          </Well>
        </Content>
      </Well>
    </>
  )
}
