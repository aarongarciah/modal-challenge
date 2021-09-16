interface DialogProps {
  /**
   * Dialog's content
   */
   children: React.ReactNode;
}

const Dialog = ({ children, ...rest }: DialogProps) => {
  return (
    <div {...rest}>
      {children}
    </div>
  );
};

export {Dialog};
