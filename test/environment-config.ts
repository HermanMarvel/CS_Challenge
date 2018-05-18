export class Config {
  targetUrl: string;
  endpoints: string[];

  getDefaultConfig() {

    const config = new Config();

    config.targetUrl = "https://git.io";
    config.endpoints = ["/vpg9V", "/vpg95"];

    return config;
  }
}

