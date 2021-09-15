export const gitApiUrl = "https://api.github.com/users/joaof85/repos";

const token = "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";
export const gitApiUrlHeaders = {
    headers: { accept: "application/vnd.github.v3+json", Authorization:`Bearer ${ token }` }
};