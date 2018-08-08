class GitHub {
  constructor() {
    this.client_id = '569d3f5e0752d5293c56';
    this.client_secret = '1c8a8f8ef3abb9ab527d66fc56e7421112223c3e';
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${
        this.client_id
      }&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile
    };
  }
}
