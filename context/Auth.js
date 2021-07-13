const AuthContext = React.createContext();

const AuthProvider = (props) => {
  const login = (user, password) => {};

  const register = (user, password) => {};

  const logout = () => {};

  return (
    <AuthContext.Provider value={{ login, register, logout }} {...props} />
  );
};

const useAuth = React.useContext(AuthContext);

module.exports = { useAuth, AuthProvider };
