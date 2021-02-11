import Highlight, { defaultProps } from 'prism-react-renderer';

import styles from '@/styles/components/pages/content/Bard.module.scss';

const theme = {
   styles: [
       {
           types: [
               "comment",
               "prolog",
               "doctype",
               "cdata"
           ],
           style: {
               color: "#39557f"
           }
       },
       {
           types: [
                "property",
                "tag",
                "boolean",
                "number",
                "constant",
                "symbol",
                "deleted"
           ],
           style: {
               color: '#e25f6e'
           }
       },
       {
           types: [
                "string"
           ],
           style: {
               color: '#b8ea7f'
           }
       },
       {
           types: [
                "selector",
                "char",
                "builtin",
                "number",
                "class-name",
                "unit",
                "inserted"
           ],
           style: {
               color: '#ee9900'
           }
       },
       {
           types: [
                "entity",
                "url",
           ],
           style: {
               color: '#89ddff'
           }
       },
       {
           types: [
                "atrule",
                "attr-name",
                "attr-value",
                "operator",
                "keyword",
           ],
           style: {
               color: '#b57dd3'
           }
       },
       {
           types: [
                "function",
           ],
           style: {
               color: '#709df1'
           }
       },
       {
           types: [
                "regex",
                "important",
                "punctuation",
                "variable",
           ],
           style: {
               color: '#00dce2'
           }
       }
   ]
}

const CodeBlock = ({ code, language, caption }) => {
    return (
        <div className={styles.codeBlock}>
            <span className={styles.codeLang}>{language}</span>
            <div className={styles.codeContainer}>
                <Highlight {...defaultProps} theme={theme} code={code} language={language}>
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </div>
        </div>
    )
}

export default CodeBlock
