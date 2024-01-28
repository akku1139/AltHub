function toGitHubURL(path: string): string {
  if(path.startsWith("/gist")) {
    return "https://gist.github.com"+path.substring(5);
  } else { // Fix
    return "https://github.com"+path;
  }
}

export default toGitHubURL;
