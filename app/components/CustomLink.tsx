const CustomLink = ({ mark, children }:{mark:{href:string},children:React.ReactNode}) => (
    <a href={mark.href} style={{ color: 'blue' }}>
      {children}
    </a>
  );
export default CustomLink
