// Usage
function App() {
  const [darkMode, setDarkMode] = useDarkMode();
  return (
    <div>
      <div className="navbar">
        <Toggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
      // Content..
    </div>
  );
}
// Custom Hook
function useDarkMode() {
  const [enabledState, setEnabledState] = useLocalStorage("dark-mode-enabled");
  const defaultMode = "dark-mode"; // change default mode here
  const enabled =
    typeof enabledState !== "undefined" ? enabledState : defaultMode;

  useEffect(() => {
    const className = "dark-mode";
    const element = window.document.body;
    if (enabled) {
      element.classList.add(className);
    } else {
      element.classList.remove(className);
    }
  }, [enabled]);
  return [enabled, setEnabledState];
}
