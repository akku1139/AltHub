function toGitHubURL(path: string): string {
  if(path.startsWith("/gist")) {
    return "https://gist.github.com/"+path.substring(6)
  }
}

export default toGitHubURL;
