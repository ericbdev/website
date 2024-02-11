import React from "react";

const withMounted =
  <P extends object>(Component: React.ComponentType<P>): React.FC<P> =>
  (props: P) => {
    const [mounted, setMounted] = React.useState(false);
    React.useEffect(() => {
      setMounted(true);
    }, []);

    const ReturnedComponent = mounted ? <Component {...props} /> : null;

    return ReturnedComponent;
  };

export default withMounted;
