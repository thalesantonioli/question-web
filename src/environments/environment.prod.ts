export const environment = {
    production: true,
    webapiurl: (window as any)["envconfig"]["apiurl"] || "default",
    webauthurl: (window as any)["envconfig"]["authurl"] || "default"
};
