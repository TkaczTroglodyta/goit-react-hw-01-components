export const App = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingBottom: 50,
        backgroundColor: '#E7ECF2',
      }}
    >
      {children}
    </div>
  );
};
