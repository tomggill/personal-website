import GitHubIcon from "../icons/GitHubIcon";
const SocialMediaBar = () => (
  <div style={{ display: "flex", gap: "16px" }}>
    <a
      href="https://github.com/tomggill"
      target="_blank"
      rel="noopener noreferrer"
      style={{ border: "2px solid blue", padding: "4px" }}
    >
      <GitHubIcon />
    </a>
  </div>
);
export default SocialMediaBar;
