function toGitHubURL(path: string): string {
  if(path.startsWith("/gist")) {
    return "https://gist.github.com"+path.substring(5);
  }
  return "https://github.com"+path;
}

export default toGitHubURL;
