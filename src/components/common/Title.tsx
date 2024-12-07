import React, { ReactNode } from 'react';

type TitleProps = {
  content: string | ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type VariantProps = TitleProps & {
  variant: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
};

const Title: React.FC<VariantProps> = ({ variant: Variant, content, className, style }) => {
  return (
    <Variant className={`${className} font-urbanist`} style={style}>
      {content}
    </Variant>
  );
};


export default Title;
