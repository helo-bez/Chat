type CustomStyle = React.CSSProperties & { dotColor?: string };

export const Typing = ({ style }: { style: CustomStyle }) => {
  const dotStyles: React.CSSProperties = {
    float: 'left',
    width: '8px',
    height: '8px',
    margin: '0 4px',
    background: style.dotColor || '#0072bc',
    borderRadius: '50%',
    opacity: 0,
    animation: 'loadingFade 1s infinite',
  };
  const typingStyles: React.CSSProperties = {
    width: '5em',
    height: '2em',
    position: 'relative',
    padding: '10px',
    marginLeft: '1rem',
    borderRadius: '20px',
    backgroundColor: style.backgroundColor,
  };

  const dotDelayStyles: React.CSSProperties = {
    animationDelay: '0s',
  };

  const dotDelay2Styles: React.CSSProperties = {
    animationDelay: '0.2s',
  };

  const dotDelay4Styles: React.CSSProperties = {
    animationDelay: '0.4s',
  };

  const keyframes = `
   @keyframes loadingFade {
     0%, 100% {
       opacity: 0;
    }
     50% {
       opacity: 0.8;
    }
   }
   `;

  return (
    <div style={{ ...typingStyles, ...style }}>
      <div style={{ ...dotStyles, ...dotDelayStyles }}></div>
      <div style={{ ...dotStyles, ...dotDelay2Styles }}></div>
      <div style={{ ...dotStyles, ...dotDelay4Styles }}></div>
      <style>{keyframes}</style>
    </div>
  );
};
