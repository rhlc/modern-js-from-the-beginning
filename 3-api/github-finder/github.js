class Github {
  constructor() {
    this.client_id = 'Iv1.12f392b5559d4df2';
    this.client_secret = 'f9e91cb8238caf191d3b060e4236ba1eb9fa0e72';
  }
  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}/repos?perpage=${this.client_id}&client_secret=${this.client_secret}`
    );
    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

    const profileData = await profileResponse.json();
    return {
      profile,
    };
  }
}
