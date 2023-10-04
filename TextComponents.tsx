import { conditionaClass } from '@/lib';

// Interface for all components
interface ITypographyProps {
  children: React.ReactNode;
  className?: string;
}

// Default classes for each component
const defaults = {
  H1: 'font-toyota-display-bold tracking-normal capitalize leading-h1 text-5.5xl text-darkest-grey',
  H2: 'font-toyota-display-bold tracking-normal capitalize leading-h1 text-5xl text-darkest-grey',
  H3: 'font-toyota-display-bold tracking-normal capitalize leading-h3 text-4.5xl text-darkest-grey',
  H4: 'font-toyota-display-bold tracking-normal capitalize leading-h4 text-3.5xl text-darkest-grey',
  BodyH1:
    'font-toyota-display-bold text-2xl tracking-normal leading-body-h1 text-darkest-grey',
  BodyH2:
    'font-toyota-display-bold text-lg tracking-normal leading-body-h2 text-darkest-grey',
  BodyCopy:
    'font-toyota-display-regular text-base tracking-normal leading-body-copy text-darkest-grey pt-6 bodyCopy',
  BodyCopyGrey:
    'font-toyota-display-regular text-base tracking-normal leading-body-copy text-dark-grey',
  BodyCopySmall:
    'font-toyota-display-regular text-sm tracking-normal leading-body-copy-small text-darkest-grey',
  BodyCopyExtraSmall:
    'font-toyota-display-regular text-xs tracking-normal leading-body-copy-small text-darkest-grey',
};

// H1 component
export const H1 = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.H1 + ' ' + className)
    : defaults.H1;
  return <h1 className={className}>{children}</h1>;
};

// H2 component
export const H2 = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.H2 + ' ' + className)
    : defaults.H2;
  return <h2 className={className}>{children}</h2>;
};

// H3 component
export const H3 = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.H3 + ' ' + className)
    : defaults.H3;
  return <h3 className={className}>{children}</h3>;
};

// H4 component
export const H4 = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.H4 + ' ' + className)
    : defaults.H4;
  return <h4 className={className}>{children}</h4>;
};

// BodyH1 component
export const BodyH1 = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.BodyH1 + ' ' + className)
    : defaults.BodyH1;
  return <h1 className={className}>{children}</h1>;
};

// BodyH2 component
export const BodyH2 = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.BodyH2 + ' ' + className)
    : defaults.BodyH2;
  return <h2 className={className}>{children}</h2>;
};

// BodyCopy component
export const BodyCopy = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.BodyCopy + ' ' + className)
    : defaults.BodyCopy;
  return <div className={className}>{children}</div>;
};

// BodyCopySmall component
export const BodyCopySmall = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.BodyCopySmall + ' ' + className)
    : defaults.BodyCopySmall;
  return <div className={className}>{children}</div>;
};

// BodyCopyGrey component
export const BodyCopyGrey = ({ children, className }: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.BodyCopyGrey + ' ' + className)
    : defaults.BodyCopyGrey;
  return <div className={className}>{children}</div>;
};

// BodyCopyExtraSmall component
export const BodyCopyExtraSmall = ({
  children,
  className,
}: ITypographyProps) => {
  className = className
    ? conditionaClass(defaults.BodyCopyExtraSmall + ' ' + className)
    : defaults.BodyCopyExtraSmall;
  return <div className={className}>{children}</div>;
};
