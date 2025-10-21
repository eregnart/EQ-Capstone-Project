// A simple stubbed Auth Presenter
export function createAuthPresenter(authService) {
  return {
    login: (email, pin) => {
      console.log("AuthPresenter → login called with:", email, pin);
      // TODO: call authService.login(email, pin);
      return true;
    },
    logout: () => {
      console.log("AuthPresenter → logout called");
      // TODO: call authService.logout();
      return true;
    },
    isAuthenticated: () => {
      console.log("AuthPresenter → isAuthenticated called");
      // TODO: call authService.isAuthenticated();
      return false;
    },
  };
}
