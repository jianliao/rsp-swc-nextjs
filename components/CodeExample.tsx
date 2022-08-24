import { useEffect, useState } from "react";
import { Content, Heading, Well } from "@adobe/react-spectrum";
import { PrismLight as SyntaxHighlighter } from "react-syntax-highlighter";
import { a11yDark, prism } from "react-syntax-highlighter/dist/cjs/styles/prism";
import jsx from "react-syntax-highlighter/dist/cjs/languages/prism/jsx";
import { SpTabs, SpTab, SpTabPanel } from "@components/swc";

SyntaxHighlighter.registerLanguage("jsx", jsx);

export default function CodeExample({
  title,
  description,
  rspCode,
  rspChildren,
  swcCode,
  swcChildren,
  cssCode,
  cssChildren,
}: {
  title?: any,
  description?: any,
  rspCode?: string,
  rspChildren?: any,
  swcCode?: string,
  swcChildren?: any,
  cssCode?: string,
  cssChildren?: any,
}) {
  const [colorStyle, setColorStyle] = useState("light");
  useEffect(() => {
    const colorSchemeMedia = "(prefers-color-scheme: dark)";

    // Add listener to update styles
    window.matchMedia(colorSchemeMedia).addEventListener("change", (e) => setColorStyle(e.matches ? "dark" : "light"));

    // Initial code style dark/light mode
    setColorStyle(window.matchMedia(colorSchemeMedia).matches ? "dark" : "light");

    // Remove listener
    return () => window.matchMedia(colorSchemeMedia).removeEventListener("change", () => { });
  }, []);
  return (
    <Well>
      {!!title ? <Heading level={3}>{title}</Heading> : undefined}
      {!!description ? <Heading level={4}>{description}</Heading> : undefined}
      <SpTabs selected="1" size="m">
        <SpTab label="RSP" value="1">
          RSP
        </SpTab>
        <SpTab label="SWC" value="2">
          SWC
        </SpTab>
        <SpTab label="CSS" value="3">
          CSS
        </SpTab>
        <SpTabPanel value="1">
          <Content>
            <Content>
              {!!rspCode ? (
                <SyntaxHighlighter language="jsx" style={colorStyle === "dark" ? a11yDark : prism}>
                  {rspCode}
                </SyntaxHighlighter>
              ) : undefined}
            </Content>
            <Content marginTop="size-75">{rspChildren}</Content>
          </Content>
        </SpTabPanel>
        <SpTabPanel value="2">
          <Content>
            <Content>
              {!!swcCode ? (
                <SyntaxHighlighter language="jsx" style={colorStyle === "dark" ? a11yDark : prism}>
                  {swcCode}
                </SyntaxHighlighter>
              ) : undefined}
            </Content>
            <Content marginTop="size-75">{swcChildren}</Content>
          </Content>
        </SpTabPanel>
        <SpTabPanel value="3">
          <Content>
            <Content>
              {!!cssCode ? (
                <SyntaxHighlighter language="jsx" style={colorStyle === "dark" ? a11yDark : prism}>
                  {cssCode}
                </SyntaxHighlighter>
              ) : undefined}
            </Content>
            <Content marginTop="size-75">{cssChildren}</Content>
          </Content>
        </SpTabPanel>
      </SpTabs>
    </Well>
  );
}
